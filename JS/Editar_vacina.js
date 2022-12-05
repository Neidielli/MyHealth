
window.onload = () => {
    // ao clicar no botao excluir exibe o pop up
    document.getElementById("botao-excluir").addEventListener("click", () => {
        console.log('clicou')
        document.getElementById("popUp").style.display = "flex"
    })
}