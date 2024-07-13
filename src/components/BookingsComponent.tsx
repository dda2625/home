import fixNetworkTime from "../utils/fixNetworkTime"
import convertZulu from "../utils/convertZulu"
import bookingType from "../utils/bookingType"

interface NetworkDataTypes{
    name: string
    callsign: string,
    facility: number,
    rating: number,
    logon_time: Date
}

interface BookingDataTypes{
  callsign: string
  time_start: Date,
  time_end: Date,
  training: number,
  event: number,
  exam: number
}
async function BookingData() {
  try {
      const response = await fetch('https://cc.vatsim-scandinavia.org/api/bookings');
      if (response.ok) {
          const data = await response.json();
          var dd = data.data
          return dd;
      } else {
          console.error('Error fetching data:', response.status);
          return null;
      }
  } catch (error) {
      console.error('Error fetching data:', error);
      return null;
  }
}

async function NetworkData() {
  try {
      const response = await fetch('https://data.vatsim.net/v3/vatsim-data.json');
      if (response.ok) {
          const data = await response.json();
          return data.controllers;
      } else {
          console.error('Error fetching data:', response.status);
          return null;
      }
  } catch (error) {
      console.error('Error fetching data:', error);
      return null;
  }

}

function isActiveRoster(NetworkData: NetworkDataTypes) {
  const possibleOptions = ['EK', 'EN', 'ES', 'EF', 'BI', 'BG']; // List of possible options
  const firstTwoChars = NetworkData.callsign.substring(0, 2); // Get the first four characters of the string
  if (possibleOptions.includes(firstTwoChars) && NetworkData.facility >= 1 && NetworkData.rating >= 1) {
    return true; 
  }
  return false;
}

var sessions:any = []

for (const session of await BookingData()) {
  const atcsession = {
    callsign: session.callsign,
    time_start: session.time_start,
    time_end: session.time_end,
    training: session.training,
    event: session.event,
    exam: session.exam,
    type: 'Booking'
  };
  sessions.push(atcsession);
}

for (const session of await NetworkData()) {
  if (!isActiveRoster(session)) {
    continue;
  }
  const atcsession = {
    callsign: session.callsign,
    time_start: fixNetworkTime(session.logon_time),
    training: null,
    event: null,
    exam: null,
    type: 'Network'
  };
  sessions.push(atcsession);
}
// Reduce sessions to include only the next 6 days
const currentDate = new Date();
const nextSixDays = new Date(currentDate.getTime() + (6 * 24 * 60 * 60 * 1000)); // Add 6 days to the current date
const filteredSessions = sessions.filter((session: any) => {
  const sessionDate = new Date(session.time_start);
  return sessionDate <= nextSixDays;
});

// Sort filtered sessions by time_start
filteredSessions.sort((a: any, b: any) => {
  return new Date(a.time_start).getTime() - new Date(b.time_start).getTime();
});

// Group filtered sessions by day
const groupedFilteredSessions: { [key: string]: any[] } = {};
filteredSessions.forEach((session: any) => {
  const date = new Date(session.time_start).toLocaleDateString();
  if (!groupedFilteredSessions[date]) {
    groupedFilteredSessions[date] = [];
  }
  groupedFilteredSessions[date].push(session);
});

// Sort sessions by time_start
sessions.sort((a: any, b: any) => {
  return new Date(a.time_start).getTime() - new Date(b.time_start).getTime();
});

// Group sessions by day
const groupedSessions: { [key: string]: any[] } = {};
sessions.forEach((session: any) => {
  const date = new Date(session.time_start).toLocaleDateString();
  if (!groupedSessions[date]) {
    groupedSessions[date] = [];
  }
  groupedSessions[date].push(session);
});

function getDayName(dateStr: string) {
  var date = new Date(dateStr);
  var today = new Date().toLocaleDateString('en-US', { weekday: "long" })
  if (date.toLocaleDateString('en-US', { weekday: "long" }) == today ) {
    return "Today";
  }
  return date.toLocaleDateString('en-US', { weekday: "long" });
}


const ScheduleTable: React.FC = () => {


  return (
    <div>
    {Object.keys(groupedFilteredSessions).map((date: string) => (
      <div key={date}>
        <h2 className="bg-[#d5dfdf] dark:bg-[#1b3546] w-full font-bold text-black dark:text-white p-2 text-center">{getDayName(date)}</h2>
        <table className="w-full px-2">
          <tbody>
            {groupedFilteredSessions[date].map((session: any) => (
              <tr key={session.callsign} className="h-6 even:bg-gray-50 odd:bg-white dark:even:bg-[#0f2a38] dark:odd:bg-black">
                {session.type === 'Booking' ? <td className="pl-[4px]">○ {session.callsign}</td> : <td className="pl-[4px]"><span className="text-[#1a4860]">●</span> {session.callsign}</td>}
                <td>{bookingType(session)}</td>
                <td>{convertZulu(session.time_start)}</td>
                <td>{session.time_end ? convertZulu(session.time_end) : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ))}
  </div>
  );
};

export default ScheduleTable;