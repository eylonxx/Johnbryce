import axios from 'axios';
import EmployeeModel from '../Models/emoloyeeModel';

class EmployeeService {
  public async getAllEmployees(): Promise<EmployeeModel[]> {
    const res = await axios.get<EmployeeModel[]>('http://localhost:3030/api/employees');
    const emplyoees = res.data;
    return emplyoees;
  }
}

const employeeService = new EmployeeService();
export default employeeService;
