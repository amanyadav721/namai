// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBydG8ajr7rXrdBvgjsTJ5KCNCZOpYAYVg",
  authDomain: "nama-ai.firebaseapp.com",
  databaseURL: "https://nama-ai-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nama-ai",
  storageBucket: "nama-ai.appspot.com",
  messagingSenderId: "297176191296",
  appId: "1:297176191296:web:9a2e4c0f25b09874562aa5",
  measurementId: "G-HRR3CB6CPR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const events = (eventName: string, params: { [key: string]: any }) => {
  if (typeof window !== "undefined" && app) {
    const analytics = getAnalytics(app);
    if (analytics) {
      logEvent(analytics, eventName, params);
    }
  }
};
export default events;