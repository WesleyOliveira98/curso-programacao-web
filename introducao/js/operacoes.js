//Operações Aritmeticas
var x = 10
var y = 5
//Adição
console.log(x + y) // Retorna 15
//Subtração
console.log(x - y) // Retorna 5
//Multiplicação
console.log(x * y) // Retorna 50
//Divisão
console.log(x / y) // Retorna 2
//Exponenciação
console.log(y ** 2) // Retorna 25
console.log(Math.pow(y, 2)) // Retorna 25
//Raiz Quadrada
console.log(Math.sqrt(9)) // Retorna 3
//Raiz Cúbica
console.log(Math.cbrt(8)) // Retorna 2
//Resto da Divisão
console.log(x % 2) // Retorna 0
console.log(y % 2) // Retorna 1

//Operadores de atribuição
var contador = 0
var numeros = [1,2,3,4,5]

//Operador += soma o valor atual com o valor recebido
numeros.forEach(num => {
    contador += num // equivalente contador = contador + num
})
console.log(contador) // Retorna 15

//Operador -= subtrai o valor atual com o valor recebido
numeros.forEach(num => {
    contador -= num // equivalente contador = contador - num
})
console.log(contador) // Retorna 0

var numero = numeros[0]
//Operador *= multiplica o valor atual com o valor recebido
numero *= 4 //Equivalente numero = numero * 4
console.log(numero) // Retorna 4

//Operador /= divide o valor atual com o valor recebido
numero /= 2 //Equivalente numero = numero / 2
console.log(numero) // Retorna 2

//Operador **= eleva o valor atual ao valor recebido
numero **= 3 //Equivalente numero = numero ** 3
console.log(numero) // Retorna 8