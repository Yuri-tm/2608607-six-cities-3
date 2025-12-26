import ReviewsList from '../reviews-list/reviews-list';
import ReviewsForm from '../reviews-form/reviews-form';
import { FC } from 'react';

type ReviewsProps = {
  isAuth: boolean;
}

const Reviews: FC<ReviewsProps> = ({ isAuth }) => {
  <>
    <ReviewsList />
    {isAuth && <ReviewsForm />}
  </>;
};
export default Reviews;
