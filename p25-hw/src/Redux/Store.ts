import { combineReducers, createStore } from 'redux';
import { employeeReducer } from './EmployeeState';

// Single object containing all reducers:
const reducers = combineReducers({
  employeesState: employeeReducer,
  // employeesState: employeesReducer,
  // suppliersState: suppliersReducer
});

const store = createStore(reducers);

export default store;
