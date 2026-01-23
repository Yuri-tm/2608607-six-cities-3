import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 15
      },
      name: 'Amsterdam'
    },
    description: 'Nice, cozy, warm big bed apartment',
    goods: [
      'Heating'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 1,
      isPro: true,
      name: 'Sonya'
    },
    id: 1,
    images: [
      'img/apartment-01.jpg'
    ],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 15
      },
      name: 'Amsterdam'
    },
    description: 'Luxurious studio in the center of the city, close to all attractions.',
    goods: [
      'Jakuzi'
    ],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 2,
      isPro: true,
      name: 'Milana'
    },
    id: 2,
    images: [
      'img/apartment-02.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-02.jpg',
    price: 130,
    rating: 4.8,
    title: 'Luxurious studio in the center ',
    type: 'apartment'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 15
      },
      name: 'Amsterdam'
    },
    description: 'Very nice studio at great location',
    goods: [
      'Balcony'
    ],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 3,
      isPro: true,
      name: 'Yvonne'
    },
    id: 3,
    images: [
      'img/apartment-03.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 140,
    rating: 4.8,
    title: 'Very nice studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 15
      },
      name: 'Amsterdam'
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: [
      'Balcony'
    ],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Yvonne'
    },
    id: 4,
    images: [
      'img/studio-01.jpg'
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 8
    },
    maxAdults: 2,
    previewImage: 'img/apartmant-01.jpg',
    price: 40,
    rating: 3.8,
    title: 'a studio at great location',
    type: 'apartment'
  }
];
