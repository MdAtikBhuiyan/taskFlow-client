// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_Q6vvwUx1O8WcYGH47SkAxFB4ajmyhCk",
    authDomain: "taskflow-f05bf.firebaseapp.com",
    projectId: "taskflow-f05bf",
    storageBucket: "taskflow-f05bf.appspot.com",
    messagingSenderId: "856638647669",
    appId: "1:856638647669:web:e8540ab4de02b2b3ee373c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;