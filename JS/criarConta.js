import {app, auth} from '../config/firebase.js'
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const getEmail = () => {
    return document.getElementById("txtEmail").value
}
const getSenha = () => {
    return document.getElementById("passwSenha").value
}
const cadastrarUsuario = () => {
    const email = getEmail()
    const senha = getSenha()

    createUserWithEmailAndPassword(auth, email, senha)
    .then((user) => {
        console.log(JSON.stringify(user))
    })
    .catch((error) => {
        console.log(error.message)
    })
}
const criarConta = () => {
    window.location.href = './Criar_conta.html'
}
window.onload = () => {    
    document.getElementById("botao-cadastrar").addEventListener('click', cadastrarUsuario)
    document.getElementById("botao-criarconta").addEventListener('click', criarConta)
}