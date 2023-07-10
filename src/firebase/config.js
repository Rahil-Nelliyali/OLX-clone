import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAezh_YE3HOQPCsvlE_IvVSzJ6C6D2ix1c",
  authDomain: "olx-clone-96cea.firebaseapp.com",
  projectId: "olx-clone-96cea",
  storageBucket: "olx-clone-96cea.appspot.com",
  messagingSenderId: "779304623266",
  appId: "1:779304623266:web:6cb9d6b1b43262b1844bfb",
  measurementId: "G-EX6FR4704Y"
};

export default  firebase.initializeApp(firebaseConfig)