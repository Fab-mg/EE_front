import React, { useState } from 'react';
import { loginUser } from '../../services/user.service';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const emailHandler = (e) => {
    setError(false);
    const input = e.target.value;
    setEmail(input);
  };
  const passwordHandler = (e) => {
    setError(false);
    const input = e.target.value;
    setPassword(input);
  };

  const login = async () => {
    setLoading(true);
    const response = await loginUser(email, password);
    if (!response || response.status !== 200) {
      setError(true);
      setLoading(false);
      return;
    }
    const token = response.data.access_token;
    Cookies.set('token', token, { expires: 1 });
    setError(false);
    setLoading(false);
    navigate('/welcome');
  };

  if (loading) {
    return (
      <div className="w-full h-full my-auto mx-auto">
        <Rings height="80" width="80" color="#5a189a" radius="6" visible={true} ariaLabel="rings-loading" />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-8/12 mx-auto my-auto">
      {error && (
        <div className="text-white bg-red-400 py-2 px-5 my-3 rounded-md w-8/12 mx-auto text-center">
          Invalid Credentials
        </div>
      )}
      <h2 className="text-center font-bold text-xl my-3">Bienvenue sur ENI EXCHANGE</h2>
      <p className="text-center text-md mb-3">Connectez-vous pour accéder à la plateforme!</p>
      <label className="ml-3">Email</label>
      <input type="text" className="border-[2px] border-black my-2 p-2" value={email} onChange={emailHandler} />
      <label className="ml-3">Password</label>
      <input
        type="password"
        className="border-[2px] border-black my-2 p-2"
        value={password}
        onChange={passwordHandler}
      />
      <div className="flex flex-row justify-center my-2">
        <div className="rounded-md bg-[#735be8] py-2 px-5 text-white font-bold mx-2 cursor-pointer" onClick={login}>
          Login
        </div>
        <div
          className="rounded-md bg-[#735be8] py-2 px-5 text-white font-bold cursor-pointer"
          onClick={() => navigate('/register')}
        >
          Register
        </div>
      </div>
    </div>
  );
}
