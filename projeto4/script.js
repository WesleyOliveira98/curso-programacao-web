//Ativando o Bootstrap Modal para erros
const modal = new bootstrap.Modal('#avisoDeErro', {
    keyboard: false
})

//Ocultando o loading após o fechamento do modal
//para não passar a impressão de que o sistema ainda está carregando
document.querySelector("#avisoDeErro").addEventListener('hidden.bs.modal', () => {
    document.querySelector("#loading").classList.add("oculto")
})

//Ao iniciar a página, os dados serão buscados
window.addEventListener("load", buscarDados)

function buscarDados() {
    //Oculta tabela e exibe o nosso loading
    document.querySelector(".tabela").classList.add("oculto")
    document.querySelector("#loading").classList.remove("oculto")

    //Faz a requisição via fetch enviando a nossa credencial em base64 no header
    fetch("https://api-curso-programacao-web.vercel.app/api/usuarios", {
        headers: {
            "Authorization": "Basic " + btoa('admin:admin') //converte em base64
        }
    })
        .then(resposta => resposta.json()) // converte a resposta e, json
        .then(resposta => {
            console.log(resposta)
            //chama a função de montar a tabela com os dados em json
            montarTabela(resposta) 
        })
        .catch(error => {
            console.log(error.message)
            //caso haja um erro na requisição, o modal é exibido
            modal.show()
        })
}

function montarTabela(usuarios) {
    //Busca e limpa o body da nossa tabela
    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    //Executa loop para cada um usuário
    usuarios.forEach(usuario => {
        //Monta as strings personalizadas
        //let data_nascimento = new Date(usuario.data_nascimento).toLocaleString()
        let data_nascimento = usuario.data_nascimento.split("-").reverse().join("/")
        let telefone = `(${usuario.ddd}) ${usuario.telefone}`
        let endereco = `${usuario.endereco}, ${usuario.bairro}, ${usuario.cidade} - ${usuario.estado}, ${usuario.cep}`

        //Monta nossa table row usando HTML e template string
        let linha = `<tr>
            <td>${usuario.id}</td>
            <td>${usuario.nome + " " + usuario.sobrenome}</td>
            <td>${usuario.email}</td>
            <td>${data_nascimento}</td>
            <td>${telefone}</td>
            <td>${endereco}</td>
        </tr>`

        //Adiciona a linha ao body da tabela
        tbody.innerHTML += linha
    })

    //Exibe a tabela e oculta o loading
    document.querySelector(".tabela").classList.remove("oculto")
    document.querySelector("#loading").classList.add("oculto")
}
