console.log("hello");

const containerNext = document.getElementById ("containerNext");
const next = document.getElementById("next");

next.addEventListener ("click", function () {
    this.innerHTML = "Ckick for Next Color"
    containerNext.style.backgroundColor = "red"
    console.log("click next color")
});