import React, { useState } from 'react';
import { loginUser } from '../../services/user.service';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';
import { HiOutlineMail } from 'react-icons/hi';
import { SiSololearn } from 'react-icons/si';
import { RiLockPasswordLine } from 'react-icons/ri';

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
    const payload = response.data.payload;
    Cookies.set('token', token, { expires: 1 });
    Cookies.set('userPayload', JSON.stringify(payload), { expires: 1 });
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
      <div className="p-4 rounded-full bg-black w-fit z-10 mx-auto mb-[-30px]">
        <SiSololearn color="white" size="40" />
      </div>
      <div className="border-2 border-black flex flex-col items-center py-8 gap-5 rounded-md shadow-2xl bg-white">
        <div className="flex flex-row items-center">
          <HiOutlineMail size="30px" className="absolute" />
          <input
            type="text"
            className="border-b-[2px] border-black my-2 p-2 pl-10"
            value={email}
            onChange={emailHandler}
            placeholder="Email"
          />
        </div>
        <div className="flex flex-row items-center">
          <RiLockPasswordLine size="30px" className="absolute" />
          <input
            type="password"
            className="border-b-[2px] border-black my-2 p-2 pl-10"
            value={password}
            onChange={passwordHandler}
            placeholder="Password"
          />
        </div>
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
    </div>
  );
}
