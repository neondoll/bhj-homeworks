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

  xhr.onload = function () {
    const response = JSON.parse(xhr.response);

    if (response.error) {
      alert(`Ошибка ${xhr.status}: ${response.error}`);
    } else if (!response.success) {
      alert('Неверный логин/пароль');
    } else {
      localStorage.userId = response.user_id;

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