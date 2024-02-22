const subscribeModalElement = document.getElementById('subscribe-modal');

const getCookie = (name) => {
  const value = "; " + document.cookie;

  let parts = value.split("; " + name + "=");

  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

if (getCookie('subscribe-modal-close') === 'true') {
  if (subscribeModalElement.classList.contains('modal_active')) {
    subscribeModalElement.classList.remove('modal_active');
  }
} else {
  if (!subscribeModalElement.classList.contains('modal_active')) {
    subscribeModalElement.classList.add('modal_active');
  }
}

Array.from(subscribeModalElement.querySelectorAll('.modal__close')).forEach((modalCloseElement) => {
  modalCloseElement.addEventListener('click', () => {
    if (subscribeModalElement.classList.contains('modal_active')) {
      subscribeModalElement.classList.remove('modal_active');
    }

    document.cookie = 'subscribe-modal-close=true';
  });
});