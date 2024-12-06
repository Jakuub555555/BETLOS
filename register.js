  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAXlaK7TBgOL69Cvdwcc6OjxJJPCQvhqjw",
    authDomain: "betlos-8dc94.firebaseapp.com",
    projectId: "betlos-8dc94",
    storageBucket: "betlos-8dc94.firebasestorage.app",
    messagingSenderId: "307566128619",
    appId: "1:307566128619:web:c6140e2a0e67299487fdae",
    measurementId: "G-BLVPSGGPTY"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);