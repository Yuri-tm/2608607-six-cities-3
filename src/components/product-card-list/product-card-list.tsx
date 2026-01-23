import ProductCard from '../product-card/product-card';
import Map from '../map/map';
import { Offer } from '../../types/offer';
import ProductSortingForm from '../product-sorting-form/productSortingForm';
import { useState } from 'react';

type ProductCardListProps = {
  currentCity?: { city: string; location: { latitude: number; longitude: number; zoom: number } };
  currentOffers?: Offer[];
}

export default function ProductCardList({ currentCity, currentOffers }: ProductCardListProps): JSX.Element {
  const [hoveredOfferId, setHoveredOfferId] = useState<number | undefined>(undefined);

  const handleCardHover = (offerId?: number): void => {
    setHoveredOfferId(offerId);
  };

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{currentOffers?.length || 0} places to stay in {currentCity?.city}</b>
        <ProductSortingForm />
        <div className="cities__places-list places__list tabs__content">
          {currentOffers?.map((offer) => (
            <ProductCard key={offer.id} offer={offer} block="cities" onCardHover={handleCardHover} />
          ))}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map">
          {currentCity && <Map currentCity={currentCity} currentOffer={hoveredOfferId || null} offers={currentOffers || []} />}
        </section>
      </div>
    </div>
  );
}
