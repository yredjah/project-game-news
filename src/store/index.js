// == Import : npm
import { createStore } from 'redux';

// == Import : local
import reducer from 'src/store/reducer';

// == Store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// == Export
export default store;
