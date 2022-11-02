//Carrega os gráficos da biblioteca em sua versão atual
google.charts.load('current', {'packages':['corechart']});

function criarGrafico(dados, options, id, tipo) {
    //Encontra elemento
    var elemento = document.getElementById(id)
    //Caso não haja dados e seja um gráfico de coluna, é necessário a primeira linha
    if (dados.length === 1 && tipo == "column") dados.push([null,0])
    //Cria visualização de dados do google através de array
    var data = google.visualization.arrayToDataTable(dados)

    //Cria o gráfico de acordo com o parametro tipo
    var chart
    if (tipo == "column") chart = new google.visualization.ColumnChart(elemento)
    else if (tipo == "pizza") chart = new google.visualization.PieChart(elemento)

    //Renderiza o gráfico
    chart.draw(data, options);
}

function gerarDadosGraficos(usuarios, header, campo) {
    //O array inicia com a linha do header
    var array = [header]
    //Busca os dados do campo informado
    var lista = usuarios.map(usuario => usuario[campo])
    //Retona uma lista com valores unicos (sem repetições)
    var valores = [...new Set(lista)]
    //Realiza a contagem percorrendo o array lista e insere a nova linha ao array
    valores.forEach(valor => {
        let contagem = 0
        lista.forEach(dado => {
            if (dado == valor) contagem++
        })
        array.push([valor,contagem])
    })
    return array
}