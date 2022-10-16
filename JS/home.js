import {app, auth} from '../config/firebase.js'
import {signOut} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

// executa uma função de callback para se houver mudança no estado de login do usuario
// para que o usuario n acesse a página home sem estar logado
auth.onAuthStateChanged( function(user) {
    if(!auth.currentUser) {
        window.location.href = "./Entrar.html"
    }
})

const logOut = () => {
    signOut(auth)
}

window.onload = () => {
    document.getElementById("btnLogOut").addEventListener('click', logOut)
}