Array.from(document.querySelectorAll('.rotator')).forEach((rotatorElement) => {
  const rotatorCaseArray = Array.from(rotatorElement.querySelectorAll('.rotator__case'));
  let currentRotatorCase = rotatorCaseArray.length - 1;
  let currentSpeed = Number(rotatorCaseArray[currentRotatorCase].dataset.speed);

  const handler = function () {

    if (rotatorCaseArray[currentRotatorCase].classList.contains('rotator__case_active')) {
      rotatorCaseArray[currentRotatorCase].classList.remove('rotator__case_active');
      rotatorCaseArray[currentRotatorCase].style.color = '';
    }

    if (currentRotatorCase === rotatorCaseArray.length - 1) {
      currentRotatorCase = 0;
    } else {
      currentRotatorCase++;
    }

    if (!rotatorCaseArray[currentRotatorCase].classList.contains('rotator__case_active')) {
      rotatorCaseArray[currentRotatorCase].classList.add('rotator__case_active');
      rotatorCaseArray[currentRotatorCase].style.color = rotatorCaseArray[currentRotatorCase].dataset.color;

      if (currentSpeed !== Number(rotatorCaseArray[currentRotatorCase].dataset.speed)) {
        clearInterval(timerId);
        currentSpeed = Number(rotatorCaseArray[currentRotatorCase].dataset.speed);

        timerId = setInterval(handler, currentSpeed);
      }
    }
  };

  let timerId = setInterval(handler, currentSpeed);
});