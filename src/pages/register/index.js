import React from 'react';
import RegisterForm from './RegisterForm';
import { db } from '../../firebaseSetup';
import { onValue, push, ref } from 'firebase/database';

export default function Register() {
  const createGroup = () => {
    const dbRef = ref(db, `/groups/1148673`);
    console.log('db:', db);
    const newData = {
      groupId: '11213786',
      groupName: 'test',
      groupMembers: 'me',
      userIds: [1, 2, 3],
    };

    const newChildRef = push(dbRef, newData);
    onValue(
      newChildRef,
      (snapshot) => {
        if (snapshot.exists()) {
          console.log('Data has been saved successfully.');
        } else {
          console.error('Data was not saved.');
        }
      },
      (error) => {
        console.error('Error saving data:', error);
      }
    );
  };
  return (
    <div className="w-full h-screen flex justify-center bg-gradient-to-r from-purple-500 to-pink-500">
      <RegisterForm />
      <button onClick={createGroup}>Submit</button>
    </div>
  );
}
