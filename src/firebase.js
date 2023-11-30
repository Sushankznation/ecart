import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyBRSADnb8W2grZge4u38oL-vu_W4EDgZDA",

    authDomain: "ecart-750a3.firebaseapp.com",

    projectId: "ecart-750a3",

    storageBucket: "ecart-750a3.appspot.com",

    messagingSenderId: "186756813886",

    appId: "1:186756813886:web:e14d6de3bde86aea5c2d6f",

    measurementId: "G-697PCPETHF"

};


const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export default auth;
