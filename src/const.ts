export const Setting = {
  locationCount: 4,
  DefaultCity: 'Amsterdam',
  DefaultSortType: 'Popular'
};

export enum AppRoute {
  Main = '/',
  Favorites = '/favorites',
  Login = '/login',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
