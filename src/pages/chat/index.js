import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../../config';

export default function Chat() {
  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  return <div>Welcome to the chat interface</div>;
}
