//import { Offer } from '../../types/offer';
import ProductCardList from '../product-card-list/product-card-list';
import ProductSortingForm from '../product-sorting-form/productSortingForm';
//import { useState } from 'react';

type CitiesProps = {
  locationCount: number;
};

export default function Cities({ locationCount }: CitiesProps): JSX.Element {

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{locationCount} places to stay in Amsterdam</b>
          <ProductSortingForm />
          <div className="cities__places-list places__list tabs__content">
            <ProductCardList />
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
}

