/* eslint-disable  */
import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBZU8Lo64eJOQkbhI84IGncfVzSGZpV2S0",
  authDomain: "extens-70d95.firebaseapp.com",
  projectId: "extens-70d95",
  storageBucket: "extens-70d95.appspot.com",
  messagingSenderId: "538818811258",
  appId: "1:538818811258:web:db1cefd849bb96c1cbb2c3"
};


const start = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export const db = start.firestore;
export default storage;
