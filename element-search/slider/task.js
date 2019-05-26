const arrow = document.getElementsByClassName("slider__arrow"),
      leftArrow = document.getElementsByClassName("slider__arrow_prev"),
      rightArrow = document.getElementsByClassName("slider__arrow_next"),
      sliderItem = document.getElementsByClassName("slider__item");

const sliderItemArray = Array.from(sliderItem),
      arrowArray = Array.from(arrow);
console.log(arrowArray);
let currentArrayIndex = 0;

for (let element of arrowArray ) {
    if (element.className.includes("slider__arrow_next")) {
        element.onclick = function() {
            sliderItemArray[currentArrayIndex].classList.remove("slider__item_active");
            currentArrayIndex++; 
            if (currentArrayIndex === sliderItemArray.length) {
                currentArrayIndex = 0;
            };
            sliderItemArray[currentArrayIndex].classList.add("slider__item_active");    
        }
    };
    if (element.className.includes("slider__arrow_prev")) {
        element.onclick = function() {
            sliderItemArray[currentArrayIndex].classList.remove("slider__item_active");
            currentArrayIndex--;
            if (currentArrayIndex < 0) {
                currentArrayIndex = sliderItemArray.length - 1;
            };
            sliderItemArray[currentArrayIndex].classList.add("slider__item_active");
        }
    }
}      

