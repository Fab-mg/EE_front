// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { getDatabase } from 'firebase/database';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
