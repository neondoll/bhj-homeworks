const content = document.querySelector('.content');

document.forms[0].addEventListener('submit', (event) => {
  event.preventDefault();

  content.innerHTML = '';
  content.innerHTML = content.innerHTML + '<p>Имя: ' + event.target.name.value + '</p>';
  content.innerHTML = content.innerHTML + '<p>Текст: ' + event.target.feedback.value + '</p>';

  event.target.name.value = '';
  event.target.feedback.value = '';
});