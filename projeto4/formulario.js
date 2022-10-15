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
    
    fetch("https://api-curso-programacao-web.vercel.app/api/usuarios", {
        headers: {
            "Authorization": "Basic " + btoa('admin:admin') //converte em base64
        },
        method: "POST",
        body: JSON.stringify(respostas)
    })
        .then(resposta => {
            console.log(resposta)
            //caso a requisição retorne sucesso, o modal de sucesso é exibido
            if (resposta.ok) {
                modalSucesso.show()
            }
            //Caso não, lança um novo erro para ser capturado no catch
            else throw new Error("Erro na requisição!")
        })
        .catch(error => {
            console.log(error.message)
            //caso haja um erro na requisição, o modal de erro é exibido
            modal.show()
        })
})