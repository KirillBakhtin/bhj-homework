"use strict" 

const sizeBtn = document.querySelectorAll('a.font-size');
const bookContent = document.querySelector('.book__content');

for (const btn of sizeBtn) {
    btn.onclick = function() {
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        document.querySelector('.book__content').classList.remove('book_fs-small');
        document.querySelector('.book__content').classList.remove('book_fs-big');
        btn.classList.add('font-size_active');

        if (btn.classList.contains('font-size_small')) {
            bookContent.classList.add('book_fs-small');
        } else if (btn.classList.contains('font-size_big')) {
            bookContent.classList.add('book_fs-big');
        }

        return false;
    }
};