//import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import ProductCardList from '../../components/product-card-list/product-card-list';
import { Offer } from '../../types/offer';

type MainPageProps = {
  offers: Offer[];
//  city: string;
//  sortType: string;
}

export default function MainPage({ offers }: MainPageProps): JSX.Element {
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
