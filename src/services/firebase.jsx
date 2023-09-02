import { initializeApp } from "firebase/app";
import {
  doc,
  getDoc,
  getDocs,
  updateDoc,
  collection,
  getFirestore,
} from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

// auth
export async function authLogin(email, password) {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error({ errorCode, errorMessage });
    });
}

export function getUserAuth() {
  const user = auth.currentUser;
  return user;
}

// DATABASE

// Settings
export async function getSettings() {
  const querySnapshot = await getDocs(collection(db, "settings"));
  const [aboutme, general, presentation] = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return { aboutme, general, presentation };
}

export async function setColorsTheme(isDarkMode, theme) {
  const colorDataRef = doc(db, "settings", "general");

  await updateDoc(colorDataRef, {
    [`Colors.${isDarkMode ? 'dark': 'light'}`]: theme,
  });
}

// Projects
export async function getProjects() {
  const querySnapshot = await getDocs(collection(db, "projects"));
  const data = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return data;
}
