import React from 'react';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <div>
      <h1 className="text-[30px]">ENI Exhange</h1>
      <Outlet />
    </div>
  );
}
