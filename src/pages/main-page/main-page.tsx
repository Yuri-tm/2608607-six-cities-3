//import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Tabs from '../../components/tabs/tabs';
import Cities from '../../components/cities/cities';

type MainPageProps = {
locationCount: number;
}

export default function MainPage({locationCount}: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <Cities />
      </main>
    </div>
  );
}
