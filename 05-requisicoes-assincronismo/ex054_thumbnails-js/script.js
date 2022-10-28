function show() {
    let image = document.getElementById('image').files[0];

    let img = document.createElement('img');
    img.src = URL.createObjectURL(image);
    img.width = 200;

    document.getElementById('area').appendChild(img);
}