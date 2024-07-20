import { useEffect, useState } from "react";
import bookingType from "../utils/bookingType";
import convertZulu from "../utils/convertZulu";
import "../globals.css";

const BookingComponent = () => {
  const [updatedBookings, setUpdatedBookings] = useState([]);

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

        setUpdatedBookings(updatedBookings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchBookingData();
  }, []);

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
              <td className="pl-[4px]">○ {booking.callsign}</td>
            ) : (
              <td className="pl-[4px]">
                <span className="text-[#1a4860] font-bold text-xl">●</span> {booking.callsign}
              </td>
            )}
            <td>{bookingType(booking)}</td>
            <td>{convertZulu(booking.time_start)}</td>
            <td>{booking.time_end ? convertZulu(booking.time_end) : ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookingComponent;
