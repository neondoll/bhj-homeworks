const linkElement = document.getElementById("link");
const timerElement = document.getElementById("timer");
const initialTimerValue = Number(timerElement.textContent);

let timer = initialTimerValue;

const setTimer = (timer) => {
  const date = new Date(0, 0, 0, 0, 0, timer);
  const hours = date.getHours(), minutes = date.getMinutes(), seconds = date.getSeconds()

  timerElement.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
};

setTimer(timer);

setInterval(() => {
  if (timer) {
    timer -= 1;
  } else {
    linkElement.click();

    alert("Вы победили в конкурсе!");

    timer = initialTimerValue;
  }

  setTimer(timer);
}, 1000);