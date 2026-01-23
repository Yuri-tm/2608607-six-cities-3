import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useRef, useMemo } from 'react';
import { Offer } from '../../types/offer';
import { useMap } from '../../hooks/useMap';

interface MapProps {
  offers: Offer[];
  currentCity: { city: string; location: { latitude: number; longitude: number; zoom: number } };
  currentOffer?: number | null;
}

const Map: React.FC<MapProps> = ({ offers, currentCity, currentOffer }) => {

  const mapRef = useRef<HTMLElement>(null);
  const leafletMap = useMap({ mapContainerRef: mapRef, location: currentCity.location });
  const markersRef = useRef<Record<number, leaflet.Marker>>({});

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

  // Создаем и обновляем маркеры на основе offers (без зависимости от currentOffer)
  useEffect(() => {
    if (leafletMap) {
      // Удаляем маркеры для предложений, которых больше нет в списке
      const currentOfferIds = new Set(offers.map((offer) => offer.id));
      Object.keys(markersRef.current).forEach((offerIdStr) => {
        const offerId = Number(offerIdStr);
        if (!currentOfferIds.has(offerId)) {
          leafletMap.removeLayer(markersRef.current[offerId]);
          delete markersRef.current[offerId];
        }
      });

      // Добавляем или обновляем маркеры для каждого предложения
      offers.forEach((offer) => {
        const existingMarker = markersRef.current[offer.id];

        if (existingMarker) {
          // Всегда обновляем позицию маркера из offer.location
          existingMarker.setLatLng([offer.location.latitude, offer.location.longitude]);
        } else {
          // Создаем новый маркер с координатами из offer.location
          const marker = leaflet.marker(
            [offer.location.latitude, offer.location.longitude],
            { icon: defaultCustomIcon }
          ).addTo(leafletMap);

          markersRef.current[offer.id] = marker;
        }
      });
    }

    return () => {
      if (leafletMap) {
        Object.values(markersRef.current).forEach((marker: leaflet.Marker) => {
          leafletMap.removeLayer(marker);
        });
        markersRef.current = {};
      }
    };
  }, [leafletMap, offers, defaultCustomIcon]);

  // Обновляем иконки маркеров и вид карты когда активное предложение меняется
  useEffect(() => {
    if (leafletMap && Object.keys(markersRef.current).length > 0) {
      // Обновляем иконки маркеров на основе currentOffer
      Object.entries(markersRef.current).forEach(([offerIdStr, marker]) => {
        const offerId = Number(offerIdStr);
        const newIcon = offerId === currentOffer ? activeCustomIcon : defaultCustomIcon;
        marker.setIcon(newIcon);
      });

      // Центрируем карту на активное предложение с увеличенным масштабом
      if (currentOffer !== null && currentOffer !== undefined) {
        const activeOffer = offers.find((offer) => offer.id === currentOffer);
        if (activeOffer) {
          // Используем координаты из offer.location для центрирования
          // Используем больший zoom для детального вида (минимум 15 для увеличенного масштаба)
          const detailZoom = Math.max(activeOffer.location.zoom, 15);
          leafletMap.setView(
            [activeOffer.location.latitude, activeOffer.location.longitude],
            detailZoom
          );
        }
      } else {
        // Если нет активного предложения, возвращаемся к виду города
        leafletMap.setView(
          [currentCity.location.latitude, currentCity.location.longitude],
          currentCity.location.zoom
        );
      }
    }
  }, [leafletMap, currentOffer, offers, currentCity, activeCustomIcon, defaultCustomIcon]);

  // Инициализация карты на город при первой загрузке
  useEffect(() => {
    if (leafletMap && !currentOffer) {
      leafletMap.setView(
        [currentCity.location.latitude, currentCity.location.longitude],
        currentCity.location.zoom
      );
    }
  }, [leafletMap, currentCity.location.latitude, currentCity.location.longitude, currentCity.location.zoom, currentOffer]);

  return <section className="cities__map map" ref={mapRef} style={{ height: '100%', width: '100%' }} />;
};

export default Map;
