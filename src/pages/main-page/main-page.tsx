import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import ProductCardList from '../../components/product-card-list/product-card-list';
import { Offer } from '../../types/offer';

type MainPageProps = {
  offers: Offer[];
  city: string;
}

export default function MainPage({ offers }: MainPageProps): JSX.Element {
  const firstOffer = offers[0];
  const cityData = firstOffer?.city || { name: 'Amsterdam', location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 10 } };
  const currentCity = { city: cityData.name, location: cityData.location };

  if (!firstOffer) {
    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs />
          <ProductCardList currentCity={currentCity} currentOffers={[]} />
        </main>
      </div>
    );
  }

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <ProductCardList currentCity={currentCity} currentOffers={offers} />
      </main>
    </div>
  );
}
