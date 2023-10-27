import React from 'react';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="w-6/12 mt-[12%]">
        <LoginForm />
      </div>
    </div>
  );
}
