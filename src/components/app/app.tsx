import MainPage from '../../pages/main/main-page';
import FavoritesPage from '../../pages/favorites/favorites-page';
import LoginPage from '../../pages/login/login-page';
import OfferPage from '../../pages/offer/offer-page';
import ErrorPage from '../../pages/error-page/error-page';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

type AppScreenProps = {
  locationCount: number;
};

export default function App({locationCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage locationCount={locationCount} />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/offer/:id" element={<OfferPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
