const content = document.querySelector('.content');
const form = document.forms[0];

const genreOptions = [
  {label: 'Драма', value: 'drama'},
  {label: 'Комедия', value: 'comedy'},
  {label: 'Фантастика', value: 'sci-fi'}
];

form.genre.innerHTML = '';

genreOptions.forEach((option) => {
  form.genre.innerHTML = form.genre.innerHTML + `<option value="${option.value}">${option.label}</option>`;
});

form.genre.value = '';

form.addEventListener('submit', (event) => {
  event.preventDefault();

  content.innerHTML = '';
  content.innerHTML = content.innerHTML + '<p>Название фильма: ' + event.target.name.value + '</p>';
  content.innerHTML = content.innerHTML + '<p>Жанр: ' + event.target.genre.options[event.target.genre.selectedIndex].text + '</p>';

  event.target.name.value = '';
  event.target.genre.value = '';
});