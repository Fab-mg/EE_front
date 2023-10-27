import Cookies from 'js-cookie';
import React from 'react';
import { FaUserGraduate } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function User() {
  const navigate = useNavigate();
  const userPayload = Cookies.get('userPayload');
  console.log();
  if (!userPayload) {
    navigate('/login');
  } else {
    var user = JSON.parse(userPayload);
  }
  if (!user) {
    return;
  }
  return (
    <div className="flex flex-row gap-2 justify-center items-center text-black">
      <FaUserGraduate color="black" />
      <div> {user.nom + ' ' + user.prenom} </div>
    </div>
  );
}
