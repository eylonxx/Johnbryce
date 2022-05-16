import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../../../Services/AuthService';

export default function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      authService.logout();
      alert('You have been logged out');
      navigate('/home');
    } catch (e) {
      alert(e);
    }
  }, []);
  return <div></div>;
}
