import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import EmployeeModel from '../../../Models/emoloyeeModel';
import employeeService from '../../../Services/EmployeeService';

export default function EditEmployee() {
  const params = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, setValue } = useForm<EmployeeModel>();
  const [stateEmployee, setEmployee] = useState<EmployeeModel>();

  useEffect(() => {
    const id: number = +params.prodId;
    employeeService
      .getOneEmployee(id)
      .then((employeeToEdit) => {
        setEmployee(employeeToEdit);
        setValue('firstName', employeeToEdit.firstName);
        setValue('lastName', employeeToEdit.lastName);
      })
      .catch((err) => alert(err.message));
  }, []);

  async function send(formEmployee: EmployeeModel) {
    try {
      formEmployee.id = stateEmployee.id;
      const updatedEmployee = await employeeService.updateEmployee(formEmployee);
      alert('Employee updated! id: ' + updatedEmployee.id); // Never show IDs to the user! This is only for dev testing!
      navigate('/Employees');
    } catch (err: any) {
      alert(err);
    }
  }
  return (
    <div>
      <h2>Edit Product</h2>

      <form onSubmit={handleSubmit(send)}>
        <label>First Name: </label>
        <input
          type="text"
          {...register('firstName', {
            required: { value: true, message: 'Missing name' },
            minLength: { value: 3, message: 'Name too short' },
            maxLength: { value: 50, message: 'Name too long' },
          })}
        />

        <label>Last Name: </label>
        <input
          type="text"
          {...register('lastName', {
            required: { value: true, message: 'Missing price' },
            minLength: { value: 3, message: 'Name too short' },
            maxLength: { value: 50, message: 'Name too long' },
          })}
        />
        <button>Update</button>
      </form>
    </div>
  );
}
