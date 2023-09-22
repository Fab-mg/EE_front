import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <h1 className="text-[30px] text-[#735be8] font-bold mx-2">ENI Exchange</h1>
      <Outlet />
    </div>
  );
}
