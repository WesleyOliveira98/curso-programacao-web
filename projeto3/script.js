function curtir(botao) {
    var icon = botao.querySelector("i")
    if (icon.classList.contains("bi-hand-thumbs-up")) {
        icon.classList.remove("bi-hand-thumbs-up")
        icon.classList.add("bi-hand-thumbs-up-fill")
    }
    else {
        icon.classList.add("bi-hand-thumbs-up")
        icon.classList.remove("bi-hand-thumbs-up-fill")
    }
}