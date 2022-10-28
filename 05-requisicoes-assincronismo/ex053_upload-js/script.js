async function send() {
    let file = document.getElementById('item').files[0];

    let body = new FormData();
    body.append('title', 'bla bla bal');
    body.append('arquivo', file);

    let req = await fetch('https://www.meusite.com.br/upload', {
        method: 'POST',
        body: body,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}