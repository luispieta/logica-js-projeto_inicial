let jogo = document.querySelector("div.jogo")
let comecar = document.querySelector("button.comecar")
let numeroAletorio = Math.floor(Math.random() * 100) + 1
let tentativas = 1
let chutes = []

console.log(numeroAletorio)
console.log(chutes)

comecar.addEventListener("click", function () {
    let mensagemComeco = document.querySelector("div.titulo");
    mensagemComeco.style.display = "none"
    jogo.style.display = "block"

})

document.querySelector("button#verificar").addEventListener("click",function () { // linha para receber só um click

    let exibirDiv = document.querySelector("div.container__informacoes")
    let numeroEscolhido = Number(document.querySelector("input#numeroEscolhido").value)
    let resultado = document.querySelector("p#resultado")
    let numeroChutados = document.querySelector("span#numerosChutados")
    let resultadoTentativas = document.querySelector("p#tentativas")
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"
    
    chutes.push(numeroEscolhido)

    numeroChutados.innerHTML = `${chutes}`

    if (numeroEscolhido === numeroAletorio) {
        resultadoTentativas.innerText = `${tentativas} ${palavraTentativa} para acertar o número`
        jogo.style.display = "none"
        exibirDiv.style.display = "block"

    } else { 
        if (numeroEscolhido >= 1 && numeroEscolhido <= 100) {
            if (numeroEscolhido > numeroAletorio){
                resultado.innerText = `O número é menor que ${numeroEscolhido}. Tente novamente!`

            } else {
                resultado.innerText = `O número é maior que ${numeroEscolhido}. Tente novamente!`

            }
            tentativas ++

        } else {
            resultado.innerText = "Insira um número de 1 a 100."

        } 
    }

    document.querySelector("input#numeroEscolhido").value = ""

})

document.querySelector("button.reiniciarJogo").addEventListener("click", function () {
    location.reload()
})