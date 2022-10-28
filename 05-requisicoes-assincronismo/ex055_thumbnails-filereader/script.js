function show() {
    let reader = new FileReader();
    let image = document.getElementById('image').files[0];

    reader.onload = function() {
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 200;

        document.getElementById('area').appendChild(img);
    }

    reader.readAsDataURL(image);
}