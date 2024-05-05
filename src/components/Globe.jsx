import { useEffect, useRef, useState } from 'react';
import * as THREE from '//unpkg.com/three/build/three.module.js';
import Globe from 'react-globe.gl';

function GlobeView() {
    const globeEl = useRef();
    const [landPolygons, setLandPolygons] = useState([]);
    const polygonsMaterial = new THREE.MeshLambertMaterial({ color: 'darkslategrey', side: THREE.DoubleSide });

    useEffect(() => {
        fetch('//unpkg.com/world-atlas/land-110m.json').then(res => res.json())
        .then(landTopo => {
          setLandPolygons(topojson.feature(landTopo, landTopo.objects.land).features);
        });
        globeEl.current.pointOfView({ lat: 55.13327328210737, lng: 10.116610662566945, altitude: 0.75 }, 1000);
    }, []);


    return (
        <div className='z-10 absolute top-0'>
            <Globe
                //ref={globeEl}
                //globeImageUrl="/8k_earth_daymap.jpg"
                backgroundColor="rgba(0,0,0,0)"
                //width={'100%'}
                //height={'100%'}
                showGlobe={false}
                showAtmosphere={false}
                polygonsData={landPolygons}
                polygonCapMaterial={polygonsMaterial}
                polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
            />
        </div>
    );
}

export default GlobeView;