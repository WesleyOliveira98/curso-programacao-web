var idade = 20
//Comparação Simples
//Maior ou igual que
if (idade >= 18) {
    console.log("Maior de idade")
}
else {
    console.log("Menor de idade")
}
//Igual
if (idade == "20") console.log("É igual a '20'")
//Diferente
if (idade != "20") console.log("É diferente de '20'")
else console.log("É igual a '20'")
//Estritamente igual
if (idade === "20") console.log("É estritamente igual a '20'")
else console.log("É estritamente diferente de '20'")
//Estritamente diferente
if (idade !== "20") console.log("É estritamente diferente de '20'")
else console.log("É estritamente igual a '20'")
//Maior que
if (idade > 10) console.log("Tem mais de 10 anos")
//Menor que
if (idade < 10) console.log("Tem menos de 40 anos")
//Menor ou igual que
if (idade <= 17) console.log("Tem 17 anos ou menos")

//Usando o else if
if (idade <= 10) console.log("Não paga entrada")
else if (idade < 18) console.log("Paga meia entrada")
else if (idade >= 18) console.log("Paga entrada completa")

//Usando o AND
var entrada = 15
var saldo = 20
if (idade >= 18 && saldo >= entrada) {
    console.log("Consegue comprar")
}
else console.log("Não consegue comprar")

//Usando o OR
idade = 12
var classificacao = 16
var acompanhado = true
if (idade >= classificacao || acompanhado === true) {
    console.log("Permitido a entrada")
}
else console.log("Não é permitido")

//Usando o Switch Case
var estado = "SP"
console.log(estado) // Retorna "SP"

switch (estado) {
    case "MG":
        estado = "Minas Gerais";
        break;
    case "ES":
        estado = "Espirito Santo";
        break;
    case "RJ":
        estado = "Rio de Janeiro";
        break;
    case "SP":
        estado = "São Paulo";
        break;
    default:
        estado = "Não definido";
        break;
}

console.log(estado) // Retorna "São Paulo"

//Operador ternário

//Caso retorna true
var idade = 20
var maiorDeIdade = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(maiorDeIdade) // Retorna "Maior de idade"

//Caso retorne false
idade = 17
maiorDeIdade = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(maiorDeIdade) // Retorna "Menor de idade"

//Testando se o valor existe
var idadeExiste = idade ? true : false
console.log(idadeExiste) // Retorna true

idade = null
idadeExiste = idade ? true : false
console.log(idadeExiste) // Retorna false