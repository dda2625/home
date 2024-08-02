import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://events.vatsim-scandinavia.org/api/calendars/1/events', {
                    headers: {
                        Authorization: 'Bearer 83e0745f-486d-4f73-8184-40c98930380c' // Replace with your valid bearer token
                    }
                });
                const data = await response.json();
                setEvents(data.data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
    
        fetchData();
    }, []);

    function dateConverter(date) {
        const newDate = new Date(date);
        return newDate.toLocaleString('en-uk', {  weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' });
    }

    console.log(dateConverter("2024-08-05 17:00:00"))
    
    return (
        <div class="flex flex-col gap-4 md:w-full md:min-w-[900px] h-fit">
            <div className="grid grid-cols-5 grid-rows-3 gap-4">
                <div className="col-span-5 flex flex-row gap-4"> 
                    <img src={events.length != 0 ? events[0].image  : ""}  className='w-96 h-fit aspect-video'/>
                    <span>
                        <h2 className='font-bold text-2xl'>{events.length != 0 ? events[0].title  : ""}</h2>
                        <p>{events.length != 0 ? dateConverter(events[0].start_date)  : ""} - {events.length != 0 ? dateConverter(events[0].end_date)  : ""}</p>
                        <p className='line-clamp-5'>{events.length != 0 ? events[0].long_description  : ""}</p>
                    </span>
                </div>
                <div className="col-span-5 row-start-2 flex flex-row gap-4">
                <img src={events.length != 0 ? events[1].image  : ""}  className='w-96 h-fit aspect-video'/>
                    <span>
                        <h2 className='font-bold text-2xl'>{events.length != 0 ? events[1].title  : ""}</h2>
                        <p>{events.length != 0 ? dateConverter(events[1].start_date)  : ""} - {events.length != 0 ? dateConverter(events[1].end_date)  : ""}</p>
                        <p className='line-clamp-5'>{events.length != 0 ? events[1].long_description  : ""}</p>
                    </span>
                </div>
                <div className='col-span-5 row-start-3 flex flex-row gap-4 w-ful overflow-x-visible md:min-w-[900px] overflow-hidden'>
                    <div className="flex flex-row gap-4 w-fit">
                        <img src={events.length != 0 ? events[2].image  : ""}  className='w-48 h-fit aspect-video'/>
                        <span>
                            <h2 className='font-bold text-lg'>{events.length != 0 ? events[2].title  : ""}</h2>
                            <p>{events.length != 0 ? dateConverter(events[2].start_date)  : ""} - {events.length != 0 ? dateConverter(events[2].end_date)  : ""}</p>
                        </span>
                    </div>
                    <div className="flex flex-row gap-4">
                        <img src={events.length != 0 ? events[3].image  : ""}  className='w-48 h-fit aspect-video'/>
                        <span>
                            <h2 className='font-bold text-lg'>{events.length != 0 ? events[3].title  : ""}</h2>
                            <p>{events.length != 0 ? dateConverter(events[3].start_date)  : ""} - {events.length != 0 ? dateConverter(events[3].end_date)  : ""}</p>
                        </span>
                    </div>
                    <div className="flex flex-row gap-4">
                        <img src={events.length != 0 ? events[4].image  : ""}  className='w-48 h-fit aspect-video'/>
                        <span>
                            <h2 className='font-bold text-lg'>{events.length != 0 ? events[4].title  : ""}</h2>
                            <p>{events.length != 0 ? dateConverter(events[4].start_date)  : ""} - {events.length != 0 ? dateConverter(events[4].end_date)  : ""}</p>
                        </span>
                    </div>
                    <div className="flex flex-row gap-4">
                        <img src={events.length != 0 ? events[5].image  : ""}  className='w-48 h-fit aspect-video'/>
                        <span>
                            <h2 className='font-bold text-lg'>{events.length != 0 ? events[5].title  : ""}</h2>
                            <p>{events.length != 0 ? dateConverter(events[5].start_date)  : ""} - {events.length != 0 ? dateConverter(events[5].end_date)  : ""}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
