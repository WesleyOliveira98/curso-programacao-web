//Clique
document.querySelector("button[type='button']").addEventListener("click", function () {
    alert("clique")
})
//Duplo Clique
document.querySelector("h2").addEventListener("dblclick", function () {
    alert("duplo clique")
})
//Mudança de Valor
document.getElementById("nome").addEventListener("change", function (event) {
    alert(`O nome agora é ${event.target.value}`)
})
//Inserção de dados
document.getElementById("idade").addEventListener("input", function (event) {
    console.log(`A idade agora é ${event.target.value}`)
})
//Carregamento da página
window.addEventListener("load", function () {
    console.log("A página foi carregada")
})
//Envio do formulário
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault()
    alert("submit")
})