import ProductCard from '../product-card/product-card';
import { Offer } from '../../types/offer';
import { offers } from '../../mocks/offers';
import ProductSortingForm from '../product-sorting-form/productSortingForm';

type ProductCardListProps = {
  offersList?: Offer[];
}

export default function ProductCardList({ offersList = offers }: ProductCardListProps): JSX.Element {

  const handleCardHover = (_offer?: Offer) => {
    // Handle card hover if needed
  };

  const productCardList: JSX.Element[] = (offersList || offers).map((offer) => (
    <ProductCard key={offer.id} offer={offer} handleCardHover={handleCardHover} />
  ));

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">312 places to stay in Amsterdam</b>
        <ProductSortingForm />
        <div className="cities__places-list places__list tabs__content">
          {productCardList}
        </div>
      </section>
      <div className="cities__right-section">
        <section className="cities__map map"></section>
      </div>
    </div>
  );
}
