const body = document.querySelector("body");
const button = document.querySelector(".color");
const h1 = document.querySelector("h1");

const r = Math.floor(Math.random() * 256)
const g = Math.floor(Math.random() * 256)
const b = Math.floor(Math.random() * 256)

const randomColor = function () {
    const randomRGB = "rgb(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")"
    body.style.backgroundColor = randomRGB;
    h1.innerText = randomRGB;
}
button.addEventListener("click", randomColor)

