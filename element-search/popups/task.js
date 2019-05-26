'use strict'
const modalMain = document.getElementById("modal_main"),
      modalClose = document.getElementsByClassName("modal__close"),
      modalSuccess = document.getElementById("modal_success");

let modalCloseArray = Array.from(modalClose);
modalMain.classList.add("modal_active");
console.log(modalCloseArray)

for (let element of modalCloseArray) {
    element.onclick = function () {
        console.log(modalCloseArray.indexOf(element))
        if (element.className.includes("show-success")) {
            modalMain.classList.remove("modal_active");
            modalSuccess.classList.add("modal_active");
            console.log("1")    
        } else {
             modalMain.classList.remove("modal_active");
             modalSuccess.classList.remove("modal_active");
             console.log("2")
        }
    }
};

