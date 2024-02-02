// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAnalytics, logEvent } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD5mTMiqi5x1_Xb8uNNKxWAluFrIUktnrI",
  authDomain: "karimyoussry-site.firebaseapp.com",
  projectId: "karimyoussry-site",
  storageBucket: "karimyoussry-site.appspot.com",
  messagingSenderId: "999778133738",
  appId: "1:999778133738:web:2e5585804d79ce5cf89993",
  measurementId: "G-NK87PHSFSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'notification_received');