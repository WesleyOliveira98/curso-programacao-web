//Uso da classe Date
//Retorna a data/hora atual
var data = new Date()
//Exibe Sat Oct 01 2022 16:00:00 GMT-0300 
//(Horário Padrão de Brasília)
console.log(data)

var dia = data.getDay()
console.log(dia) // Exibe 1
var mes = data.getMonth()
console.log(mes) // Exibe 10
var ano = data.getFullYear()
console.log(ano) // Exibe 2022
var timestamp = data.getTime()
console.log(timestamp) // Exibe 1664647948096

//Converte para data/hora local "pt-br" no formato usado
var dataHoraPtBr = data.toLocaleDateString("pt-br")
console.log(dataHoraPtBr) //Exibe 01/10/2022 16:00:00

//Converte para data local "pt-br" no formato usado
var dataPtBr = data.toLocaleDateString("pt-br")
console.log(dataPtBr) //Exibe 01/10/2022

//Uso do parametro options da função toLocaleDateString
const options = {
    year: 'numeric', month: 'long', weekday: 'long', day: 'numeric',
    hour: 'numeric', minute: 'numeric', second: 'numeric',
    era: 'long', timeZoneName: 'long',
    timeZone: 'America/Sao_Paulo', hour12: false,
}
var dataFormatada = data.toLocaleDateString("pt-br", options)
//Exibe sabado, 01 de outubro de 2022 depois de Cristo 18:56:20 
//Horário Padrão de Brasília
console.log(dataFormatada)