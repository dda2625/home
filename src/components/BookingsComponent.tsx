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

var jsonData: ScheduleData = {
    data: [
      {
        id: 272092,
        callsign: "EKCH_A_TWR",
        time_start: "2024-07-10 17:30:00",
        time_end: "2024-07-10 20:00:00",
        training: 1,
        event: 0,
        exam: 0,
        created_at: "2024-07-06T10:37:15.000000Z",
        updated_at: "2024-07-06T10:37:15.000000Z",
      },
      {
        id: 272089,
        callsign: "EKCH_W_APP",
        time_start: "2024-07-10 18:00:00",
        time_end: "2024-07-10 20:00:00",
        training: 0,
        event: 0,
        exam: 1,
        created_at: "2024-07-06T10:33:25.000000Z",
        updated_at: "2024-07-06T10:35:55.000000Z",
      },
      {
        id: 272146,
        callsign: "EKDK_CTR",
        time_start: "2024-07-10 18:00:00",
        time_end: "2024-07-10 20:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-10T06:12:07.000000Z",
        updated_at: "2024-07-10T06:12:45.000000Z",
      },
      {
        id: 272148,
        callsign: "ESGG_GND",
        time_start: "2024-07-10 19:00:00",
        time_end: "2024-07-10 20:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-10T11:22:06.000000Z",
        updated_at: "2024-07-10T11:22:06.000000Z",
      },
      {
        id: 272121,
        callsign: "EKDK_CTR",
        time_start: "2024-07-11 16:00:00",
        time_end: "2024-07-11 18:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-07T19:46:04.000000Z",
        updated_at: "2024-07-07T19:46:04.000000Z",
      },
      {
        id: 272108,
        callsign: "EFHK_E_TWR",
        time_start: "2024-07-11 17:00:00",
        time_end: "2024-07-11 20:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-07T12:02:07.000000Z",
        updated_at: "2024-07-07T12:02:07.000000Z",
      },
      {
        id: 272142,
        callsign: "ESSA_E_APP",
        time_start: "2024-07-11 17:00:00",
        time_end: "2024-07-11 19:30:00",
        training: 1,
        event: 0,
        exam: 0,
        created_at: "2024-07-09T19:31:55.000000Z",
        updated_at: "2024-07-09T20:46:24.000000Z",
      },
      {
        id: 272143,
        callsign: "EFOU_TWR",
        time_start: "2024-07-11 17:00:00",
        time_end: "2024-07-11 20:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-09T19:52:23.000000Z",
        updated_at: "2024-07-09T19:52:23.000000Z",
      },
      {
        id: 272144,
        callsign: "EFHK_GND",
        time_start: "2024-07-11 17:00:00",
        time_end: "2024-07-11 20:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-09T22:14:44.000000Z",
        updated_at: "2024-07-09T22:14:44.000000Z",
      },
      {
        id: 272145,
        callsign: "ESSB_GND",
        time_start: "2024-07-11 17:00:00",
        time_end: "2024-07-11 19:30:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-09T22:56:22.000000Z",
        updated_at: "2024-07-09T22:56:22.000000Z",
      },
      {
        id: 272156,
        callsign: "EFHK_E_APP",
        time_start: "2024-07-11 17:00:00",
        time_end: "2024-07-11 20:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-10T18:37:45.000000Z",
        updated_at: "2024-07-10T18:37:45.000000Z",
      },
      {
        id: 272157,
        callsign: "EFIN_D_CTR",
        time_start: "2024-07-11 17:00:00",
        time_end: "2024-07-11 20:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-10T18:38:02.000000Z",
        updated_at: "2024-07-10T18:38:02.000000Z",
      },
      {
        id: 272149,
        callsign: "ESGG_GND",
        time_start: "2024-07-11 17:45:00",
        time_end: "2024-07-11 19:15:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-10T11:22:55.000000Z",
        updated_at: "2024-07-10T11:22:55.000000Z",
      },
      {
        id: 272091,
        callsign: "EKCH_W_APP",
        time_start: "2024-07-11 18:00:00",
        time_end: "2024-07-11 20:00:00",
        training: 0,
        event: 0,
        exam: 1,
        created_at: "2024-07-06T10:36:22.000000Z",
        updated_at: "2024-07-06T10:39:20.000000Z",
      },
      {
        id: 272096,
        callsign: "EKDK_CTR",
        time_start: "2024-07-11 18:00:00",
        time_end: "2024-07-11 20:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-06T11:06:01.000000Z",
        updated_at: "2024-07-06T11:06:01.000000Z",
      },
      {
        id: 272124,
        callsign: "EKCH_A_TWR",
        time_start: "2024-07-11 18:00:00",
        time_end: "2024-07-11 20:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-07T20:46:43.000000Z",
        updated_at: "2024-07-07T20:46:43.000000Z",
      },
      {
        id: 272150,
        callsign: "ESGG_GND",
        time_start: "2024-07-12 17:45:00",
        time_end: "2024-07-12 19:15:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-10T11:23:18.000000Z",
        updated_at: "2024-07-10T11:23:18.000000Z",
      },
      {
        id: 272151,
        callsign: "ESGG_GND",
        time_start: "2024-07-13 17:30:00",
        time_end: "2024-07-13 20:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-10T11:23:58.000000Z",
        updated_at: "2024-07-10T11:24:16.000000Z",
      },
      {
        id: 272152,
        callsign: "ESGG_GND",
        time_start: "2024-07-14 17:45:00",
        time_end: "2024-07-14 19:15:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-10T11:24:53.000000Z",
        updated_at: "2024-07-10T11:24:53.000000Z",
      },
      {
        id: 272135,
        callsign: "EKCH_F_APP",
        time_start: "2024-07-15 17:00:00",
        time_end: "2024-07-15 18:15:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-09T12:41:20.000000Z",
        updated_at: "2024-07-09T12:41:20.000000Z",
      },
      {
        id: 272137,
        callsign: "EKCH_A_GND",
        time_start: "2024-07-15 17:00:00",
        time_end: "2024-07-15 18:15:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-09T13:12:45.000000Z",
        updated_at: "2024-07-09T13:12:45.000000Z",
      },
      {
        id: 272134,
        callsign: "EKDK_A_CTR",
        time_start: "2024-07-15 18:15:00",
        time_end: "2024-07-15 20:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-09T12:30:41.000000Z",
        updated_at: "2024-07-09T12:30:41.000000Z",
      },
      {
        id: 272136,
        callsign: "EKCH_F_APP",
        time_start: "2024-07-15 18:15:00",
        time_end: "2024-07-15 20:30:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-09T12:41:51.000000Z",
        updated_at: "2024-07-09T12:41:51.000000Z",
      },
      {
        id: 272138,
        callsign: "EKCH_A_GND",
        time_start: "2024-07-15 18:15:00",
        time_end: "2024-07-15 20:30:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-09T13:13:03.000000Z",
        updated_at: "2024-07-09T13:13:03.000000Z",
      },
      {
        id: 272155,
        callsign: "EKCH_W_APP",
        time_start: "2024-07-15 18:15:00",
        time_end: "2024-07-15 20:30:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-10T16:41:47.000000Z",
        updated_at: "2024-07-10T16:41:47.000000Z",
      },
      {
        id: 272046,
        callsign: "BIKF_TWR",
        time_start: "2024-07-21 16:00:00",
        time_end: "2024-07-21 19:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-02T12:52:08.000000Z",
        updated_at: "2024-07-06T10:33:23.000000Z",
      },
      {
        id: 272051,
        callsign: "BIKF_APP",
        time_start: "2024-07-21 16:00:00",
        time_end: "2024-07-21 19:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-02T14:20:08.000000Z",
        updated_at: "2024-07-02T14:20:08.000000Z",
      },
      {
        id: 272101,
        callsign: "BIKF_GND",
        time_start: "2024-07-21 16:00:00",
        time_end: "2024-07-21 19:00:00",
        training: 0,
        event: 1,
        exam: 0,
        created_at: "2024-07-06T17:50:52.000000Z",
        updated_at: "2024-07-06T17:50:52.000000Z",
      },
      {
        id: 272058,
        callsign: "EKCH_W_APP",
        time_start: "2024-07-23 18:00:00",
        time_end: "2024-07-23 20:00:00",
        training: 0,
        event: 0,
        exam: 1,
        created_at: "2024-07-03T08:30:38.000000Z",
        updated_at: "2024-07-06T10:44:57.000000Z",
      },
      {
        id: 271975,
        callsign: "EKCH_W_APP",
        time_start: "2024-07-24 18:00:00",
        time_end: "2024-07-24 20:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-06-25T13:31:04.000000Z",
        updated_at: "2024-06-25T13:31:04.000000Z",
      },
      {
        id: 272116,
        callsign: "EKCH_A_TWR",
        time_start: "2024-07-24 18:00:00",
        time_end: "2024-07-24 20:00:00",
        training: 0,
        event: 0,
        exam: 1,
        created_at: "2024-07-07T16:04:27.000000Z",
        updated_at: "2024-07-07T16:06:10.000000Z",
      },
      {
        id: 272062,
        callsign: "EKCH_W_APP",
        time_start: "2024-07-31 18:00:00",
        time_end: "2024-07-31 20:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-03T11:46:13.000000Z",
        updated_at: "2024-07-03T11:46:13.000000Z",
      },
      {
        id: 272093,
        callsign: "EKCH_A_TWR",
        time_start: "2024-07-31 18:00:00",
        time_end: "2024-07-31 20:00:00",
        training: 0,
        event: 0,
        exam: 1,
        created_at: "2024-07-06T10:55:21.000000Z",
        updated_at: "2024-07-06T10:58:45.000000Z",
      },
      {
        id: 272140,
        callsign: "ESSB_GND",
        time_start: "2024-08-13 17:00:00",
        time_end: "2024-08-13 20:00:00",
        training: 0,
        event: 0,
        exam: 0,
        created_at: "2024-07-09T15:02:57.000000Z",
        updated_at: "2024-07-09T15:02:57.000000Z",
      },
    ],
  };

const res = await fetch('https://cc.vatsim-scandinavia.org/api/bookings')
const data = await res.json()

console.log(data);

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
                <th className="bg-[#132834] text-white w-full h-8 pt-1" colSpan={4}>
                {getDayName(date, "en-US").charAt(0).toUpperCase() +
                    getDayName(date, "en-US").slice(1)}
                </th>
            </thead>
            <tbody>
              {scheduleByDate[date].map((entry) => (
                <tr key={entry.id}>
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
