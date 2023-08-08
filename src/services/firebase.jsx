// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8XZbgF1eu-72AbdFvww8krREdV43b8Ws",
  authDomain: "my-portfolio-97048.firebaseapp.com",
  projectId: "my-portfolio-97048",
  storageBucket: "my-portfolio-97048.appspot.com",
  messagingSenderId: "68480745066",
  appId: "1:68480745066:web:c254d6aede4d5cd0c01413"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// database

export async function getSettings() {
  const querySnapshot = await getDocs(collection(db, "settings"));
  const [aboutme, general, presentation] = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return { aboutme, general, presentation };
}

export async function getProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const data = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return data;
}
