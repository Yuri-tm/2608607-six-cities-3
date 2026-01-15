import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';

interface MapProps {
  center: [number, number];
  zoom: number;
}

const Map: React.FC<MapProps> = ({ center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMapRef = useRef<leaflet.Map | null>(null);

  useEffect(() => {
    if (mapRef.current && !leafletMapRef.current) {
      leafletMapRef.current = leaflet.map(mapRef.current).setView(center, zoom);

      leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(leafletMapRef.current);
    }

    return () => {
      if (leafletMapRef.current) {
        leafletMapRef.current.remove();
        leafletMapRef.current = null;
      }
    };
  }, [center, zoom]);

  return <div ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
