'use strict'
const tabsArray = Array.from(document.getElementsByClassName('tab')),
      tabContentsArray = Array.from(document.getElementsByClassName('tab__content'));

for (let tabItem of tabsArray) {
  tabItem.addEventListener('click', event => {
    tabsArray.forEach(i => i.classList.remove('tab_active'));
    tabContentsArray.forEach(i => i.classList.remove('tab__content_active'));
    tabItem.classList.add('tab_active');
    tabContentsArray[tabsArray.indexOf(tabItem)].classList.add('tab__content_active');
  });
}