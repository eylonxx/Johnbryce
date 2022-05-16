import { combineReducers, createStore } from 'redux';
import { AuthReducer } from './AuthState';
import { employeeReducer } from './EmployeeState';

// Single object containing all reducers:
const reducers = combineReducers({
  employeesState: employeeReducer,
  authState: AuthReducer,
  // suppliersState: suppliersReducer
});

const store = createStore(reducers);

export default store;
