import {initializeApp} from 'firebase/app'
import {signInWithPopup, getAuth, FacebookAuthProvider, onAuthStateChanged, signOut, TwitterAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { userService } from '../services/userService';


const firebaseConfig = {
    apiKey: "AIzaSyCA8xLInL7bT73bNDBdpnnlZblDsgwmdTQ",
    authDomain: "padelhost-63af6.firebaseapp.com",
    projectId: "padelhost-63af6",
    storageBucket: "padelhost-63af6.appspot.com",
    messagingSenderId: "232947303260",
    appId: "1:232947303260:web:f9229ce1fcc96361a7f799",
    measurementId: "G-GGS2YSR0NJ"
  };

initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
    const {displayName, email, photoURL} = user
    return {
        avatar: photoURL,
        username: displayName,
        email,
    }
}

export const signOutUser = () => {
    return signOut(getAuth());
}

export const onAuthStateChangedUser = (onChange) => {
    return onAuthStateChanged(getAuth(), user => {
        const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null

        /*
        if () {
            userService({ ...normalizedUser, id: getAuth().user.uid })
        }
        */

        onChange(normalizedUser)
    })
}

export const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider()
    return signInWithPopup(getAuth(), facebookProvider)
}

export const loginWithTwitter = () => {
    const twitterProvider = new TwitterAuthProvider()
    return signInWithPopup(getAuth(), twitterProvider)
}

export const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(getAuth(), googleProvider)
}