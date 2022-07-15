document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault()
    var meta = document.getElementById('meta').value
    var vendas = document.getElementById('vendas').value
    var atingimento = (vendas * 100) / meta
    document.getElementById("resultado").innerHTML = `Atingimos ${atingimento.toFixed(2)}% da meta!`
})