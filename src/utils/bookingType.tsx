import { Button } from "../components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip"

function bookingType_old(booking: any) {
    if (booking.training === 1) {
        return (
        <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="bg-[#1a475f] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center"><img src="/img/icons/traning.svg" className="w-auto h-4 pr-1" /></span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Training</p>
              </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        )
    } else if (booking.event === 1) {
        return (
            <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
              <span className="bg-[#41826e] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center"><img src="/img/icons/event.svg" className="w-auto h-4 pr-1" /></span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Event</p>
              </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        )
    } else if (booking.exam === 1) {
        return (
            <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
              <span className="bg-[#b63f3f] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center"><img src="/img/icons/ctp.svg" className="w-auto h-4 pr-1" /></span>
              </TooltipTrigger>
              <TooltipContent>
                <p>Exam</p>
              </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        )
    } else {
        return ""
    }
}

function bookingType(booking: any) {
    if (booking.training === 1) {
        return <span className="bg-[#1a475f] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center">Training</span>
    } else if (booking.event === 1) {
        return <span className="bg-[#41826e] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center">Event</span>
    } else if (booking.exam === 1) {
        return <span className="bg-[#b63f3f] text-sm text-white px-2 py-[2px] rounded-md flex items-center justify-center">Exam</span>
    } else {
        return ""
    }
}

export default bookingType