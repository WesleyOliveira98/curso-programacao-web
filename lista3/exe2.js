document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault()
    var cateto1 = document.getElementById('cateto1').value
    var cateto2 = document.getElementById('cateto2').value
    var soma = Math.pow(cateto1,2) + Math.pow(cateto2,2)
    var hipotenusa = Math.sqrt(soma)
    document.getElementById("resultado").innerHTML = `A hipotenusa é: ${hipotenusa.toFixed(2)}`
})