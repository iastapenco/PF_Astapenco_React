import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7G7KMXS_YCxKZa5s9h6zoiOjcZFpuWcM",
  authDomain: "coffee-shop-online-58f87.firebaseapp.com",
  projectId: "coffee-shop-online-58f87",
  storageBucket: "coffee-shop-online-58f87.appspot.com",
  messagingSenderId: "682167195888",
  appId: "1:682167195888:web:802862de53a64a6ee84a35"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);