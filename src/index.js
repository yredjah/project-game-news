// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import : local
import App from 'src/components/App';

import store from 'src/store';

// == Render
const rootComponent = (
  <Provider store={store}>
    <App />
  </Provider>
);

render(rootComponent, document.getElementById('root'));
