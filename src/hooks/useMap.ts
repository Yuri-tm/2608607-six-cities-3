import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef } from 'react';

interface useMapProps {
  mapContainerRef: React.RefObject<HTMLElement>;
  location: {latitude: number; longitude: number; zoom: number};
}

function useMap({mapContainerRef, location}: useMapProps): leaflet.Map | null {
  const [leafletMap, setLeafletMap] = React.useState<leaflet.Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapContainerRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapContainerRef.current as HTMLElement, {
        center: [location.latitude, location.longitude],
        zoom: location.zoom,
      });
      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      }).addTo(instance);
      setLeafletMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapContainerRef, location]);

  return leafletMap;
}

export default useMap;
