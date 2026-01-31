import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
//import { Setting } from './const';
import { offers } from './mocks/offers';
import { store } from './components/app/store.ts';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers={offers}
      //  city={Setting.DefaultCity}
      //  sortType={Setting.DefaultSortType}
      />
    </Provider>;
  </React.StrictMode>
);
