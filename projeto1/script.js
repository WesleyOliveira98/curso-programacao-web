//Seleciona todos os campos
var campos = document.querySelectorAll("td")

function iniciar() {
    //Exibe a div com classe info
    var info = document.querySelector(".info")
    info.classList.remove("oculto")

    //Altera o estilo, texto e função do botão
    var button = document.querySelector("button")
    button.classList.remove("btn-success")
    button.classList.add("btn-danger")
    button.textContent = "Reiniciar"
    button.onclick = limpaJogo

    //Remove a classe blocked de todos os campos
    limpaJogo()
}

//Para cada um dos campos, adicionamos um event listener de click
campos.forEach(function(campo) {
    campo.addEventListener("click", evento => {
        //Identifica o elemento através do evento
        let elemento = evento.target

        //Caso o elemento tenha a classe blocked ou a classe info esteja oculta, finaliza a execução
        if (elemento.classList.contains("blocked")) return
        if (document.querySelector(".info").classList.contains("oculto")) return

        //Identifica o jogador da vez e marca o campo com o texto, estilo e a classe blocked
        let jogador = document.querySelector(".jogador strong")
        elemento.textContent = jogador.textContent
        elemento.style.color = jogador.style.color
        elemento.classList.add("blocked")

        //Verifica se há um ganhador e caso haja, exibe o texto de vencedor e finaliza a execução
        let ganhador = validaJogada()
        if (ganhador) {
            document.querySelector(".vencedor").classList.remove("oculto")
            document.querySelector(".velha").classList.add("oculto")
            document.querySelector(".vez").classList.add("oculto")
            return
        }

        //Identifica o jogador da vez e altera para o outro jogador
        if (jogador.textContent === "X") {
            jogador.textContent = "O"
            jogador.style.color = "red"
        }
        else {
            jogador.textContent = "X"
            jogador.style.color = "blue"
        }
    })
})

function validaJogada() {
    //Combinações Existentes
    var combinacoes = [
        //Horizontais
        [0,1,2],
        [3,4,5],
        [6,7,8],
        //Verticais
        [0,3,6],
        [1,4,7],
        [2,5,8],
        //Diagonais
        [0,4,8],
        [2,4,6]
    ]
    var ganhador = null

    //Para cada combinação
    combinacoes.forEach(combinacao => {
        //Puxa os valores nas posições da combinação
        let valor1 = campos[combinacao[0]].textContent
        let valor2 = campos[combinacao[1]].textContent
        let valor3 = campos[combinacao[2]].textContent

        //Caso não haja um dos dados, finaliza a execuçãio
        if (!valor1 || !valor2 || !valor3) return

        //Caso os 3 valores sejam iguais definimos o ganhador e o estilo das casas
        if (valor1 === valor2 && valor2 === valor3) {
            ganhador = valor1

            let background = ""
            if (valor1 === "X") background = "blue"
            else background = "red"

            campos[combinacao[0]].style.cssText = `background-color: ${background}; color: white;`
            campos[combinacao[1]].style.cssText = `background-color: ${background}; color: white;`
            campos[combinacao[2]].style.cssText = `background-color: ${background}; color: white;`
        }
    })

    //Valida se não tem mais espaços em branco, caso não tenha e não tenha um vencedor
    //Significa que o jogo "Deu Velha"
    var espacosEmBranco = 0
    campos.forEach(campo => {
        if (campo.textContent === "") espacosEmBranco++
    })
    if (!ganhador && espacosEmBranco === 0) {
        document.querySelector(".vencedor").classList.add("oculto")
        document.querySelector(".velha").classList.remove("oculto")
        document.querySelector(".vez").classList.add("oculto")
        document.querySelector(".jogador").classList.add("oculto")
        return
    }

    //Retorna o ganhador
    return ganhador
}

function limpaJogo() {
    //Mantem somente o texto da vez e o jogador da vez visivel
    document.querySelector(".vencedor").classList.add("oculto")
    document.querySelector(".velha").classList.add("oculto")
    document.querySelector(".vez").classList.remove("oculto")
    document.querySelector(".jogador").classList.remove("oculto")

    //Limpa todos os estilos e textos dos campos
    campos.forEach(campo => {
        campo.style.cssText = ""
        campo.textContent = ""
        campo.classList.remove("blocked")
    })
}