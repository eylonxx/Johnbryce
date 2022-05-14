import axios from 'axios';
import EmployeeModel from '../Models/emoloyeeModel';
import {
  fetchEmployeesAction,
  addEmployeeAction,
  updateEmployeeAction,
  deleteEmployeeAction,
} from '../Redux/EmployeeState';
import store from '../Redux/Store';

class EmployeeService {
  public async getAllEmployees(): Promise<EmployeeModel[]> {
    const res = await axios.get<EmployeeModel[]>('http://localhost:3030/api/employees');
    const emplyoees = res.data;
    return emplyoees;
  }

  public async addEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
    const formData = new FormData();
    formData.append('firstName', employee.firstName);
    formData.append('lastName', employee.lastName);

    console.log(formData);

    const response = await axios.post<EmployeeModel>('http://localhost:3030/api/employees', formData);
    const addedEmployee = response.data;

    store.dispatch(addEmployeeAction(employee));

    return addedEmployee;
  }

  public async getOneEmployee(id: number): Promise<EmployeeModel> {
    const employees = await this.getAllEmployees();
    const employee = employees.find((e) => e.firstName === e.firstName);
    console.log(employees);

    return employee;
  }

  public async updateEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
    const formData = new FormData();
    formData.append('firstName', employee.firstName);
    formData.append('lastName', employee.lastName);
    const response = await axios.put<EmployeeModel>('http://localhost:3030/api/employees/' + employee.id, formData);
    const updatedEmployee = response.data;
    store.dispatch(updateEmployeeAction(updatedEmployee));
    return updatedEmployee;
  }

  public async deleteEmployee(id: number): Promise<void> {
    await axios.delete('http://localhost:3030/api/employees/' + id);
    store.dispatch(deleteEmployeeAction(id));
  }
}

const employeeService = new EmployeeService();
export default employeeService;
