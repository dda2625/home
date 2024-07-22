import { useEffect, useState } from "react";
import bookingType from "../utils/bookingType";
import convertZulu from "../utils/convertZulu";
import "../globals.css";

const BookingComponent = () => {
  const [updatedBookings, setUpdatedBookings] = useState([]);
  const [BookingsNotTodayDate, setBookingsNotTodayDate] = useState([]);
  const [BookingsNotToday, setBookingsNotToday] = useState([]);

  useEffect(() => {
    const fetchBookingData = async () => {
      try {
        const bookingDataResponse = await fetch(
          "https://cc.vatsim-scandinavia.org/api/bookings"
        );
        const bookingData = await bookingDataResponse.json();

        const networkDataResponse = await fetch(
          "https://data.vatsim.net/v3/vatsim-data.json"
        );
        const networkData = await networkDataResponse.json();

        const currentDate = new Date().toDateString();

        // Filter bookings for today
        const bookingsToday = bookingData.data.filter(
          (session) =>
            new Date(session.time_start).toDateString() === currentDate
        );

        const liveSession = networkData.controllers.filter(
            (session) =>
            ["EK","EN","ES","EF","BI","BG"].some((word) => session.callsign.startsWith(word)) &&
            session.facility > 0
        );

        const bookingsNotToday = bookingData.data.filter(
            (session) =>
              new Date(session.time_start).toDateString() !== currentDate
          );

        // Group filtered sessions by day
        const groupedFilteredSessions = {};
        bookingsNotToday.forEach((session) => {
        const date = new Date(session.time_start).toLocaleDateString();
        if (!groupedFilteredSessions[date]) {
            groupedFilteredSessions[date] = [];
        }
        groupedFilteredSessions[date].push(session);
        });

        // Create a map for quick lookup of live sessions
        const liveSessionsMap = new Map();
        for (const liveSession of networkData.controllers) {
          liveSessionsMap.set(liveSession.callsign, true); // Only store the key to indicate the callsign is online
        }

        // Add a new key to indicate if the booking is online and store in a new array
        const updatedBookings = bookingsToday.map((session) => ({
          ...session,
          isOnline: liveSessionsMap.has(session.callsign),
        }));

        const updatedNetwork = liveSession.map((session) => ({
            ...session,
            isOnline: true,
          }));

        setUpdatedBookings(updatedBookings);
        setBookingsNotTodayDate(groupedFilteredSessions);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookingData();
  }, []);

  const options = {
    hour: '2-digit', minute: '2-digit'
  }

  return (
    <table className="w-full px-2">
      <tbody>
        <tr className="bg-[#d5dfdf] dark:bg-[#1b3546] w-full font-bold text-black dark:text-white p-2 text-center">
            <td colSpan={4}>Today</td>
        </tr>
        {updatedBookings.map((booking, index) => (
          <tr
            key={index}
            className="h-6 even:bg-gray-50 odd:bg-white dark:even:bg-[#0f2a38] dark:odd:bg-black"
          >
            {booking.isOnline ? (
              <td className="pl-[4px]">● {booking.callsign}</td>
            ) : (
              <td className="pl-[4px]">
                <span className="text-[#1a4860] font-bold text-xl">○</span> {booking.callsign}
              </td>
            )}
            <td>{bookingType(booking)}</td>
            <td>{booking.time_start ? convertZulu(booking.time_start) : new Date(booking.logon_time).toLocaleTimeString(options) + "z"}</td>
            <td>{booking.time_end ? convertZulu(booking.time_end) : ""}</td>
          </tr>
        ))}


        {Object.keys(BookingsNotTodayDate).map((date) => (
            <>
                <tr key={date} className="bg-[#d5dfdf] dark:bg-[#1b3546] w-full font-bold text-black dark:text-white p-2 text-center">
                    <td colSpan={4}>{new Date(date).toLocaleDateString('en-US', { weekday: "long" })}</td>
                </tr>
                {BookingsNotTodayDate[date].map((session, index) => (
                    <tr key={index} className="h-6 even:bg-gray-50 odd:bg-white dark:even:bg-[#0f2a38] dark:odd:bg-black">
                        <td className="pl-[4px]">{session.callsign}</td>
                        <td>{bookingType(session)}</td>
                        <td>{convertZulu(session.time_start)}</td>
                        <td>{session.time_end ? convertZulu(session.time_end) : ""}</td>
                    </tr>
                ))}
            </>
        ))}

        <tr className="bg-[#d5dfdf] dark:bg-[#1b3546] w-full font-bold text-black dark:text-white p-2 text-center">
            <td colSpan={4}><a href="cc.vatsim-scandinavia.org/bookings" target="_blank">View more in Control Center</a></td>
        </tr>
      </tbody>
    </table>
  );
};

export default BookingComponent;
