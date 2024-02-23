const subscribeModalElement = document.getElementById('subscribe-modal');

const getCookie = (name) => {
  const value = "; " + document.cookie;

  let parts = value.split("; " + name + "=");

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

if (getCookie('subscribe-modal-close') === 'true' && subscribeModalElement.classList.contains('modal_active')) {
  subscribeModalElement.classList.remove('modal_active');
} else if (!subscribeModalElement.classList.contains('modal_active')) {
  subscribeModalElement.classList.add('modal_active');
}

subscribeModalElement.querySelector('.modal__close').addEventListener('click', () => {
  if (subscribeModalElement.classList.contains('modal_active')) {
    subscribeModalElement.classList.remove('modal_active');
  }

  document.cookie = 'subscribe-modal-close=true';
});