import React from 'react';
import UserModel from '../../../Models/UserModel';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import authService from '../../../Services/AuthService';

export default function Register() {
  const { register, handleSubmit, formState } = useForm<UserModel>();
  const navigate = useNavigate();

  async function send(user: UserModel) {
    try {
      await authService.register(user);
      alert('You have been succesfully registered.');
      navigate('/home');
    } catch (e: any) {
      alert(e);
    }
  }
  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(send)}>
        <label>First name:</label>
        <input type="text" {...register('firstName')} />
        <label>Last name:</label>
        <input type="text" {...register('lastName')} />
        <label>Username:</label>
        <input type="text" {...register('username')} />
        <label>Password:</label>
        <input type="password" {...register('password')} />
        <button>Register</button>
      </form>
    </div>
  );
}
