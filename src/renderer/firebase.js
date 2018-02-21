import { initializeApp } from 'firebase';

const app = initializeApp({
  apiKey: 'AIzaSyCpVq5q9X_k3vydnYFc7RrgE9ZHBV075UU',
  authDomain: 'physics-app-3182d.firebaseapp.com',
  databaseURL: 'https://physics-app-3182d.firebaseio.com',
  projectId: 'physics-app-3182d',
  storageBucket: 'physics-app-3182d.appspot.com',
  messagingSenderId: '604160174016',
});

export const db = app.database();
export const usersRef = db.ref('users');
export const repsRef = db.ref('reps');
