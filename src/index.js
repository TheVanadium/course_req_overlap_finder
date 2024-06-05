import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgFVVu8KTk4xkFARVj_5QeEjZLHFlX1lc",
  authDomain: "uc-merced-badge-finder.firebaseapp.com",
  projectId: "uc-merced-badge-finder",
  storageBucket: "uc-merced-badge-finder.appspot.com",
  messagingSenderId: "565744672969",
  appId: "1:565744672969:web:8b900ee930bc5368096d18",
  measurementId: "G-H37RHEKGWY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
