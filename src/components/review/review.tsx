import ReviewsList from '../reviews-list/reviews-list';
import { FC } from 'react';

type ReviewsProps = {
  isAuth: boolean;
}

const Reviews: FC<ReviewsProps> = function({ isAuth }) {
  return (
    <ReviewsList isAuth={isAuth} />
  );
};
export default Reviews;
