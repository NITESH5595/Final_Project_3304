import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDjDizznc2O0x0rP3oA6QW1v_9cMdGWDUI",
  authDomain: "my-clg-app-b7951.firebaseapp.com",
  projectId: "my-clg-app-b7951",
  storageBucket: "my-clg-app-b7951.appspot.com",
  messagingSenderId: "925255481145",
  appId: "1:925255481145:web:8a66928ab2d20792cd5ae8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
export default app;
