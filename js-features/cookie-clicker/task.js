const clickerCounterElement = document.getElementById("clicker__counter");
const clickerSpeedElement = document.getElementById("clicker__speed");
const cookieElement = document.getElementById("cookie");

let clickerCounter = Number(clickerCounterElement.textContent);
let dateStart = Date.now();

cookieElement.onclick = () => {
  const dateEnd = Date.now();

  clickerCounter++;

  clickerCounterElement.textContent = String(clickerCounter);
  clickerSpeedElement.textContent = (1 / ((dateEnd - dateStart) / 1000)).toFixed(2);

  if (clickerCounter % 2) {
    cookieElement.width *= 1.25;
  } else {
    cookieElement.width /= 1.25;
  }

  dateStart = dateEnd;
};