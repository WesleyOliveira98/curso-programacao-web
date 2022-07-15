document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault()
    var raio = document.getElementById('raio').value
    var area = 2 * Math.PI * raio
    document.getElementById("resultado").innerHTML = `A área é: ${area.toFixed(2)}`
})