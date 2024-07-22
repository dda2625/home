function bookingType(booking: any) {
    if (booking.training === 1) {
        return <span className="bg-[#1a475f] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center"><img src="/img/icons/traning.svg" className="w-auto h-4 pr-1" />Training</span>
    } else if (booking.event === 1) {
        return <span className="bg-[#41826e] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center"><img src="/img/icons/event.svg" className="w-auto h-4 pr-1" />Event</span>
    } else if (booking.exam === 1) {
        return <span className="bg-[#b63f3f] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center"><img src="/img/icons/ctp.svg" className="w-auto h-4 pr-1" />Exam</span>
    } else {
        return ""
    }
}

export default bookingType