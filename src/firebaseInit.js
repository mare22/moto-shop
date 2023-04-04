import firebase from 'firebase/compat/app';
import 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBUt_XKpvgqz3rPZ14N1JEcp2smGmjQHTw",
    authDomain: "moto-shop-a9729.firebaseapp.com",
    projectId: "moto-shop-a9729",
    storageBucket: "moto-shop-a9729.appspot.com",
    messagingSenderId: "135199996362",
    appId: "1:135199996362:web:4462480da5ff37a1383733"
};
    
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig); 

const auth = getAuth(firebase.initializeApp(firebaseConfig))

export { auth }

