document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault()
    var lista = document.getElementById('lista').value
    var listaSplit = lista.split(",")
    console.log(listaSplit)

    //.map é uma função que percorre cada item de um array para personalizar o valor
    var listaNumeros = listaSplit.map(function(item) {
        return Number(item)
    })
    console.log(listaNumeros)

    //... significa espalhamento de itens, retorna uma lista com cada item do array
    var maior = Math.max(...listaNumeros)
    document.getElementById("resultado").innerHTML = `O maior número é o ${maior}`
})