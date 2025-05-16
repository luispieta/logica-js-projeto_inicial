let tentativas = 1;
let jogo = document.querySelector("div.jogo")
let numeroAletorio = Math.floor(Math.random() * 100) + 1;

function vamoComeca(){
    let mensagemComeco = document.querySelector("div.titulo");
    mensagemComeco.style.display = "none"
    jogo.style.display = "block"
    comecarJogo()
}

function comecarJogo() {
    
    let exibirDiv = document.querySelector("div.container__informacoes")
    let numeroEscolhido = Number(document.querySelector("input#numeroEscolhido").value)
    let resultado = document.querySelector("p#resultado")
    let resultadoTentativas = document.querySelector("p#tentativas")
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

    console.log(numeroAletorio)

    if (numeroEscolhido === numeroAletorio) {
        resultadoTentativas.innerText = `${tentativas} ${palavraTentativa} para acertar o número`;
        jogo.style.display = "none"
        exibirDiv.style.display = "block"

    } else { 
        if (numeroEscolhido >= 1 && numeroEscolhido <= 100) {
            if (numeroEscolhido > numeroAletorio){
                resultado.innerText = `O número é menor que ${numeroEscolhido}. Tente novamente!`

            } else {
                resultado.innerText = `O número é maior que ${numeroEscolhido}. Tente novamente!`

            }
            tentativas ++;

        } else {
            resultado.innerText = "Insira um número de 1 a 100."

        } 
    }


}

function retornarJogo(){
    
}