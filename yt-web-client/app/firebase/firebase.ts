// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    User
} from "firebase/auth"

const firebaseConfig = {
    apiKey: `${process.env.NEXT_PUBLIC_FIREBASE_KEY}`,
    authDomain: `${process.env.NEXT_PUBLIC_AUTH_DOMAIN}`,
    projectId: `${process.env.NEXT_PUBLIC_PROJECT_ID}`,
    storageBucket: `${process.env.NEXT_PUBLIC_STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID}`,
    appId: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
    measurementId: `${process.env.NEXT_PUBLIC_MEASUREMENT_ID}`
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

/**
 * Signs the user in with a Google popup.
 * @returns A Promise that resolves with the user's credentials.
 */
export function signInWithGoogle() {
    return signInWithPopup(auth, new GoogleAuthProvider());
}

/**
 * Signs user out
 * @returns A Promise that resolves when the user is signed out.
 */
export function signOut() {
    return auth.signOut();
}

/**
 * Trigger a callback when the user auth state changes.
 * @returns A function to unsubscribe callback.
 */
export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
}