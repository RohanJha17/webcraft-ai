// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "dora-ai-cd26a.firebaseapp.com",
  projectId: "dora-ai-cd26a",
  storageBucket: "dora-ai-cd26a.firebasestorage.app",
  messagingSenderId: "774438834279",
  appId: "1:774438834279:web:f2b85ea5cdc71dc4b284c2"
};

// Initialize Firebase
let auth = null;
let provider = null;

try {
  const apiKey = firebaseConfig.apiKey;
  if (apiKey && apiKey.trim() !== "" && !apiKey.includes("Use Your key")) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    provider = new GoogleAuthProvider();
  } else {
    console.warn("Firebase API key is missing or placeholder. Authentication will be disabled.");
  }
} catch (error) {
  console.error("Firebase initialization failed:", error);
}

export { auth, provider };