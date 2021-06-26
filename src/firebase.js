import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/database';

const app = firebase.initializeApp({
    apiKey: "AIzaSyAufpwJLk6PYIpQLBLy91YtPdkM1H-2tDU",
    authDomain: "employee-management-syst-1b4a6.firebaseapp.com",
    projectId: "employee-management-syst-1b4a6",
    storageBucket: "employee-management-syst-1b4a6.appspot.com",
    messagingSenderId: "389706677609",
    appId: "1:389706677609:web:dee58081581dc3b08a91f8",
    measurementId: "G-HSYQR3W16B"
});

export const auth = app.auth()
export const db =  app.database().ref();
export default app;