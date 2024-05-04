import { initializeApp } from 'firebase/app';
import {
  doc,
  getDocs,
  updateDoc,
  collection,
  getFirestore,
} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  REACT_APP_FIREBASE_APIKEY,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_MESSAGINGSENDERID,
  REACT_APP_FIREBASE_PROJECTID,
} from 'config/envs';
import { settingsResponse } from 'types/settings.firebase';
import type { componentsConfig, themeColors } from 'types/generics';

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_APIKEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_APIKEY,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth();

// auth
export async function authLogin(email: string, password: string) {
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
export async function getSettings(): Promise<settingsResponse> {
  const querySnapshot = await getDocs(collection(db, 'settings'));
  const [aboutme, general, presentation] = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return { aboutme, general, presentation } as settingsResponse;
}

export async function setColorsTheme(isDarkMode: boolean, theme: themeColors) {
  const colorDataRef = doc(db, 'settings', 'general');

  await updateDoc(colorDataRef, {
    [`Colors.${isDarkMode ? 'dark' : 'light'}`]: theme,
  });
}

export async function setComponentsConfig(componentsConfig: componentsConfig) {
  const colorDataRef = doc(db, 'settings', 'general');

  await updateDoc(colorDataRef, {
    components: componentsConfig,
  });
}

// Projects
export async function getProjects() {
  const querySnapshot = await getDocs(collection(db, 'projects'));
  const data = querySnapshot.docs.map((doc) => {
    return doc.data();
  });
  return data;
}
