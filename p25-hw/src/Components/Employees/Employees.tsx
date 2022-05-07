import './Employees.css';
import axios from 'axios';
import { useEffect } from 'react';
function Employees(): JSX.Element {
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get('http://localhost:3030/api/employees');
      console.log(data);
    };
    getData();
  }, []);

  return <div className="Employees"></div>;
}

export default Employees;
