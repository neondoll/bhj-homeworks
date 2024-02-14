const tasksFormElement = document.forms.tasks__form;
const tasksInputElement = tasksFormElement.task__input;
const tasksListElement = document.getElementById('tasks__list');

tasksFormElement.addEventListener('submit', function (event) {
  event.preventDefault();

  const tasksInputValue = tasksInputElement.value.trim();

  if (tasksInputValue !== '') {
    const newTaskElement = document.createElement('div');
    newTaskElement.classList.add('task');
    tasksListElement.appendChild(newTaskElement);

    newTaskElement.insertAdjacentHTML('afterbegin', `<div class="task__title">${tasksInputValue}</div>`);

    const newTaskRemoveElement = document.createElement('a');
    newTaskRemoveElement.classList.add('task__remove');
    newTaskRemoveElement.href = '#';
    newTaskRemoveElement.innerHTML = '&times;';
    newTaskElement.appendChild(newTaskRemoveElement);

    newTaskRemoveElement.addEventListener('click', function (event) {
      event.preventDefault();

      newTaskElement.remove();
    });
  }

  tasksInputElement.value = '';
});