import './Employees.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import EmployeeModel from '../../Models/emoloyeeModel';
import employeeService from '../../Services/EmployeeService';
function Employees(): JSX.Element {
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  useEffect(() => {
    employeeService
      .getAllEmployees()
      .then((employees) => setEmployees(employees))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="Employees">
      {employees.map((employee) => (
        <h4>
          {employee.firstName} {employee.lastName}
        </h4>
      ))}
    </div>
  );
}

export default Employees;
