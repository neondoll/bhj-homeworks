const tasksFormElement = document.forms.tasks__form;
const tasksListElement = document.getElementById('tasks__list');

tasksFormElement.addEventListener('submit', function (event) {
  event.preventDefault();

  if (event.target.task__input.value !== '') {
    const newTaskElement = document.createElement('div');
    newTaskElement.classList.add('task');

    const newTaskTitleElement = document.createElement('div');
    newTaskTitleElement.classList.add('task__title');
    newTaskTitleElement.innerText = event.target.task__input.value;

    const newTaskRemoveElement = document.createElement('a');
    newTaskRemoveElement.classList.add('task__remove');
    newTaskRemoveElement.setAttribute('href', '#');
    newTaskRemoveElement.innerHTML = '&times;';
    newTaskRemoveElement.addEventListener('click', function (event) {
      event.preventDefault();

      newTaskElement.remove();
    });

    newTaskElement.appendChild(newTaskTitleElement);
    newTaskElement.appendChild(newTaskRemoveElement);
    tasksListElement.appendChild(newTaskElement);

    event.target.task__input.value = '';
  }
});