'use strict'
const dropdownMenu = document.getElementsByClassName('dropdown');

for (let item of dropdownMenu) {
  const dropdownList = item.getElementsByClassName('dropdown__list').item(0),
        dropdownValue = item.getElementsByClassName('dropdown__value').item(0),
        dropdownItems = item.getElementsByClassName('dropdown__item');

  dropdownValue.addEventListener('click', evt => {
    evt.preventDefault();
    dropdownList.classList.add('dropdown__list_active');
  });

  for (let dropdownItem of dropdownItems) {
    const dropdownItemLink = dropdownItem.getElementsByTagName('a').item(0);
    
    dropdownItemLink.addEventListener('click', evt => {
      evt.preventDefault();
      dropdownList.className = 'dropdown__list';
    });

    dropdownItemLink.addEventListener('click', evt => {
      evt.preventDefault();
      dropdownValue.textContent = dropdownItem.textContent;
    });
  }
}