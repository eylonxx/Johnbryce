import EmployeeModel from '../Models/emoloyeeModel';
// 1. Employees State - The global state relate to Employees:
export class EmployeeState {
  public employees: EmployeeModel[] = [];
}

// 2. Products Action Type - list of actions we can do on the above EmployeeState:
export enum EmployeesActionType {
  FetchEmployees = 'FetchEmployees',
  AddEmployee = 'AddEmployee',
  UpdateEmployee = 'UpdateEmployee',
  DeleteEmployee = 'DeleteEmployee',
  // AddProductToCart = "AddProductToCart"
}

// 3. Product Action - interface for building a single action from the above ProductsActionType
export interface EmployeesAction {
  type: EmployeesActionType; // The type of the acton to perform.
  payload: any; // The data we need to do that action
}

// 4. Action Creators - Functions for creating suitable Action objects:
export function fetchEmployeesAction(employees: EmployeeModel[]): EmployeesAction {
  const action: EmployeesAction = { type: EmployeesActionType.FetchEmployees, payload: employees };
  return action;
}
export function addEmployeeAction(employee: EmployeeModel): EmployeesAction {
  const action: EmployeesAction = { type: EmployeesActionType.AddEmployee, payload: employee };
  return action;
}
export function updateEmployeeAction(employee: EmployeeModel): EmployeesAction {
  const action: EmployeesAction = { type: EmployeesActionType.UpdateEmployee, payload: employee };
  return action;
}
export function deleteEmployeeAction(id: number): EmployeesAction {
  const action: EmployeesAction = { type: EmployeesActionType.DeleteEmployee, payload: id };
  return action;
}

// 5. Products Reducer - Do any of the above actions:
export function employeeReducer(
  currentState: EmployeeState = new EmployeeState(),
  action: EmployeesAction
): EmployeeState {
  const newState = { ...currentState };

  switch (action.type) {
    case EmployeesActionType.FetchEmployees:
      newState.employees = action.payload; // <-- here payload is all employees
      break;

    case EmployeesActionType.AddEmployee:
      newState.employees.push(action.payload); // <-- here payload is the product to add.
      break;

    case EmployeesActionType.UpdateEmployee:
      const indexToUpdate = newState.employees.findIndex((e) => e.id === action.payload.id); // <-- here payload is the product to update.
      if (indexToUpdate >= 0) {
        newState.employees[indexToUpdate] = action.payload;
      }
      break;

    case EmployeesActionType.DeleteEmployee:
      const indexToDelete = newState.employees.findIndex((p) => p.id === action.payload); // <-- here payload is the id to delete.
      if (indexToDelete >= 0) {
        newState.employees.splice(indexToDelete, 1);
      }
      break;
  }

  return newState;
}
