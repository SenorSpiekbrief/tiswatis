import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWvSTizVSAXnr1Ofs28ki-_lEZYEGwq2M",
  authDomain: "tiswatis-e5138.firebaseapp.com",
  projectId: "tiswatis-e5138",
  storageBucket: "tiswatis-e5138.appspot.com",
  messagingSenderId: "1038702841327",
  appId: "1:1038702841327:web:f186c100bcb8e1697e3a1a",
  measurementId: "G-58KSFWRPY2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
