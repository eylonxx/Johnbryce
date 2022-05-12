import { combineReducers, createStore } from "redux";
import { productsReducer } from "./ProductsState";

// Single object containing all reducers:
const reducers = combineReducers({
    productsState: productsReducer,
    // employeesState: employeesReducer,
    // suppliersState: suppliersReducer
});

const store = createStore(reducers);

export default store;
