'use strict'
const rotators = document.getElementsByClassName('rotator');

for (let rotator of rotators) {
  const rotatorCase = Array.from(rotator.getElementsByClassName('rotator__case'));

  setTimeout(function rotateCases() {
    for (let i = 0; i < rotatorCase.length; i++) {
      setTimeout(function() {
        rotatorCase.forEach(i => i.classList.remove('rotator__case_active'));
        rotatorCase[i].classList.add('rotator__case_active');
        rotatorCase[i].style.color = rotatorCase[i].dataset.color;
      }, rotatorCase[i].dataset.speed);
    }

    setTimeout(rotateCases, rotatorCase.length * 1000);
  }, 0);
}