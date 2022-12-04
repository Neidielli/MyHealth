import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {getAuth} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { initializeFirestore } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCQ_7u29-VxCLhxo4D618Aq87d1v-A1x0E",
    authDomain: "auth-web-99e9f.firebaseapp.com",
    projectId: "auth-web-99e9f",
    storageBucket: "auth-web-99e9f.appspot.com",
    messagingSenderId: "313323038881",
    appId: "1:313323038881:web:71074a06bb12cf883aa8e0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true})

// exportar os obj para que qualquer outro arquivo possa acessa-los
export {app, auth, db}