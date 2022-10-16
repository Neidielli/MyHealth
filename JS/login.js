import {app, auth} from '../config/firebase.js'
import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import {sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const getEmail = () => {
    return document.getElementById("txtEmail").value
}
const getSenha = () => {
    return document.getElementById("passwSenha").value
}

const autenticarUsuario = () => {
    const email = getEmail()
    const senha = getSenha()

    signInWithEmailAndPassword(auth, email, senha)
    .then((user) => {
       window.location.href = "./Home.html"
    })
    .catch((error) => {
        document.getElementById("lblAviso").innerHTML = "Email e/ou senha inválidos."
    })
}

const recuperarSenha = () => {
    const email = getEmail()

    sendPasswordResetEmail(auth, email)
    .then(() => {
        console.log('Solicitação realizada')
     })
     .catch(() => {
        console.log('Erro na solicitação')
     })
}
const esqueceSenha = () => {
    window.location.href = "./Recuperar_Senha.html"
}

window.onload = () => {    
    document.getElementById("botao-entrar").addEventListener('click', autenticarUsuario)
    document.getElementById("botao-recuperar").addEventListener('click', recuperarSenha)
    document.getElementById("esqueci-senha").addEventListener('click', esqueceSenha)
}