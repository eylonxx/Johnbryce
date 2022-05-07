import { Route, Routes } from 'react-router-dom';
import Employees from '../Employees/Employees';
import './Routing.css';
function Routing(): JSX.Element {
  return (
    <div className="Routing">
      <Routes>
        <Route path="/" element={<h1>hi</h1>} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/about" element={<h2>embedded youtube video</h2>} />
        <Route path="/products" element={<h2>some products</h2>} />
        <Route path="*" element={<h2>Page not found!</h2>} />
      </Routes>
    </div>
  );
}

export default Routing;
