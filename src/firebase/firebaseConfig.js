import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAJJuyMeXPJFWipTjpgcfcyQKyZiyiR988',
  authDomain: 'fh-react.firebaseapp.com',
  databaseURL: 'https://fh-react.firebaseio.com',
  projectId: 'fh-react',
  storageBucket: 'fh-react.appspot.com',
  messagingSenderId: '180487909196',
  appId: '1:180487909196:web:efb8e437c07ab1ba5529e9'
}

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAddProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAddProvider, firebase }
