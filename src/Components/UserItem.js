import React, { useEffect, useState } from 'react';
import { getUserByID } from '../services/user.service';
import { FaUserSecret, FaRegUser } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';

export default function UserItem({ userId }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const getUser = async () => {
    console.log('userId', userId);

    if (userId) {
      const response = await getUserByID(userId);
      if (response) {
        console.log('Setting response', response);
        setUser(response);
      } else {
        setUser(null);
      }
    }
    setLoading(false); // Set loading to false once after handling the response
  };

  useEffect(() => {
    getUser();
  }, []);

  const display = () => {
    return (
      <div>
        {user ? (
          <div>
            <div className="flex items-center">
              <div className="p-2 rounded-full border-2 border-black">
                <FaRegUser size="20px" className="bg-grey" />
              </div>
              <div className="ml-2">
                <div className="font-bold text-md ">{user?.nom + ' ' + user?.prenom}</div>
                <div className="text-[13px] text-gray-500">{user?.niveau + ' ' + user?.userType}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <div className="p-2 rounded-full border-2 border-black">
              <FaUserSecret size="20px" />
            </div>
            <div className="font-bold text-md ml-2">Visiteur</div>
          </div>
        )}
      </div>
    );
  };

  return <div>{!userId || loading ? display() : <BeatLoader color="#6E36D7" />}</div>;
}
