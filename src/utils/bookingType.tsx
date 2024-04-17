function bookingType(booking: any) {
    if (booking.training === 1) {
        return <span className="bg-[#1a475f] text-sm text-white px-2 py-1 rounded-md">Training</span>
    } else if (booking.event === 1) {
        return <span className="bg-[#41826e] text-sm text-white px-2 py-1 rounded-md">Event</span>
    } else if (booking.exam === 1) {
        return <span className="bg-[#b63f3f] text-sm text-white px-2 py-1 rounded-md">Exam</span>
    } else {
        return ""
    }
}

export default bookingType