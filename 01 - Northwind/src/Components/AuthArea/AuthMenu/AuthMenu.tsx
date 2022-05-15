import React, { useEffect, useState } from 'react';
import authService from '../../../Services/AuthService';
import store from '../../../Redux/Store';
import { Link } from 'react-router-dom';
import UserModel from '../../../Models/UserModel';

export default function AuthMenu(): JSX.Element {
  const [user, setUser] = useState<UserModel>();

  useEffect(() => {
    setUser(store.getState().authState.user);

    const unsubscribe = store.subscribe(() => {
      setUser(store.getState().authState.user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <span>
          Hello {user.firstName} {user.lastName} | <Link to="/logout">Logout</Link>
        </span>
      ) : (
        <span>
          Hello guest | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </span>
      )}
    </div>
  );
}
