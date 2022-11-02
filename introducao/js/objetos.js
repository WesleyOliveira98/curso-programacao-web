//Armazenando um objeto em uma variavel
var objeto = { nome: "Wesley", sobrenome: "Oliveira" }
console.log(objeto)

//Usando o construtor Object
//O método create cria um novo objeto
var novoObjeto = Object.create(objeto)
console.log(novoObjeto.nome)

//O método entries do construtor retorna um array
//E cada posição do array contém um array com a chave e o valor
var entries = Object.entries(objeto)
console.log(entries) // Exibe [["nome","Wesley"],["sobrenome","Oliveira"]]

//O método keys retorna um array com as chaves do objeto
var keys = Object.keys(objeto)
console.log(keys) // Exibe ["nome","sobrenome"]

//O método values retorna um array com os valores do objeto
var values = Object.values(objeto)
console.log(values) // Exibe ["Wesley","Oliveira"]

//O método assign unifica dois objetos
//E caso haja chaves repetidas, o valor do segundo objeto é usado
var objeto2 = { sobrenome: "Snipez", idade: 24 }
var objetoUnificado = Object.assign(objeto, objeto2)
//Exibe {nome: "Wesley", sobrenome: "Snipez", idade: 24}
console.log(objetoUnificado)

//Espalhamento de dados, pega todas as chaves: valores do objeto
var espalhamentoObjetos = {...objeto,...objeto2}
//Exibe {nome: "Wesley", sobrenome: "Snipez", idade: 24}
console.log(espalhamentoObjetos)