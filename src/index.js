import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { initializeApp } from "firebase/app";


//! Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuPsh-CtEc7m2JCss-osrjSMKrslRcJLg",
  authDomain: "ecommercemyfriendlypet.firebaseapp.com",
  projectId: "ecommercemyfriendlypet",
  storageBucket: "ecommercemyfriendlypet.appspot.com",
  messagingSenderId: "782121581313",
  appId: "1:782121581313:web:9fb5c024b31598db9f3900"
};

//! Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
