document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault()
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    var c = document.getElementById('c').value
    var delta = (b * b) - (4 * a * c)
    if (delta < 0) {
        alert("O valor de delta (b² - 4.a.c) deve ser maior que 0")
        return
    }

    console.log(delta)
    console.log(Math.sqrt(delta))
    
    var x1 = (-b + Math.sqrt(delta)) / (2 * a)
    var x2 = (-b - Math.sqrt(delta)) / (2 * a)
    
    document.getElementById("resultado").innerHTML = `O valor de x1 é ${x1.toFixed(2)} <br> O valor de x2 é ${x2.toFixed(2)}`
})