const deadElement = document.getElementById("dead");
const lostElement = document.getElementById("lost");

const getHole = (index) => document.getElementById(`hole${index}`);

let dead = Number(deadElement.textContent);
let lost = Number(lostElement.textContent);

const drawStatus = () => {
  deadElement.textContent = String(dead);
  lostElement.textContent = String(lost);
};
const gameOver = () => {
  alert(dead === 10 ? "Победа!" : "Поражение!");

  dead = lost = 0;

  drawStatus();
};

for (let index = 1; index <= 9; index++) {
  getHole(index).onclick = function () {
    if (getHole(index).classList.contains("hole_has-mole")) {
      dead++;
    } else {
      lost++;
    }

    drawStatus();

    if (dead === 10 || lost === 5) {
      gameOver();
    }
  };
}