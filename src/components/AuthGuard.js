import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthGuard({ children }) {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get('token');
    console.log('token: ' + JSON.stringify(token));
    if (!token) {
      navigate('/login');
    }
  });
  return <div>{children}</div>;
}
