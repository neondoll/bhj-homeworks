const indicatorElement = document.querySelector(".indicator");
const volumeRectElements = document.getElementsByClassName("volume-rect");

let indicator = Number(indicatorElement.textContent);

document.querySelector(".volume-down").addEventListener("click", (event) => {
  if (indicator > 0) {
    indicator--;
    indicatorElement.textContent = String(indicator);
    volumeRectElements[indicator].classList.remove("volume-rect__active");
  }
});

document.querySelector(".volume-up").addEventListener("click", (event) => {
  if (indicator < volumeRectElements.length) {
    indicator++;
    indicatorElement.textContent = String(indicator);
    volumeRectElements[indicator - 1].classList.add("volume-rect__active");
  }
});