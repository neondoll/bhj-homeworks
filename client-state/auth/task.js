const signinElement = document.getElementById('signin');

const welcomeElement = document.getElementById('welcome');
const welcomeUserIdElement = welcomeElement.querySelector('#user_id');

const xhr = new XMLHttpRequest();

const hideSignin = () => (signinElement.classList.remove('signin_active'));
const showSignin = () => (signinElement.classList.add('signin_active'));

const hideWelcome = () => {
  welcomeElement.classList.remove('welcome_active');
  welcomeUserIdElement.innerText = '';
};
const showWelcome = () => {
  welcomeUserIdElement.innerText = localStorage.userId;
  welcomeElement.classList.add('welcome_active');
};

if (localStorage.userId) {
  hideSignin();
  showWelcome();
}

signinElement.querySelector('#signin__form').addEventListener('submit', (event) => {
  event.preventDefault();

  xhr.open('POST', event.target.action);
  xhr.send(new FormData(event.target));

  xhr.responseType = 'json';
  xhr.onload = function () {
    if (xhr.response.error) {
      alert(`Ошибка ${xhr.status}: ${xhr.response.error}`);
    } else if (!xhr.response.success) {
      alert('Неверный логин/пароль');
    } else {
      localStorage.userId = xhr.response.user_id;

      hideSignin();
      showWelcome();
    }
  };
});

welcomeElement.querySelector('#signout__btn').addEventListener('click', () => {
  hideWelcome();
  showSignin();

  localStorage.removeItem('userId');
});