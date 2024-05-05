import { useEffect, useRef, useState } from 'react';
import airportData from 'airport-data-js';
import Globe from 'react-globe.gl';


function GlobeView() {
    const globeEl = useRef();
    const [pilots, setPilots] = useState([]);
    const [routes, setRoutes] = useState([]);

    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
    }));

    useEffect(() => {
        fetch('https://data.vatsim.net/v3/vatsim-data.json')
        .then(response => response.json())
        .then(data => {
            setPilots(data.pilots);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });

        globeEl.current.pointOfView({ lat: 55.13327328210737, lng: 10.116610662566945, altitude: 0.75 }, 1000);
    }, []); 

    const rawRoutes = [];

    function simpleReturn(value) {
        return value;
    
    }

    pilots.forEach(pilot => {
        console.log(pilot.flight_plan? pilot.flight_plan.departure: 'No Departure');
        let route = {callsign : pilot.callsign, departure: pilot.flight_plan? airportData.getAirportByIcao(pilot.flight_plan.departure).then(simpleReturn(value)): 'No Departure', arrival:pilot.flight_plan? pilot.flight_plan.arrival: 'No Arrival',};
        rawRoutes.push(route)
    });

    console.log(rawRoutes);

    return (
        <div className='z-10 absolute top-0'>
            <Globe
                ref={globeEl}
                globeImageUrl="/8k_earth_daymap.jpg"
                backgroundColor="rgba(0,0,0,0)"
                arcsData={arcsData}
                arcColor={'color'}
                arcDashLength={() => Math.random()}
                arcDashGap={() => Math.random()}
                arcDashAnimateTime={() => Math.random() * 4000 + 500}
                 />
        </div>
    );
}

export default GlobeView;