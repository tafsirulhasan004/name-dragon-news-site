// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkQ-tshJx7FXa_iFx-EhYvfogYbgYy7Hc",
  authDomain: "name-dragon-news-site.firebaseapp.com",
  projectId: "name-dragon-news-site",
  storageBucket: "name-dragon-news-site.appspot.com",
  messagingSenderId: "465426587430",
  appId: "1:465426587430:web:191e7a9758f478c9f26be7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app