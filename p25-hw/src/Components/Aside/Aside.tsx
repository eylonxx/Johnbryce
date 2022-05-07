import './Aside.css';
import { Link } from 'react-router-dom';

function Aside(): JSX.Element {
  return (
    <div className="Aside">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <Link to="/employees">Employees</Link>
    </div>
  );
}

export default Aside;
