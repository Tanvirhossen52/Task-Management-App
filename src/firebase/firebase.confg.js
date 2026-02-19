// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJaDIcGkAupsIqrBQuU5Lq1cojyxauoFw",
  authDomain: "taskdashbord.firebaseapp.com",
  projectId: "taskdashbord",
  storageBucket: "taskdashbord.firebasestorage.app",
  messagingSenderId: "801312629616",
  appId: "1:801312629616:web:a5e333dac1b846f207e5b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app