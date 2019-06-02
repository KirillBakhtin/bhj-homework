'use strict'
const links = Array.from(document.getElementsByTagName('a')),
      content = document.getElementById('book');

for (let item of links) {

  if (item.closest('.book__control_font-size')) {

    item.addEventListener('click', function(event) {
      event.preventDefault();

      links.forEach(i => {
        i.classList.remove('font-size_active');
        content.classList.remove(`book_fs-${i.dataset.size}`);
      });

      this.classList.add('font-size_active');

      if (this.dataset.size) {
        content.classList.toggle(`book_fs-${this.dataset.size}`);
      }

    });
  }

  if (item.closest('.book__control_background')) {

    item.addEventListener('click', function(event) {
      event.preventDefault();

      links.forEach(i => {
        i.classList.remove('color_active');
        content.classList.remove(`color_${i.dataset.color}`);
      });

      this.classList.add('color_active');

      if (this.dataset.color) {
          content.classList.add(`color_${this.dataset.color}`);
      }

    });
  }

  if (item.closest('.book__control_color')) {

    item.addEventListener('click', function(event) {
      event.preventDefault();

      links.forEach(i => {
        i.classList.remove('color_active');
        content.style.color = 'black';
      });

      this.classList.add('color_active');

      if (this.dataset.color) {
        content.style.color = this.dataset.color;
      }
      
    });
  }
}