import { createAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offer';

export const changeCity = createAction<string>('changeCity');
export const changeSortType = createAction<string>('changeSortType');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const requireAuthorization = createAction<boolean>('requireAuthorization');
export const setUserEmail = createAction<string>('setUserEmail');
