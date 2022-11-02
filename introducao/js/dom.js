function acessarDOM() {
    //Acessa todo o body
    console.dir(document.body)

    //Busca elementos da TAG <p>
    var tagsP = document.getElementsByTagName("p")
    console.dir(tagsP)

    //Busca Elementos com a classe container
    var divs = document.getElementsByClassName("conteiner")
    console.log(divs)

    //Busca elementos com o nome curtir
    var radios = document.getElementsByName("curtir")
    console.log(radios)

    //Busca o elemento com id nome
    var entrada = document.getElementById("nome").value
    alert(entrada)

    //Busca input type radio checkado
    var checado = document.querySelector("input[type='radio']:checked")
    alert(checado.value)
}


//Insere um atributo a um elemento
var input = document.getElementById("nome")
input.setAttribute("placeholder", "Digite seu nome")

//Busca um atributo de um elemento
console.log(input.getAttribute("placeholder"))

//Altera o HTML interno de um elemento
var paragrafo = document.querySelector("p")
paragrafo.innerHTML = "Insere conteúdo a um elemento"

//Adiciona um escutador de eventos ao elemento
paragrafo.addEventListener("click", function () {
    alert("Primeiro paragrafo")
})

//Modifica o estilo do elemento
paragrafo.style.color = "blue"

//Estlização com Javascript
var button = document.querySelector("button")

//Altera o display
button.style.display = "block"
//Altera o a cor do fundo
button.style.backgroundColor = "dodgerblue"
//Altera a cor do texto
button.style.color = "white"
//Altera a margem
button.style.margin = "10px 0px"
//Altera o padding (margem interna)
button.style.padding = "10px"
//Altera a borda
button.style.border = "none"
//Altera o arredondamento das bordas
button.style.borderRadius = "5px"

//CRUD HTML
//Create "Criar"
var h1 = document.createElement("h1")
h1.innerHTML = "Eu sou uma h1 criada por JS"
document.body.appendChild(h1)

//Read "Ler"
var nome = document.getElementById("nome")
console.log(nome.value)

//Update "Atualizar"
var paragrafo = document.querySelector("p")
paragrafo.innerHTML = "Fui alterado por JS"

//Delete "Deletar"
var p = document.querySelector(".container p")
p.remove()
//ou
// p.parentElement.removeChild(p)