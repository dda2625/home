import convertZulu from "../utils/convertZulu";
import bookingType from "../utils/bookingType";

interface ScheduleEntry {
  id: number;
  callsign: string;
  time_start: string;
  time_end: string;
  training: number;
  event: number;
  exam: number;
  created_at: string;
  updated_at: string;
}

interface ScheduleData {
    data: ScheduleEntry[];
}



let headers = new Headers({
    "Accept"       : "application/json",
    "Content-Type" : "application/json",
    "User-Agent"   : "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36"
});

const res = await fetch('https://cc.vatsim-scandinavia.org/api/bookings',{
    method  : 'GET', 
    headers : headers 
})
var jsonData = await res.json()


function getDayName(dateStr: string, locale: string) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

const ScheduleTable: React.FC = () => {
  // Organize data by date
  const scheduleByDate = jsonData.data.reduce(
    (acc: { [key: string]: ScheduleEntry[] }, entry) => {
      const date = entry.time_start.split(" ")[0];
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(entry);
      return acc;
    },
    {}
  );

  return (
    <div>
      {Object.keys(scheduleByDate).map((date) => (
        <div key={date}>
          <table className="w-full px-2">
            <thead>
                <tr>
                  <th className="bg-[#246385] text-white w-full h-8 pt-1" colSpan={4}>
                    {getDayName(date, "en-US").charAt(0).toUpperCase() +
                        getDayName(date, "en-US").slice(1)}
                    </th>
                </tr>
            </thead>
            <tbody>
              {scheduleByDate[date].map((entry) => (
                <tr key={entry.id} className="even:bg-gray-50 odd:bg-white dark:even:bg-[#0f2a38] dark:odd:bg-black">
                  <td className="font-bold">{entry.callsign}</td>
                  <td>{bookingType(entry)}</td>
                  <td>{convertZulu(entry.time_start)}</td>
                  <td>{convertZulu(entry.time_end)}</td>
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
