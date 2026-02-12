// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5KbPxmS73ADZB9uQp4hCVJlCDMIbX1ds",
  authDomain: "mine-52ac1.firebaseapp.com",
  projectId: "mine-52ac1",
  storageBucket: "mine-52ac1.firebasestorage.app",
  messagingSenderId: "540848113129",
  appId: "1:540848113129:web:3fbfc92e86b296e596b778",
  measurementId: "G-EPKM6R7KV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

logEvent(analytics,'page_view')