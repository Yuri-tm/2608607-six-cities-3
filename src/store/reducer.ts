import { createReducer } from '@reduxjs/toolkit';
import { changeCity, changeSortType, loadOffers, requireAuthorization, setUserEmail } from './action';
import { AuthorizationStatus } from '../const';
import { Offer } from '../types/offer';


interface initialState {
  city: string;
  sortType: string;
  offers: Offer[];
  authorizationStatus: AuthorizationStatus;
  userEmail: string;
}
const initialState: initialState = {
  city: 'Amsterdam',
  sortType: 'Popular',
  offers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userEmail: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.sortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
    })
    .addCase(setUserEmail, (state, action) => {
      state.userEmail = action.payload;
    });
});
