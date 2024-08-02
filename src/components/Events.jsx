import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://events.vatsim-scandinavia.org/api/calendars/1/events', {
                    headers: {
                        Authorization: 'Bearer 83e0745f-486d-4f73-8184-40c98930380c'
                    },
                    mode: 'no-cors' // Add the 'no-cors' mode
                });
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Events</h1>
            <ul>
                {events.map(event => (
                    <li key={event.id}>{event.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Events;