const listaVacinas = [
    {

    },
    {

    }
]
// importa as informações dos campos na home
const getNome = () => {
    return document.getElementById("nome-vacina").value
}
const getDose = () => {
    return document.getElementById("dose").value
}
const getData = () => {
    return document.getElementById("data-vacina").value
}
const getImg = () => {
    return document.getElementById("selecionar-imagem").value
}
const getProxDose = () => {
    return document.getElementById("proxima-vacina").value
}

const cardVacina = (nome, dose, data, img, proxDose) => {
    let card = document.createElement("div")

    let nomeVacina = document.createElement("span")
    nomeVacina.innerHTML = nome

    let doseVacina = document.createElement("span")
    dataVacina.innerHTML = dose

    let dataVacina = document.createElement("span")
    dataVacina.innerHTML = data

    let imgVacina = document.createElement("img")
    imagem.src = img

    let proxDoseVacina = document.createElement("span")
    dataVacina.innerHTML = proxDose


    card.appendChild(nomeVacina)
    card.appendChild(doseVacina)
    card.appendChild(dataVacina)
    card.appendChild(imgVacina)
    card.appendChild(proxDoseVacina)
                
    return card
}

const adicionarCard = () => {
    document.getElementsByClassName("item-vacinas").appendChild(cardVacina("BCG", "22/09/2022"))
}

window.onload = () => {
    document.getElementById("botao-cadastrar").addEventListener('click', adicionarCard)
}