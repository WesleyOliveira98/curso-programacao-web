//Ativando o Bootstrap Modal para erros
const modal = new bootstrap.Modal('#avisoDeErro', {
    keyboard: false
})

//Ativando o Bootstrap Modal para sucesso
const modalSucesso = new bootstrap.Modal('#sucesso', {
    keyboard: false
})

//Fazendo a busca dos dados novamente quando o modal de sucesso for ocultado
document.querySelector("#sucesso").addEventListener('hidden.bs.modal', () => {
    window.location.href = './index.html'
})


// Acessando link https://example.com/?nome=Wesley&sobrenome=Oliveira&idade=24
const urlParams = new URLSearchParams(window.location.search)

const nome = urlParams.get("nome")
console.log(nome) // Exibe "Wesley"

const sobrenome = urlParams.get("sobrenome")
console.log(sobrenome) // Exibe "Oliveira"

const idade = Number(urlParams.get("idade"))
console.log(idade) // Exibe 24



var usuario = false

window.addEventListener("load", () => {
    //Identifica se possui o id como URL Params
    let id = new URLSearchParams(window.location.search).get("id")
    if (!id) return

    //Exibe o loading
    document.querySelector(".container").classList.add("oculto")
    document.querySelector("#loading").classList.remove("oculto")

    //Faz a requisição via fetch enviando a nossa credencial em base64 no header
    //E passa o id recebido pela query param
    fetch("https://api-curso-programacao-web.vercel.app/api/usuarios/"+id, {
        headers: {
            "Authorization": "Basic " + btoa('admin:admin') //converte em base64
        }
    })
        .then(resposta => resposta.json()) // converte a resposta e, json
        .then(resposta => {
            console.log(resposta)
            //chama a função de montar a tabela com os dados em json
            usuario = resposta
            preencheForm(resposta)
        })
        .catch(error => {
            console.log(error.message)
            //caso haja um erro na requisição, o modal é exibido
            modal.show()
        })
})

function preencheForm(resposta) {
    let campos = Object.keys(resposta)
    campos.forEach(campo => {
        if (campo !== "id") document.querySelector("#"+campo).value = resposta[campo]
    })

    document.querySelector(".container").classList.remove("oculto")
    document.querySelector("#loading").classList.add("oculto")
}

document.querySelector("#cep").addEventListener("input", event => {
    //Adiciona o loading a nossa label de CEP
    document.querySelector("#loadingCEP").classList.remove("oculto")

    //Recebe o valor e valida se possui 8 digitos
    let value = event.target.value
    if (value.length != 8) {
        limpaEndereco()
        return
    }

    //Faz a busca na API Via CEP
    fetch(`https://viacep.com.br/ws/${value}/json/`)
        .then(resposta => resposta.json()) // converte a resposta em JSON
        .then(resposta => {
            console.log(resposta)
            //Caso retorne um objeto com a propriedade erro, lança um novo Error
            if (resposta.erro) throw new Error("Erro na requisição!")
            else preencheEndereco(resposta) // Chama função para preencher os dados
        })
        //Captura os erros e chama função para limpar os inputs e exibir o erro
        .catch(error => {
            console.log(error.message)
            limpaEndereco()
        })
})

function limpaEndereco() {
    document.querySelector("#loadingCEP").classList.add("oculto")
    document.querySelector("#cep").classList.add("is-invalid")
    document.querySelector("#cep").classList.remove("is-valid")
    document.querySelector("#endereco").value = ""
    document.querySelector("#bairro").value = ""
    document.querySelector("#cidade").value = ""
    document.querySelector("#estado").value = ""
}

function preencheEndereco(endereco) {
    document.querySelector("#loadingCEP").classList.add("oculto")
    document.querySelector("#cep").classList.remove("is-invalid")
    document.querySelector("#cep").classList.add("is-valid")
    document.querySelector("#endereco").value = endereco.logradouro
    document.querySelector("#bairro").value = endereco.bairro
    document.querySelector("#cidade").value = endereco.localidade
    document.querySelector("#estado").value = endereco.uf
}

document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault()

    let button = document.querySelector('button[type="submit"]')
    button.querySelector("span").classList.remove("oculto")
    button.disabled = true

    let respostas = {}
    let campos = ["nome", "sobrenome", "email", "data_nascimento", "ddd", "telefone", "cep", "endereco", "bairro", "cidade", "estado"]
    
    campos.forEach(campo => {
        let input = document.querySelector("#"+campo)
        if (!input.value) input.classList.add("is-invalid")
        else {
            input.classList.remove("is-invalid")
            input.classList.add("is-valid")
            respostas[campo] = input.value
        }
    })

    console.log(respostas)

    if (document.querySelectorAll(".is-invalid").length) {
        button.querySelector("span").classList.add("oculto")
        button.disabled = false
        return
    } 

    let camposNumero = ["ddd", "telefone", "cep"]
    camposNumero.forEach(numero => respostas[numero] = Number(respostas[numero]))

    let url = 'https://api-curso-programacao-web.vercel.app/api/usuarios'
    if (usuario) url += `/${usuario.id}`
    
    fetch(url, {
        headers: {
            "Authorization": "Basic " + btoa('admin:admin') //converte em base64
        },
        method: usuario ? "PUT" : "POST",
        body: JSON.stringify(respostas)
    })
        .then(resposta => {
            console.log(resposta)
            //caso a requisição retorne sucesso, o modal de sucesso é exibido
            if (resposta.ok) {
                modalSucesso.show()
                button.querySelector("span").classList.add("oculto")
                button.disabled = false
            }
            //Caso não, lança um novo erro para ser capturado no catch
            else throw new Error("Erro na requisição!")
        })
        .catch(error => {
            console.log(error.message)
            //caso haja um erro na requisição, o modal de erro é exibido
            modal.show()
            button.querySelector("span").classList.add("oculto")
            button.disabled = false
        })
})