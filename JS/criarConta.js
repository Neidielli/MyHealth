import {app, auth} from '../config/firebase.js'
import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";

const getEmail = () => {
    return document.getElementById("txtEmail").value
}
const getSenha = () => {
    return document.getElementById("passwSenha").value
}
const getRepetirSenha = () => {
    return document.getElementById("repetirSenha").value
}
const cadastrarUsuario = () => {
    const email = getEmail()
    const senha = getSenha()
    const repetirSenha = getRepetirSenha() 

    if (repetirSenha === senha) {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((user) => {
            window.location.href='Home.html';
            console.log(JSON.stringify(user))
        })
        .catch((error) => {
            console.log(error.message)
        })
    } else {
        document.getElementById("lblAviso").innerHTML = "Senha não confere!"
    }

}
window.onload = () => {    
    document.getElementById("botao-cadastrar").addEventListener('click', cadastrarUsuario)
}