// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB2ecgrDP8EBfpFTi9f9xVAhaEHx1QVcOE",
    authDomain: "codebuddy-94110496.firebaseapp.com",
    projectId: "codebuddy-94110496",
    storageBucket: "codebuddy-94110496.firebasestorage.app",
    messagingSenderId: "351375500369",
    appId: "1:351375500369:web:fbb18ffab54cb45cf58470",
    measurementId: "G-2N44WQXBDL"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);