import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATA_BASE_URL,
  projectId: process.env.REACT_APP_DATA_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DATA_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DATA_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
}

// const firebaseConfigTesting = {
//   apiKey: 'AIzaSyCRwLTBoqCbPUE_Da6tkyURARknRIaVHQ0',
//   authDomain: 'fh-react-development.firebaseapp.com',
//   databaseURL: 'https://fh-react-development.firebaseio.com',
//   projectId: 'fh-react-development',
//   storageBucket: 'fh-react-development.appspot.com',
//   messagingSenderId: '18939830839',
//   appId: '1:18939830839:web:b7d59a227bfc72b7d315b2'
// }

// if (process.env.NODE_ENV === 'test') {
//   // testing
//   firebase.initializeApp(firebaseConfigTesting)
// } else {
//   // dev/prod
// firebase.initializeApp(firebaseConfig)
// }

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const googleAddProvider = new firebase.auth.GoogleAuthProvider()

export { db, googleAddProvider, firebase }
