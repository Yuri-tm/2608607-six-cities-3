//import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import ProductCardList from '../../components/product-card-list/product-card-list';
import Map from '../../components/map/map';
import { Offer } from '../../types/offer';

type MainPageProps = {
  offers: Offer[];
  city: string;
//  sortType: string;
}

export default function MainPage({ offers }: MainPageProps): JSX.Element {
  const firstOffer = offers[0];
  const cityData = firstOffer?.city || { name: 'Amsterdam', location: { latitude: 52.3909553943508, longitude: 4.85309666406198, zoom: 10 } };
  const currentCity = { city: cityData.name, location: cityData.location };
  const currentOffer = null;
  const center: [number, number] = [currentCity.location.latitude, currentCity.location.longitude];
  const zoom = currentCity.location.zoom;

  if (!firstOffer) {
    return (
      <div className="page page--gray page--main">
        <Header />
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs />
          <ProductCardList offersList={offers} />
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
        <ProductCardList offersList={offers} />
        <Map offers={offers} currentCity={currentCity} currentOffer={currentOffer} mapClassName="cities__map" center={center} zoom={zoom} />
      </main>
    </div>
  );
}
