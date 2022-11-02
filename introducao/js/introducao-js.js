//Variavel comum
var nome = "John"
//Variavel com escopo de bloco
let idade = 25
//Valor constante
const pi = 3.14

//Booleano, Verdadeiro ou Falso
var booleano = true
//Nulo
var nulo = null
//Indefinido
var indefinido = undefined
//Como não atribuimos valor também terá o valor undefined
var ind
//Número Inteiro
var inteiro = 10
//Número Decimal (Usamos ponto ao invés de virgula)
var decimal = 5.15
//String (Texto)
var texto = "Texto"
//Array (Vetor), conjunto de valores separados por virgula
var vetor = [1,2,3,4,5]
//Objeto, conjundo de dados agrupados por chave e valor
//Também separados por vírgula
var objeto = {
    nome: "Wesley",
    idade: 24,
    brasileiro: true
}

//Variavel "a" declarada como String (texto)
var a = "Texto"
//Imprime "string"
console.log(typeof a)
//Ao reatribuir um valor numerico, o tipo da variavel
//automaticamente será alterado
a = 5
//Imprime "number"
console.log(typeof a)

var array = ["a","b","c"]
//Impime "a","b","c"
console.log(array)
//Acessa o array na sua segunda posição e altera seu valor
array[1] = "d"
//Impime "a","d","c"
console.log(array)

var objeto = {
    nome: "Wesley",
    idade: 24
}
//Imprime o objeto acima
console.log(objeto)
objeto.nome = "John"
objeto["idade"] = 25
//Imprime { nome: "John", idade: 25 }
console.log(objeto)

//Concatenar Strings
//Usando o +
console.log("Hello " + "World!")
//Usando o + com uma variavel
var nome = "Wesley"
console.log("Meu nome é " + nome)
//Usando o + com um numero
var ano = 2022
console.log("Estamos em " + ano)
//Template String
console.log(`Meu nome é ${nome} e ano que vem será ${ano + 1}`)