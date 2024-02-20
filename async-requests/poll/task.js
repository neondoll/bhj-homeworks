const pollAnswersElement = document.getElementById('poll__answers');
const pollTitleElement = document.getElementById('poll__title');

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === xhr.DONE) {
    const response = JSON.parse(xhr.responseText);

    pollTitleElement.innerText = response.data.title;
    pollAnswersElement.innerHTML = response.data.answers
      .map((answer) => `<button class="poll__answer">${answer}</button>`)
      .join('');

    Array.from(pollAnswersElement.querySelectorAll('.poll__answer')).forEach((pollAnswerElement, pollAnswerIndex) => {
      pollAnswerElement.addEventListener('click', function () {
        alert('Спасибо, ваш голос засчитан!');

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
          if (xhr.readyState === xhr.DONE) {
            const response = JSON.parse(xhr.responseText);

            let allVotes = response.stat.reduce((accumulator, item) => accumulator + item.votes, 0);

            pollAnswersElement.innerHTML = response.stat
              .map((item) => `<div class="poll__answer">${item.answer}: <b>${(item.votes / allVotes * 100).toFixed(2)}%</b></div>`)
              .join('');
          }
        };

        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.send(`vote=${response.id}&answer=${pollAnswerIndex}`);
      });
    });
  }
};

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();