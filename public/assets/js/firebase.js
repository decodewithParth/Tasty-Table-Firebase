// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBH-GRkoCcJ-Ej9scmOPsUx3vePTMpaGzc",
    authDomain: "sem-6-43cac.firebaseapp.com",
    projectId: "sem-6-43cac",
    storageBucket: "sem-6-43cac.appspot.com",
    messagingSenderId: "761699371937",
    appId: "1:761699371937:web:d830f34633946e7bbc99e0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Sign in function
export function signIn() {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User signed in");
            // User signed in successfully
            window.location.href = 'index.html'; // Redirect to index.html or any other page
        })
        .catch((error) => {
            console.error("Error signing in: ", error);
        });
}

export function signOutUser() {
    // Example using Firebase Authentication
    const auth = getAuth();
    signOut(auth).then(() => {
        console.log("User signed out");
        // Redirect to login page
        window.location.href = 'login.html';
    }).catch((error) => {
        console.error("Error signing out:", error);
    });
}

// Listen to authentication state changes
export function onAuthStateChangedCallback(callback) {
    onAuthStateChanged(auth, callback);
}