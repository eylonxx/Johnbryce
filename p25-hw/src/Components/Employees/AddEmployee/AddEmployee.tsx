import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import EmployeeModel from '../../../Models/emoloyeeModel';
import employeeService from '../../../Services/EmployeeService';

export default function AddEmployee() {
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<EmployeeModel>();

  async function send(employee: EmployeeModel) {
    try {
      const addedEmployee = await employeeService.addEmployee(employee);
      alert('Employee added! id: ' + addedEmployee.id); // Never show IDs to the user! This is only for dev testing!
      navigate('/employees');
    } catch (err: any) {
      alert(err.message);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(send)}>
        <label>First name: </label>
        <input
          type="text"
          {...register('firstName', {
            required: { value: true, message: 'Missing name' },
            minLength: { value: 3, message: 'Name too short' },
            maxLength: { value: 50, message: 'Name too long' },
          })}
        />

        <label>Last name: </label>
        <input
          type="text"
          {...register('lastName', {
            required: { value: true, message: 'Missing lastName' },
            minLength: { value: 3, message: 'Name too short' },
            maxLength: { value: 50, message: 'Name too long' },
          })}
        />

        <button>Add</button>
      </form>
    </div>
  );
}
