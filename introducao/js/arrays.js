var frutas = ["Maçã", "Banana", "Manga"]

//Adiciona um item ao final
frutas.push("Mamão")
console.log(frutas) // "Maçã","Banana","Manga","Mamão"
//Remove um item do final
frutas.pop()
console.log(frutas) // "Maçã","Banana","Manga"
//Adiciona um item ao inicio
frutas.unshift("Limão")
console.log(frutas) // "Limão","Maçã","Banana","Manga"
//Remove um item do inicio
frutas.shift()
console.log(frutas) // "Maçã","Banana","Manga"
//Encontra a posição de um item
var posicao = frutas.indexOf("Banana")
console.log(posicao) // 0
//Ordena alfabeticamente
frutas.sort()
console.log(frutas) // "Banana","Maçã","Manga"
//Inverte o array
frutas.reverse()
console.log(frutas) // "Manga","Maçã","Banana"
//Remove diversos items
var removidos = frutas.splice(1, 2)
console.log(removidos) // "Manga"
//Unifica todos os items do array com um separador
var nome = ["Wesley", "Oliveira"]
var nomeCompleto = nome.join(" ")
console.log(nomeCompleto) // "Wesley Oliveira"

var alunos = [
    { nome: "Wesley", idade: 24 },
    { nome: "John", idade: 30 }
]
//Acessa cada um dos items de um array
alunos.forEach(function (aluno, posicao) {
    console.log(`${posicao} = ${aluno.nome}`)
})
//Encontra a posição de um item através de uma função
var posicao = alunos.findIndex(function (aluno) {
    return aluno.nome == "Wesley"
})
console.log(posicao) // 0
//Modifica cada item do array
var idades = alunos.map(function (aluno) {
    return aluno.idade
})
console.log(idades) // 24,30
//Busca um dado no array (retorna o primeiro)
var encontrado = alunos.find(function (aluno) {
    return aluno.nome == "John"
})
console.log(encontrado) // { nome: "John", idade: 30 }
//Busca dados no array (retorna todas correspondências)
var encontrados = alunos.filter(function (aluno) {
    return aluno.idade < 40
})
console.log(encontrados) // [{ nome: "Wesley", idade: 24 },{ nome: "John", idade: 30 }]