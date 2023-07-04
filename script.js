
const mao1 = document.getElementById("mao1")

const mao2 = document.getElementById("mao2")

let jogador1 = ""
let jogador2 = ""

const resultado = document.getElementById("resultado")
const btn = document.getElementById("btn")

window.addEventListener('keydown', function (event) {
    mao1.style.visibility = "hidden";
    mao2.style.visibility = "hidden";

    if (event.key == "a") {
        mao1.innerHTML = `<img src = "imagens/pedra.png" class="icone" alt="Icone Pedra">`
        jogador1 = "pedra"
    }
    if (event.key == "s") {
        mao1.innerHTML = `<img src = "imagens/tesoura.png" class="icone" alt="Icone Tesoura">`
        jogador1 = "tesoura"
    }
    if (event.key == "d") {
        mao1.innerHTML = `<img src = "imagens/papel.png" class="icone" alt="Icone Papel">`
        jogador1 = "papel"
    }
    if (event.key == "1") {
        mao2.innerHTML = `<img src = "imagens/pedra.png" class="icone" alt="Icone Pedra">`
        jogador2 = "pedra"
    }
    if (event.key == "2") {
        mao2.innerHTML = `<img src = "imagens/tesoura.png" class="icone" alt="Icone Tesoura">`
        jogador2 = "tesoura"
    }
    if (event.key == "3") {
        mao2.innerHTML = `<img src = "imagens/papel.png" class="icone" alt="Icone Papel">`
        jogador2 = "papel"
    }
})

btn.addEventListener("click", function (e) {
    e.preventDefault()
    mao1.style.visibility = "visible";
    mao2.style.visibility = "visible";

    if (
        (jogador1 == "pedra" && jogador2 == "pedra") ||
        (jogador1 == "papel" && jogador2 == "papel") ||
        (jogador1 == "tesoura" && jogador2 == "tesoura")
    ) {
        resultado.innerHTML = "Empate"
    } else if (
        (jogador1 == "pedra" && jogador2 == "tesoura") ||
        (jogador1 == "papel" && jogador2 == "pedra") ||
        (jogador1 == "tesoura" && jogador2 == "papel")
    ) {
        resultado.innerHTML = "Jogador 1 venceu!!"
    }
    else if (
        (jogador1 == "papel" && jogador2 == "tesoura") ||
        (jogador1 == "tesoura" && jogador2 == "pedra") ||
        (jogador1 == "pedra" && jogador2 == "papel")
    ) {
        resultado.innerHTML = "Jogador 2 venceu!!"
    }
})

var refresh = document.querySelector("#refresh")

refresh.addEventListener("click", function () {
    location.reload();
});