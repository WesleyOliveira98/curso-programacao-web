const perguntas = [
    {
        pergunta: "Como declarar uma variavel no Javascript?",
        alternativas: {
            a: "variable nome",
            b: "var nome",
            c: "v nome",
            d: "function name"
        },
        resposta: "b"
    },
    {
        pergunta: "Como declarar uma função no Javascript?",
        alternativas: {
            a: "funcao facaAlgo() {}",
            b: "function = facaAlgo() {}",
            c: "function facaAlgo[] ()",
            d: "function facaAlgo() {}"
        },
        resposta: "d"
    },
    {
        pergunta: "Qual forma de se declarar uma variavel que impede a mudança de seu valor?",
        alternativas: {
            a: "var",
            b: "let",
            c: "const",
            d: "fixed"
        },
        resposta: "c"
    },
    {
        pergunta: "Como fazer uma busca no DOM usando um seletor CSS?",
        alternativas: {
            a: "documet.getElementById('id')",
            b: "documet.querySelector('#id')",
            c: "documet.getElementByName('name')",
            d: "documet.getElementByTagName('p')"
        },
        resposta: "b"
    },
    {
        pergunta: "Como realizer uma operação condicional no Javascript?",
        alternativas: {
            a: "if (texto === 'texto')",
            b: "if x > 5",
            c: "if = y < 10",
            d: "if (z) === (20)"
        },
        resposta: "a"
    }
]

var perguntaAtual = 0

function comecar() {
    montarPergunta()
    perguntaIn()

    var comecar = document.querySelector(".comecar")
    comecar.classList.add("oculto")
}

function montarPergunta() {
    var pergunta = document.querySelector(".pergunta")
    pergunta.innerHTML = perguntas[perguntaAtual].pergunta

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

    if (perguntaAtual > perguntas.length-1) return

    perguntaInOut()

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

        if (perguntaAtual === perguntas.length-1) {
            alert("Parabéns! Você finalizou o quizz.")
            document.querySelector(".reiniciar").classList.remove("oculto")
        }
        else document.querySelector(".proxima-pergunta").classList.remove("oculto")
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
    perguntaOut()
    setTimeout(() => {
        document.querySelector(".comecar").classList.remove("oculto")
    },1000)
    document.querySelector(".reiniciar").classList.add("oculto")
}

function perguntaIn() {
    var container = document.querySelector(".shadow")
    container.classList.remove("oculto")
    container.classList.remove("fade-out")
    container.classList.add("fade-in")
}

function perguntaOut() {
    var container = document.querySelector(".shadow")
    container.classList.remove("oculto")
    container.classList.remove("fade-in")
    container.classList.add("fade-out")
    setTimeout(() => {
        container.classList.add("oculto")
    },1000)
}

function perguntaInOut() {
    var container = document.querySelector(".shadow")
    container.classList.remove("oculto")
    container.classList.remove("fade-in")
    container.classList.add("fade-out")
    setTimeout(() => {
        container.classList.remove("fade-out")
        container.classList.add("fade-in")
    },1000)
}