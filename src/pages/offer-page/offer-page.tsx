
import { Offer } from '../../types/offer.ts';
import { offers } from '../../mocks/offers.ts';
import { useParams } from 'react-router-dom';
import ErrorPage from '../error-page/error-page.tsx';
import OfferComponent from '../../components/offer/offer.tsx';
//import { AuthorizationStatus } from '../../const.ts';

//type OfferPageProps = {
//  authorizationStatus: AuthorizationStatus;

export default function OfferPage(): JSX.Element {
  const { id } = useParams();
  const currentOffer: Offer | undefined = offers.find((offer) => offer.id === Number(id));

  if (!currentOffer) {
    return <ErrorPage />;
  }

  return (
    <OfferComponent />
  );
}
