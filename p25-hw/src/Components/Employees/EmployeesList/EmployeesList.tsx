import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import EmployeeModel from '../../../Models/emoloyeeModel';
import employeeService from '../../../Services/EmployeeService';
import EmployeeCard from '../EmployeesCard/EmployeesCard';

function EmployeesList(): JSX.Element {
  const [employees, setEmployees] = useState<EmployeeModel[]>([]);
  useEffect(() => {
    employeeService
      .getAllEmployees()
      .then((employees) => setEmployees(employees))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="EmployeesList">
      <NavLink to="/addEmployee">add employee!</NavLink>
      {employees.map((employee) => (
        <EmployeeCard employee={employee} />
      ))}
    </div>
  );
}

export default EmployeesList;
