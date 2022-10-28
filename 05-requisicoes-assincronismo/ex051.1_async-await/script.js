/*
let loadPosts = async () => {
    ...
}
*/

// async e await = espera o resultado para prosseguir
async function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    buildingBlog(json);
}

function buildingBlog(list) {
    let html = '';

    for(let i in list) {
        html += `<h3>${list[i].title}</h3>`;
        html += list[i].body +'<br>';
        html += '<hr>';
    }

    document.getElementById('posts').innerHTML = html;

}