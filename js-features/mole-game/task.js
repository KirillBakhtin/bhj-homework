function getHole (index) {
    return document.getElementById("hole" + index);
};

const hitCounter = document.getElementById("dead");
const missCounter = document.getElementById("lost")

let counter = 0;
for (let i = counter; i < 9; i++) {
    counter++;
    const hole = getHole(counter);
    hole.onclick = function gotcha () {
        if (hole.className.includes("hole_has-mole")) {
            hitCounter.textContent++;
        } else {
            missCounter.textContent++;
        };
        if (hitCounter.textContent == 10) {
            alert("Поздравляем, ты уничтожил этого надоедливого крота!!");
            hitCounter.textContent = 0;
            missCounter.textContent = 0;
        } else if (missCounter.textContent == 3) {
            alert("Надоедливый крот оказался более ловким, попробуй еще разок!");
            hitCounter.textContent = 0;
            missCounter.textContent = 0;
        }
    }
};

