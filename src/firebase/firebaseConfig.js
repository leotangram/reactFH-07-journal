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

const firebaseConfigTesting = {
  apiKey: 'AIzaSyCRwLTBoqCbPUE_Da6tkyURARknRIaVHQ0',
  authDomain: 'fh-react-development.firebaseapp.com',
  databaseURL: 'https://fh-react-development.firebaseio.com',
  projectId: 'fh-react-development',
  storageBucket: 'fh-react-development.appspot.com',
  messagingSenderId: '18939830839',
  appId: '1:18939830839:web:b7d59a227bfc72b7d315b2'
}

if (process.env.NODE_ENV === 'test') {
  // testing
  firebase.initializeApp(firebaseConfigTesting)
} else {
  // dev/prod
  firebase.initializeApp(firebaseConfig)
}

const db = firebase.firestore()
const googleAddProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAddProvider, firebase }
