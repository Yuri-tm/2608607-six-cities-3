import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useMemo } from 'react';
import { Offer } from '../../types/offer';
import useMap from '../../hooks/useMap';

interface MapProps {
  offers: Offer[];
  currentCity: { city: string; location: { latitude: number; longitude: number; zoom: number } };
  currentOffer: number | null;
  mapClassName: string;
  center: [number, number];
  zoom: number;
}

const Map: React.FC<MapProps> = ({ offers, currentCity, currentOffer, mapClassName, center, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useMap({ mapContainerRef: mapRef, location: currentCity.location });
  const markersRef = useRef<leaflet.Marker[]>([]);

  const defaultCustomIcon = useMemo(() => leaflet.icon({
    iconUrl: '/img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  }), []);

  const activeCustomIcon = useMemo(() => leaflet.icon({
    iconUrl: '/img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [13.5, 39],
  }), []);

  useEffect(() => {
    if (leafletMap) {
      // Очищаем предыдущие маркеры
      markersRef.current.forEach((marker) => {
        leafletMap.removeLayer(marker);
      });
      markersRef.current = [];

      // Добавляем новые маркеры
      offers.forEach((offer) => {
        const marker = leaflet.marker([
          offer.location.latitude,
          offer.location.longitude
        ], { icon: defaultCustomIcon }).addTo(leafletMap);

        if (currentOffer === offer.id) {
          marker.setIcon(activeCustomIcon);
        }

        markersRef.current.push(marker);
      });
    }

    return () => {
      if (leafletMap) {
        markersRef.current.forEach((marker) => {
          leafletMap.removeLayer(marker);
        });
        markersRef.current = [];
      }
    };
  }, [leafletMap, offers, currentOffer, defaultCustomIcon, activeCustomIcon]);

  return <div className={mapClassName} ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
