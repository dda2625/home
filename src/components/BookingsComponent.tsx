import bookingType from "../utils/bookingType";
import convertZulu from "../utils/convertZulu";

var ControlCenterBookingInformation = {
  data: [
    {
      id: 23,
      callsign: "EKDK_CTR",
      time_start: "2024-04-21 20:00:00",
      time_end: "2024-04-21 21:00:00",
      training: 0,
      event: 1,
      exam: 0,
      created_at: "2024-04-13T19:28:25.000000Z",
      updated_at: "2024-04-13T19:28:25.000000Z",
    },
    {
      id: 23,
      callsign: "EKDK_B_CTR",
      time_start: "2024-04-21 20:00:00",
      time_end: "2024-04-21 21:00:00",
      training: 0,
      event: 1,
      exam: 0,
      created_at: "2024-04-13T19:28:25.000000Z",
      updated_at: "2024-04-13T19:28:25.000000Z",
    },
    {
      id: 23,
      callsign: "EKDK_V_CTR",
      time_start: "2024-04-21 19:00:00",
      time_end: "2024-04-21 21:00:00",
      training: 0,
      event: 0,
      exam: 1,
      created_at: "2024-04-13T19:28:25.000000Z",
      updated_at: "2024-04-13T19:28:25.000000Z",
    },
    {
      id: 23,
      callsign: "EKDK_D_CTR",
      time_start: "2024-04-22 20:00:00",
      time_end: "2024-04-22 21:00:00",
      training: 1,
      event: 0,
      exam: 0,
      created_at: "2024-04-13T19:28:25.000000Z",
      updated_at: "2024-04-13T19:28:25.000000Z",
    },
  ],
};

function sortBookingsByStartTime(bookings: any) {
  return bookings.sort((a, b) => new Date(a.time_start) - new Date(b.time_start));
}

const sortedBookings = sortBookingsByStartTime(ControlCenterBookingInformation.data);

//fetch('http://cc-test.vatsca.org/api/open/bookings')
//.then(response => response.json())
//.then(data => ControlCenterBookingInformation = data)
//.catch(error => console.error(error));

var VatsimDataFeed = {
  controllers: [
    {
      cid: 1385367,
      name: "1385367",
      callsign: "EKDK_CTR",
      frequency: "136.485",
      facility: 1,
      rating: 5,
      server: "CANADA",
      visual_range: 1500,
      text_atis: ["ATC by New York Center HF relay by New York ARINC"],
      last_updated: "2024-04-21T19:57:59.1843559Z",
      logon_time: "2024-04-21T14:47:28.6331726Z",
    },
  ],
};

//fetch('https://data.vatsim.net/v3/vatsim-data.json')
//.then(response => response.json())
//.then(data => VatsimDataFeed = data)
//.catch(error => console.error(error));

function isOnline(CALLSIGN: string) {
  var online = false;
  VatsimDataFeed.controllers.forEach((controller) => {
    if (controller.callsign === CALLSIGN) {
      online = true;
    }
  });
  return online;
}

function OnlineName(CALLSIGN: string) {
  var name = "redacted";
  VatsimDataFeed.controllers.forEach((controller) => {
    if (controller.callsign === CALLSIGN) {
      name = controller.name;
    }
  });
  return name;
}

const feed = ControlCenterBookingInformation.data

// Helper function to group bookings by day
function groupByDay(bookings: any) {
  return bookings.reduce((groupedBookings: { [x: string]: any[]; }, booking: { time_start: string | number | Date; }) => {
      const date = new Date(booking.time_start).toDateString();
      if (!groupedBookings[date]) {
          groupedBookings[date] = [];
      }
      groupedBookings[date].push(booking);
      return groupedBookings;
  }, {});
}

const BookingsComponent = () => {
  const groupedBookings = groupByDay(feed);
  return (
    <table className="w-full table-auto">
      {Object.entries(groupedBookings).map(([date, bookings]: any, index) => (<>
        <tr>
          <td colSpan={4} className="text-center bg-[#dfebeb] dark:bg-[#356c8e] p-2 font-semibold">
              {index === 0 ? 'Today' : date}
          </td>
        </tr>
        {bookings.map((booking: any) => (
          <tr className="[&:nth-child(even)]:bg-gray-300 dark:[&:nth-child(even)]:bg-[#1e3744]">
            <td className="px-2">
            {isOnline(booking.callsign) ? <p className="tooltip" data-tip={OnlineName(booking.callsign)}>
            <span className="px-2 text-2xl -m-1 -p-2">●</span>
            {booking.callsign}
            </p> : <>
            <span className="px-2 text-2xl -m-1 -p-2">○</span>
            {booking.callsign}
            </>}
            </td>
            <td className="px-2">{bookingType(booking)}</td>
            <td className="px-2">{convertZulu(booking.time_start)}</td>
            <td className="px-2">{convertZulu(booking.time_end)}</td>
          </tr>
        ))}
      </>
      ))}
    </table>
  );
};

export default BookingsComponent;
