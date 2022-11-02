//Função simples
function aviso() {
    console.log("A função foi executada")
    alert("Esse é um aviso!")
}

//Chama a função
aviso()

//Função que recebe parametros
function soma(a, b) {
    let resultado = a + b
    return resultado
}

//Declara a variavel que irá receber o valor retornado
//pela função, e ao chamar a função é passado dois números 
//como parametros
var res = soma(2, 3)
console.log(res)

//Escopos
//Variavel Global
var global = 1

function escopo() {
    //Variavel Local
    var local = 2
    console.log(global) //Exibe 1
    console.log(local) //Exibe 2
}

//Chama a função
escopo()

console.log(global) //Exibe 1
//console.log(local) //Exibe erro: local is not defined

if (global == 1) {
    //Variavel Local com escopo de bloco
    let bloco = 3
    console.log(bloco) //Exibe 3 
}

//console.log(bloco) //Exibe erro: bloco is not defined

//Arrow function armazenada em variavel (será chamada através do nome da variavel)
const semParametro = () => {
    console.log("Sou uma função sem parametros")
}
semParametro()

//Arrow function com somente 1 parametro (não precisa do paranteses)
const comParametro = parametro => {
    console.log(parametro)
}
comParametro("Teste arrow function com um parametro")

//Arrow function com mais de um parametro (precisa do paranteses)
const multParametro = (param1, param2) => {
    console.log(param1)
    console.log(param2)
}
multParametro("Parametro 1", "Parametro 2")

//Arrow function dentro de métodos que recebem uma função como parametro
//Também não precisa ser nomeada
const valores = [1, 2, 3]
valores.forEach(valor => {
    console.log(valor)
})


//Funções que retornam promessas
function delay(seg) {
    //Retorna nova promessa que recebe os métodos resolve e reject
    return new Promise((resolve, reject) => {
        //Método executa a função após o tempo infrormado
        setTimeout(() => {
            //Resolve a Promisse
            resolve(seg)
        }, seg * 1000) // segundos em milisegundos
    })
}

//Função assincrona, executa em seu tempo,
//não dependendo da influência da execução do sistema
async function assincrona() {
    console.log("Iniciou a execução da função")
    //Cria variavel para armazenar os segundos
    let segundos
    //O await faz com que a função aguarde a promessa
    //ser resolvida ou rejeitada
    segundos = await delay(3)
    console.log(`Demorou ${segundos} segundos para logar`)
    segundos = await delay(5)
    console.log(`Demorou ${segundos} segundos para logar`)
    segundos = await delay(10)
    console.log(`Demorou ${segundos} segundos para logar`)
}

//Chama a função que executará de forma assincrona
assincrona()

//Função assincrona para busca de dados
async function getData() {
    //Uso do try catch para caso haja algum erro durante a função
    try {
        //Uso do await para aguardar a resolução das promisses
        const req = await fetch('https://jsonplaceholder.typicode.com/posts')
        const res = await req.json()
        console.log(res)
    } catch (error) {
        console.log(error.message)
    }
}

//Chama a função
getData()