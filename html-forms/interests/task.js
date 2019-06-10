'use strict'
const checkboxes = document.querySelectorAll('label');

//проставление или убирание галочек в дочерних подкатегориях
const switchSubCheck = function(item, checkStatus) {
  const subcategories = item.nextElementSibling.getElementsByTagName('input');
  for (let itemInput of subcategories) {
    itemInput.checked = checkStatus;
  }
};

//Изменение состояния в родительских категориях
const checkParents = function(item, checkStat) {
  if (item.parentElement.closest('ul.interests.interests_active') && item.parentElement.closest('div.interests > ul > li.interest')) {
    if (Array.from(item.parentElement.closest('ul.interests.interests_active').getElementsByTagName('input')).every(elem => elem.checked == true)) {
      item.parentElement.closest('ul.interests.interests_active').previousElementSibling.children[0].checked = true;
      item.parentElement.closest('ul.interests.interests_active').previousElementSibling.children[0].indeterminate = false;
    }
    else if (Array.from(item.parentElement.closest('ul.interests.interests_active').getElementsByTagName('input')).every(elem => elem.checked == false)) {
      item.parentElement.closest('ul.interests.interests_active').previousElementSibling.children[0].checked = false;
      item.parentElement.closest('ul.interests.interests_active').previousElementSibling.children[0].indeterminate = checkStat;
    }
    else {
      item.parentElement.closest('ul.interests.interests_active').previousElementSibling.children[0].indeterminate = checkStat;
    }
    return checkParents(item.parentElement.closest('ul.interests.interests_active'), checkStat);
  }
}

for (let item of checkboxes) {
  item.addEventListener('change', (event) => {
    if (item.nextElementSibling) {
      item.querySelector('input').checked == true ? switchSubCheck(item, true) : switchSubCheck(item, false);
    }
  });

  item.addEventListener('change', (event) => {
    if (item.parentElement) {
      item.querySelector('input').checked == true ? checkParents(item, true) : checkParents(item, false);
    }
  });
}