function digitou(e) {
    if (e.keyCode == 13 && e.ctrlKey == true) {
        let text = document.getElementById("campo").value;

        console.log(text);
    }
}
