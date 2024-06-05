import { useEffect, useRef, useState } from 'react';
import { getAirportByIata, getAirportByIcao, getAirportByCityCode } from 'airport-data-js';
import Globe from 'react-globe.gl';

async function dataByIcao(ICAO) {
    return await getAirportByIcao(ICAO);
}


function GlobeView() {
    const globeEl = useRef();
    const [airports, setAirports] = useState([]);
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

        Promise.all([
            fetch('https://raw.githubusercontent.com/jpatokal/openflights/master/data/airports.dat').then(res => res.text())
            .then(d => d3.csvParseRows(d, airportParse)),
        ]).then(([airports, pilots]) => {

            const byIcao = indexBy(airports, 'icao', false);

        });

        globeEl.current.pointOfView({ lat: 55.13327328210737, lng: 10.116610662566945, altitude: 1 }, 1000);

    }, []); 

    return (
        <Globe
            ref={globeEl}
            globeImageUrl="/8k_earth_daymap.jpg"
            backgroundColor="rgba(0,0,0,0)"
            showAtmosphere={false}
            arcsData={arcsData}
            arcColor={'color'}
            width={2560}
            height={2560}
            arcDashLength={() => Math.random()}
            arcDashGap={() => Math.random()}
            arcDashAnimateTime={() => Math.random() * 4000 + 500}
                />
    );
}

export default GlobeView;