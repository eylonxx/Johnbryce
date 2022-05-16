import { Route, Routes } from 'react-router-dom';
import Login from '../AuthArea/Login/Login';
import Logout from '../AuthArea/Logout/Logout';
import Register from '../AuthArea/Register/Register';
import AddEmployee from '../Employees/AddEmployee/AddEmployee';
import EditEmployee from '../Employees/EditEmployee/EditEmployee';
import EmployeesList from '../Employees/EmployeesList/EmployeesList';
import './Routing.css';
function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<h1>hi</h1>} />
        <Route path="/employees" element={<EmployeesList />} />
        <Route path="/employees/:id" element={<EditEmployee />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/about" element={<h2>embedded youtube video</h2>} />
        <Route path="/products" element={<h2>some products</h2>} />
        <Route path="*" element={<h2>Page not found!</h2>} />
      </Routes>
    </div>
  );
}

export default Routing;
