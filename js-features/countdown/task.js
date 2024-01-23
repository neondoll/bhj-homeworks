const linkElement = document.getElementById("link");
const timerElement = document.getElementById("timer");
const initialTimerValue = Number(timerElement.textContent);

let timer = initialTimerValue;

const setTimer = function (timer) {
  const date = new Date(0, 0, 0, 0, 0, timer);
  const hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds()

  timerElement.textContent = `${hours < 10 ? ("0" + hours) : hours}:${minutes < 10 ? ("0" + minutes) : minutes}:${seconds < 10 ? ("0" + seconds) : seconds}`;
};

setTimer(timer);

setInterval(function () {
  if (timer) {
    timer -= 1;
  } else {
    linkElement.click();

    alert("Вы победили в конкурсе!");

    timer = initialTimerValue;
  }

  setTimer(timer);
}, 1000);