const criarConta = () => {
    window.location.href = './Criar_conta.html'
}
window.onload = () => {    
    document.getElementById("botao-criarconta").addEventListener('click', criarConta)
}