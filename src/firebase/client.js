import firebase from "firebase"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB4BwDPJQiCJEPQkGLNBGVF5hmvsdqEXus",
  authDomain: "aquilastore-5e5b4.firebaseapp.com",
  projectId: "aquilastore-5e5b4",
  storageBucket: "aquilastore-5e5b4.appspot.com",
  messagingSenderId: "541611517575",
  appId: "1:541611517575:web:a4607cc5e3b2969536ba22",
  measurementId: "G-6M9DZJMWYY",
}

try {
  !firebase.apps.length && firebase.initializeApp(firebaseConfig)
} catch (error) {
  console.log("firebase-error", error)
}

// const db = firebase.firestore()

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = user ? mapUserFromFirebaseAuthToUser(user) : null
    onChange(normalizedUser)
  })
}

// GOOGLE login
export const loginWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  return firebase.auth().signInWithPopup(googleProvider)
}

// FACEBOOK login
export const loginWithFacebook = () => {
  const facebookProvider = new firebase.auth.FacebookAuthProvider()
  return firebase.auth().signInWithPopup(facebookProvider)
}

// SIGNOUT
export const onAuthSignOut = () => firebase.auth().signOut()
