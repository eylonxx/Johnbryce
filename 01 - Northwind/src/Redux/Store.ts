import { combineReducers, createStore } from 'redux';
import { AuthReducer } from './AuthState';
import { productsReducer } from './ProductsState';

// Single object containing all reducers:
const reducers = combineReducers({
  productsState: productsReducer,
  authState: AuthReducer,
  // suppliersState: suppliersReducer
});

const store = createStore(reducers);

export default store;
