const cookie = document.getElementById("cookie");
const clickCounter = document.getElementById("clicker__counter");

cookie.onclick = function () {
    clickCounter.textContent++;
    (clickCounter.textContent % 2 == 0) ? cookie.width = 200 : cookie.width = 250;
};