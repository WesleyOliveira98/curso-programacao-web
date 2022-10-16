//Ativando o Bootstrap Modal para erros
const modal = new bootstrap.Modal('#avisoDeErro', {
    keyboard: false
})

//Ocultando o loading após o fechamento do modal
//para não passar a impressão de que o sistema ainda está carregando
document.querySelector("#avisoDeErro").addEventListener('hidden.bs.modal', () => {
    document.querySelector("#loading").classList.add("oculto")
})

//Ativando o Bootstrap Modal para exclusão
const modalDelete = new bootstrap.Modal('#deletar', {
    keyboard: false,
    backdrop: 'static'
})

//Ativando o Bootstrap Modal para sucesso
const modalSucesso = new bootstrap.Modal('#sucesso', {
    keyboard: false
})

//Fazendo a busca dos dados novamente quando o modal de sucesso for ocultado
document.querySelector("#sucesso").addEventListener('hidden.bs.modal', buscarDados)

//Ao iniciar a página, os dados serão buscados
window.addEventListener("load", buscarDados)

//Cria variavel para armanezar os usuarios
var usuarios = []

function buscarDados() {
    //Oculta tabela e gráficos e exibe o loading
    document.querySelector(".tabela").classList.add("oculto")
    document.querySelector(".graficos").classList.add("oculto")
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
            //Armezena resposta em variavel
            usuarios = resposta
            //chama a função de exibir dados com os dados em json
            exibirDados(resposta)
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
            <td>
                <button type="button" class="btn btn-dark" onclick="editar(this)">
                    <i class="bi bi-pencil-fill"></i>
                </button>
            </td>
            <td>
                <button type="button" class="btn btn-dark" onclick="deletar(this)">
                    <i class="bi bi-trash-fill"></i>
                </button>
            </td>
            <td class="user-id">${usuario.id}</td>
            <td class="user-name">${usuario.nome + " " + usuario.sobrenome}</td>
            <td>${usuario.email}</td>
            <td>${data_nascimento}</td>
            <td>${telefone}</td>
            <td>${endereco}</td>
        </tr>`

        //Adiciona a linha ao body da tabela
        tbody.innerHTML += linha
    })

    //Se o tbody estiver vazio, adiciona uma linha que preenche as 8 colunas exibindo mensagem de erro
    if (!tbody.innerHTML) tbody.innerHTML = `<tr>
        <td colspan="8">Não há dados</td>
    </tr>`
}

function editar(button) {
    //Busca o pai do button (que é o td) e depois o pai do td (que é o tr)
    let linha = button.parentElement.parentElement
    //Busca o id através da classe que demos a ele
    let id = linha.querySelector(".user-id").textContent
    console.log(id)

    //Redireciona para a página do formulário passando o id como query params
    window.location.href = "./formulario.html?id=" + id
}

function deletar(button) {
    //Busca o pai do button (que é o td) e depois o pai do td (que é o tr)
    let linha = button.parentElement.parentElement
    //Busca o id e o nome através das classes que demos a eles
    let id = linha.querySelector(".user-id").textContent
    let name = linha.querySelector(".user-name").textContent
    console.log(id)

    //Prenche as informações no modal deletar
    document.querySelector("#idUsuario").textContent = id
    document.querySelector("#nomeUsuario").textContent = name

    //Abre o modal deletar
    modalDelete.show()
}

function excluir() {
    //Exibe o loading do botão e oculta os mesmos
    let modalDeletar = document.querySelector("#deletar")
    modalDeletar.querySelector("span").classList.remove("oculto")
    modalDeletar.querySelectorAll("button").forEach(button => button.disabled = true)

    //Busca o id a ser excluido no modal deletar
    let id = document.querySelector("#idUsuario").textContent

    //Faz a requisição via fetch enviando a nossa credencial em base64 no header
    //E informado o method DELETE
    fetch("https://api-curso-programacao-web.vercel.app/api/usuarios/"+id, {
        headers: {
            "Authorization": "Basic " + btoa('admin:admin') //converte em base64
        },
        method: 'DELETE'
    })
        .then(resposta => {
            console.log(resposta)
            //Caso a requisição esteja ok, remove o loading e habilita os botões
            //Também oculta o modal de deletar e abre o de sucesso
            if (resposta.ok) {
                modalDeletar.querySelector("span").classList.add("oculto")
                modalDeletar.querySelectorAll("button").forEach(button => button.disabled = false)
                modalDelete.hide()
                modalSucesso.show()
            }
            //Caso não, lança um novo erro para ser capturado no catch
            else throw new Error("Erro na requisição!")
        })
        .catch(error => {
            console.log(error.message)
            modalDeletar.querySelector("span").classList.add("oculto")
            modalDeletar.querySelectorAll("button").forEach(button => button.disabled = false)
            //Oculta o modal de deletar e abre o de erro
            modalDelete.hide()
            modal.show()
        })
}

function filtrar() {
    //Pega o valor do input
    let value = document.querySelector("#filtro").value
    //Cria expressão regular
    var expressaoRegular = new RegExp(value, "i");
    //Cria filtro usando o retorno do método test da expressão regular
    let novoArray = usuarios.filter(usuario => {
        let nomeCompleto = `${usuario.nome} ${usuario.sobrenome}`
        return expressaoRegular.test(nomeCompleto)
    })
    //Chama função para exibir os novos dados
    exibirDados(novoArray)
}

function exibirDados(dados) {
    //Chama a função para montar a tabedla
    montarTabela(dados)

    const options = {
        width: 500,
        height: 350,
        chartArea: { width: "100%", height: "80%" },
    }

    //Chama a função para criar o gráfico de cidades
    const cidades = gerarDadosGraficos(dados, ['Cidade','Qtd Usuários'], 'cidade')
    criarGrafico(cidades, { ...options, title: 'Cidade dos Usuários' }, 'grafico-cidades', 'column')

    //Chama a função para criar o gráfico de estados
    const estados = gerarDadosGraficos(dados, ['Estado','Qtd Usuários'], 'estado')
    criarGrafico(estados, { ...options, title: 'Estado dos Usuários' }, 'grafico-estados', 'column')
    
    //Gera um array com os dados de provedores de e-mail
    const provedoresEmail = dados.map(dado => {
        let provedor = dado.email.split("@")[1].split(".")[0]
        return {provedor: provedor}
    })
    //Chama a função para criar o gráfico de e-mails
    const emails = gerarDadosGraficos(provedoresEmail, ['E-mail','Qtd Usuários'], 'provedor')
    criarGrafico(emails, { ...options, title: 'E-mail dos Usuários' }, 'grafico-emails', 'pizza')

    //Gera um array com os dados de idade do usuário
    const idadesUsuarios = dados.map(dado => {
        let idade = getIdade(dado.data_nascimento).toString()
        return {idade: idade}
    })
    //Chama a função para criar o gráfico de idades
    const idades = gerarDadosGraficos(idadesUsuarios, ['Idade','Qtd Usuários'], 'idade')
    criarGrafico(idades, { ...options, title: 'Idades dos Usuários' }, 'grafico-idades', 'pizza')

    //Exibe a tabela, a pesquisa, os gráficos e oculta o loading
    document.querySelector(".pesquisa").classList.remove("oculto")
    document.querySelector(".tabela").classList.remove("oculto")
    document.querySelector(".graficos").classList.remove("oculto")
    document.querySelector("#loading").classList.add("oculto")
}

function getIdade(data) {
    //Puxa o timestamp de hoje
    let hoje = new Date().getTime()
    //Puxa o timestamp da data
    let nascimento = new Date(data).getTime()
    //Calcula a idade subtraindo o timestamp da data do de hoje
    //Depois dividimos esses milisegundo pelo qtd de ms em um dia vezes 365.25 (1 ano)
    let idade = (hoje - nascimento) / (86400000 * 365.25)
    //Retorna a idade arredondando para baixo 
    return Math.floor(idade)
}

//Carrega os gráficos da biblioteca em sua versão atual
google.charts.load('current', {'packages':['corechart']});

function criarGrafico(dados, options, id, tipo) {
    //Encontra elemento
    var elemento = document.getElementById(id)
    //Caso não haja dados e seja um gráfico de coluna, é necessário a primeira linha
    if (dados.length === 1 && tipo == "column") dados.push([null,0])
    //Cria visualização de dados do google através de array
    var data = google.visualization.arrayToDataTable(dados)

    //Cria o gráfico de acordo com o parametro tipo
    var chart
    if (tipo == "column") chart = new google.visualization.ColumnChart(elemento)
    else if (tipo == "pizza") chart = new google.visualization.PieChart(elemento)

    //Renderiza o gráfico
    chart.draw(data, options);
}

function gerarDadosGraficos(usuarios, header, campo) {
    //O array inicia com a linha do header
    var array = [header]
    //Busca os dados do campo informado
    var lista = usuarios.map(usuario => usuario[campo])
    //Retona uma lista com valores unicos (sem repetições)
    var valores = [...new Set(lista)]
    //Realiza a contagem percorrendo o array lista e insere a nova linha ao array
    valores.forEach(valor => {
        let contagem = 0
        lista.forEach(dado => {
            if (dado == valor) contagem++
        })
        array.push([valor,contagem])
    })
    return array
}