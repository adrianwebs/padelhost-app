import {initializeApp} from 'firebase/app'
import {signInWithPopup, getAuth, FacebookAuthProvider, onAuthStateChanged, signOut, TwitterAuthProvider, GoogleAuthProvider } from 'firebase/auth'
import { findUser, addUser } from '../services/userService';


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
    const {displayName, email, photoURL, uid} = user
    return {
        avatar: photoURL,
        name: displayName,
        email,
        id: uid
    }
}

export const signOutUser = () => {
    return signOut(getAuth());
}

export const onAuthStateChangedUser =  (onChange) => {
    return onAuthStateChanged(getAuth(), async function(user) {
        const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
        if (normalizedUser != null && normalizedUser != undefined) {
            const res = await findUser({findUserId: normalizedUser.id}).then(response => response)
            if (res == null) {
                const {id, name, avatar } = normalizedUser
                const email = normalizedUser.email ? normalizedUser.email : normalizedUser.name + "@xample.com"
                const finalUser = await addUser({id: id, name: name, email: email, avatar: avatar})
                onChange(finalUser)
            } else {
                onChange(res)
            }
        } else {
            onChange(null)
        }
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