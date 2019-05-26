'use strict'
const menuItem = document.querySelectorAll('.menu__item'),
      menuItemArray = Array.from(menuItem),
      menuSub = document.querySelectorAll('.menu_sub'),
      menuSubArray = Array.from(menuSub);

for (let element of menuItemArray) {
  if (element.querySelector('.menu_sub')) {
    element.querySelector('.menu__link').onclick = function() {
      menuSubArray.forEach(e => e.className = 'menu menu_sub');
      element.querySelector('.menu_sub').className = 'menu menu_sub menu_active';
      return false;
    }
  }
}