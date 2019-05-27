'use strict'
const modalMain = document.getElementById("modal_main"),
      modalClose = document.getElementsByClassName("modal__close"),
      modalSuccess = document.getElementById("modal_success"),
      btnSuccess = document.getElementsByClassName("btn_success");

let modalCloseArray = Array.from(modalClose),
    btnSuccessArray = Array.from(btnSuccess);
    
modalMain.classList.add("modal_active");

for (let element of modalCloseArray) {
    element.onclick = function () {
        console.log(modalCloseArray.indexOf(element))
        if (element.className.includes("show-success")) {
            modalMain.classList.remove("modal_active");
            modalSuccess.classList.add("modal_active");  
        } else {
             modalMain.classList.remove("modal_active");
             modalSuccess.classList.remove("modal_active");
        }
    }
};

for (let element of btnSuccessArray) {
    element.onclick = function () {
        modalSuccess.classList.remove("modal_active");
    }
};