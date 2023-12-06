setInterval(function () {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
}, 1000);

const element = document.getElementsByClassName("bar");
for (let i = 0; i < element.length; i++) {
    element[i].style.backgroundColor = "blue"
    element[i].style.fontSize = "30px"
    element[i].style.color = "white"
}

const collection = document.getElementsByClassName("container");
for (let i = 0; i < element.length; i++) {
    collection[i].style.backgroundColor = "black"
}

const farm = document.getElementsByClassName("img-container")
for (let i = 0; i < element.length; i++) {
    farm[i].style.color = "black"
    farm[i].style.fontSize = "20px"
}

const words = document.getElementsByClassName("achievement")
for (let i = 0; i < element.length; i++) {
    words[i].style.color = "aqua"
}


