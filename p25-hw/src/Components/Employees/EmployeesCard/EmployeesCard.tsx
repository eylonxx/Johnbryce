import { NavLink, useNavigate } from 'react-router-dom';
import EmployeeModel from '../../../Models/emoloyeeModel';
import employeeService from '../../../Services/EmployeeService';

interface EmployeeCardProps {
  employee: EmployeeModel;
}

function EmployeeCard(props: EmployeeCardProps): JSX.Element {
  const navigate = useNavigate();
  async function deleteEmployee() {
    try {
      await employeeService.deleteEmployee(props.employee.id);
      alert('employee has been deleted.');
      navigate('/employees');
    } catch (err: any) {
      alert(err.message);
    }
  }
  return (
    <div className="">
      <h4>
        {props.employee.firstName} {props.employee.lastName}
        <NavLink to={`/employees/${props.employee.id}`}>edit</NavLink>
        <button onClick={deleteEmployee}>delete</button>
      </h4>
    </div>
  );
}

export default EmployeeCard;
