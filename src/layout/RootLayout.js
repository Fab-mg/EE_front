// import React from 'react';
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
// import { MainContext, MainContextProvider } from '../context/MainContext';

export default function RootLayout() {
  const navigate = useNavigate();
  // const { userId } = useContext(MainContext);
  return (
    // <MainContextProvider>
    <div>
      <h1 className="text-[30px] text-[#735be8] font-bold mx-2">ENI Exchange</h1>
      {/* {!userId && <div>Login</div>} */}
      <button
        onClick={() => {
          navigate('/chat');
        }}
      >
        Chat
      </button>
      <Outlet />
    </div>
    // </MainContextProvider>
  );
}
