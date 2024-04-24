import { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './map.css';

export default function Map(airport) {
  const mapContainer = useRef(null);
  var map = useRef(null);
  airport = airport.airport
  const [zoom] = useState(15);
  maptilersdk.config.apiKey = 'YPWvjXSB1Key9mipDYw6';

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: "e9102954-ab40-4063-bca6-f84df33f9e0b",
      center: [airport.lng, airport.lat],
      zoom: airport.zoom? airport.zoom : 13,
      terrainControl: false,
      scaleControl: false,
      geolocateControl: false,
      navigationControl: false
    });

  }, [airport.lng, airport.lat, zoom]);

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}