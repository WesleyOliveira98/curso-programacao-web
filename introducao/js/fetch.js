//Listar todos os posts
//GET
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))

//Listar post unico
//GET {id}
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(json => {
        console.log(json)
        document.querySelector(".post .title").textContent = json.title
        document.querySelector(".post .body").textContent = json.body
    })
    .catch(error => console.log(error.message))

//Criando um novo post
//POST
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'teste titulo',
        body: 'teste corpo',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))

//Alterando um post
//PUT
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))

//Alterando somente um campo do post
//PATCH
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error.message))

//Apagando um post
//DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
    .then(response => console.log(response.status))
    .catch(error => console.log(error.message))