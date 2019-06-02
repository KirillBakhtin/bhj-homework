'use strict'
const revealBlocks = document.getElementsByClassName('reveal'),
      viewPortHeight = window.innerHeight;

window.addEventListener('scroll', function(event) {
  for (let item of revealBlocks) {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < viewPortHeight && itemTop > 0) {
      item.classList.add('reveal_active');
    }
    else {
      item.classList.remove('reveal_active');
    }
  }
});