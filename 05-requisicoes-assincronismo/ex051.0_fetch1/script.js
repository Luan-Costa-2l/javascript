function loadPosts() {
    document.getElementById('posts').innerHTML = 'Carregando...';

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function(result) {
            return result.json();
        })
        .then(function(json) {
            buildingBlog(json);
        })
        .catch(function(error) {
            console.log('Deu erro');
        });
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