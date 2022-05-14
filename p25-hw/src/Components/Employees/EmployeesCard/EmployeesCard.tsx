import { NavLink } from 'react-router-dom';
import EmployeeModel from '../../../Models/emoloyeeModel';

interface EmployeeCardProps {
  employee: EmployeeModel;
}

function EmployeeCard(props: EmployeeCardProps): JSX.Element {
  return (
    <div className="">
      <h4>
        {props.employee.firstName} {props.employee.lastName}
        <NavLink to={`/employees/${props.employee.id}`}>edit</NavLink>
      </h4>
    </div>
  );
}

export default EmployeeCard;
