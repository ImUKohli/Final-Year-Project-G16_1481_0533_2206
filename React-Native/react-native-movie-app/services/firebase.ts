import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9wggbV11QWaNf3-3MAdZwIg9CwHTivCg",
  authDomain: "book-store-mern-app-4e507.firebaseapp.com",
  projectId: "book-store-mern-app-4e507",
  storageBucket: "book-store-mern-app-4e507.firebasestorage.app",
  messagingSenderId: "328149772752",
  appId: "1:328149772752:web:6263a34277ad83756e71d5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);