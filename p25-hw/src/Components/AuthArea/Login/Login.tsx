import React from 'react';
import CredentialsModel from '../../../Models/CredentialsModel';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import authService from '../../../Services/AuthService';

export default function Login() {
  const { register, handleSubmit, formState } = useForm<CredentialsModel>();
  const navigate = useNavigate();

  async function send(user: CredentialsModel) {
    try {
      await authService.login(user);
      alert('You have been succesfully logged in.');
      navigate('/home');
    } catch (e: any) {
      alert(e);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(send)}>
        <label>Username:</label>
        <input type="text" {...register('username')} />
        <label>Password:</label>
        <input type="password" {...register('password')} />

        <button>Login</button>
      </form>
    </div>
  );
}
