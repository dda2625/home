import React, { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';

function GlobeView() {
    const globeEl = useRef();

    useEffect(() => {

        // aim at continental US centroid
        globeEl.current.pointOfView({ lat: 55.13327328210737, lng: 10.116610662566945, altitude: 0.75 });
      }, []);
  
    return (
        <div className='z-10 absolute top-0'>
            <Globe
                ref={globeEl}
                globeImageUrl="/8k_earth_daymap.jpg"
                backgroundColor="rgba(0,0,0,0)"
                width={'100%'}
                height={'100%'}
            />
        </div>
    );
}

export default GlobeView;