var perguntaAtual = 0
var pergunta = document.querySelector(".pergunta-container")
var finalizou = document.querySelector(".finalizou")

window.addEventListener("load", () => {
    let progresso = window.localStorage.getItem("pergunta-quiz")
    if (progresso) {
        if (progresso > perguntas.length-1) finalizado()
        else {
            perguntaAtual = Number(progresso)
            document.querySelector(".continuar").classList.remove("oculto")
        }
    } else document.querySelector(".comecar").classList.remove("oculto")
})

function comecar() {
    montarPergunta()
    fadeIn(pergunta)

    document.querySelector(".comecar").classList.add("oculto")
    document.querySelector(".continuar").classList.add("oculto")
}

function montarPergunta() {
    var pergunta = document.querySelector(".pergunta")
    pergunta.innerHTML = `${perguntaAtual+1}. ${perguntas[perguntaAtual].pergunta}`

    var alternativas = ["a","b","c","d"]

    alternativas.forEach(alternativa => {
        let texto = perguntas[perguntaAtual].alternativas[alternativa]
        document.querySelector("#"+alternativa).value = texto
        document.querySelector(`label[for="${alternativa}"]`).textContent = texto
    })

    document.querySelectorAll("input").forEach(input => {
        input.classList.remove("is-valid")
        input.classList.remove("is-invalid")
        input.checked = false
    })

    document.querySelector(".enviar-resposta").classList.remove("oculto")
    document.querySelector(".proxima-pergunta").classList.add("oculto")
}

function proximaPergunta() {
    perguntaAtual++
    window.localStorage.setItem('pergunta-quiz',perguntaAtual)
    if (perguntaAtual > perguntas.length-1) {
        perguntaAtual = perguntas.length-1
        finalizado()
        return
    } 
    fadeInOut(pergunta, pergunta)
    setTimeout(() => {
        montarPergunta()
    },1000)
}

document.querySelector("form").addEventListener("submit", evento => {
    evento.preventDefault()
    let resposta = document.querySelector("input[name='alternativa']:checked")
    let respostaCorreta = perguntas[perguntaAtual].resposta

    if (resposta.id === respostaCorreta) {
        resposta.classList.add("is-valid")
        document.querySelector(".enviar-resposta").classList.add("oculto")
        document.querySelector(".proxima-pergunta").classList.remove("oculto")
    }
    else {
        resposta.classList.add("is-invalid")
        var inputCorreto = document.querySelector("#"+respostaCorreta)
        inputCorreto.classList.add("is-valid")

        document.querySelector(".enviar-resposta").classList.add("oculto")
        document.querySelector(".reiniciar").classList.remove("oculto")
    }
})

function reiniciar() {
    perguntaAtual = 0
    window.localStorage.clear()
    if (pergunta.classList.contains("oculto")) fadeOut(finalizou)
    else fadeOut(pergunta)
    setTimeout(() => {
        document.querySelector(".comecar").classList.remove("oculto")
    },1000)
    document.querySelector(".reiniciar").classList.add("oculto")
}

function fadeIn(elemento) {
    elemento.classList.remove("oculto")
    elemento.classList.remove("fade-out")
    elemento.classList.add("fade-in")
}

function fadeOut(elemento) {
    elemento.classList.remove("oculto")
    elemento.classList.remove("fade-in")
    elemento.classList.add("fade-out")
    setTimeout(() => {
        elemento.classList.add("oculto")
    },1000)
}

function fadeInOut(elemento1,elemento2) {
    elemento1.classList.remove("fade-in")
    elemento1.classList.add("fade-out")
    setTimeout(() => {
        elemento1.classList.add("oculto")
        elemento2.classList.remove("oculto")
        elemento2.classList.remove("fade-out")
        elemento2.classList.add("fade-in")
    },1000)
}

function finalizado() {
    if (pergunta.classList.contains("oculto")) {
        fadeIn(finalizou)
        setTimeout(() => {
            document.querySelector(".reiniciar").classList.remove("oculto")
        },1000)
    } 
    else {
        fadeInOut(pergunta, finalizou)
        setTimeout(() => {
            document.querySelector(".reiniciar").classList.remove("oculto")
        },2000)
    } 
}