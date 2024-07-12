import convertZulu from "../utils/convertZulu";
import bookingType from "../utils/bookingType";
import liveNetworkData from "../utils/liveNetworkData";
import vatscaController from "../utils/vatscaController";
import fixNetworkTime from "../utils/fixNetworkTime";

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

interface ATC {
  callsign: string;
  name: string;
  time_start: string;
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

var todayATC: Object[] = []

for (const controller of await liveNetworkData()) {
  if (vatscaController(controller.callsign)) {
    let atcInstance: ATC = {
      callsign: "🟢 " + controller.callsign,
      name: controller.name,
      time_start: convertZulu(fixNetworkTime(controller.logon_time))
    };
    todayATC.push(atcInstance);
  }
}

const ScheduleTable: React.FC = () => {
  // Organize data by date
  const currentDate = new Date();
  const nextSevenDays = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  const scheduleByDate = jsonData.data.reduce(
    (acc: { [key: string]: ScheduleEntry[] }, entry: ScheduleEntry) => {
      const entryDate = new Date(entry.time_start);
      if (entryDate.getDate() >= currentDate.getDate() && entryDate <= nextSevenDays) {
        const date = entryDate.toISOString().split("T")[0];
        if (!acc[date]) {
          acc[date] = [];
        }
        acc[date].push(entry);
      }
      return acc;
    },
    {}
  );

  const today = new Date().toISOString().split("T")[0];
  const todayATCEntries = scheduleByDate[today] || [];
  const updatedScheduleByDate = {
    ...scheduleByDate,
    [today]: [...todayATCEntries, ...todayATC]
  };

  const scheduleByDateWithTodayATC = Object.keys(updatedScheduleByDate).map((date) => ({
    date,
    entries: updatedScheduleByDate[date]
  }));

  return (
    <div>
      {scheduleByDateWithTodayATC.map(({ date, entries }) => (
        <div key={date}>
          <table className="w-full px-2">
            <thead>
              <tr>
                <th className="bg-[#246385] text-white w-full h-8 pt-1" colSpan={4}>
                  {scheduleByDate[today]?.length > 0 && (
                    <span>
                      {getDayName(today, "en-US") === getDayName(new Date().toISOString().split("T")[0], "en-US")
                        ? "Today"
                        : getDayName(date, "en-US").charAt(0).toUpperCase() + getDayName(date, "en-US").slice(1)}
                    </span>
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((entry: ScheduleEntry) => (
                <tr key={entry.id} className="h-6 even:bg-gray-50 odd:bg-white dark:even:bg-[#0f2a38] dark:odd:bg-black">
                  <td className="font-bold w-[37%] pl-2">{entry.callsign}</td>
                  <td className="w-[23%]">{bookingType(entry)}</td>
                  <td className="w-[20%]">{convertZulu(entry.time_start)}</td>
                  <td className="w-[20%]">{convertZulu(entry.time_end)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
      {scheduleByDate[today]?.length === 0 && <div>No bookings for today.</div>}
      {scheduleByDate[today]?.length > 0 && (
        <div>
          {getDayName(today, "en-US") === getDayName(new Date().toISOString().split("T")[0], "en-US")
            ? "Today's bookings:"
            : "Bookings:"}
        </div>
      )}
    </div>
  );
};

export default ScheduleTable;