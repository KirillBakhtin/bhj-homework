
function countDown () {
    let secondsLeft = document.getElementById("timer");
    if (secondsLeft.textContent > 0) {
        secondsLeft.textContent--;
    }else {
        alert("Вы победили в конкурсе!");
    }      
};

setInterval(countDown, 1000);
