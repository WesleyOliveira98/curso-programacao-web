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