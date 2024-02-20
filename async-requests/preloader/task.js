const itemsElement = document.getElementById('items');
const loaderElement = document.getElementById('loader');

const generateItems = function (currencies) {
  console.log('Items generation has started');

  if (loaderElement.classList.contains('loader_active')) {
    loaderElement.classList.remove('loader_active');
  }

  itemsElement.innerText = '';

  Object.keys(currencies).forEach((currencyKey) => {
    itemsElement.insertAdjacentHTML('beforeend', `<div class="item"><div class="item__code"> ${currencies[currencyKey].CharCode}</div><div class="item__value">${currencies[currencyKey].Value}</div><div class="item__currency">руб.</div></div>`);
  });

  console.log('Item generation has ended');
};

let Valute = localStorage.getItem('Valute');

if (Valute) {
  Valute = JSON.parse(Valute);

  generateItems(Valute);
}

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === xhr.DONE) {
    console.log('XMLHttpRequest completed successfully');

    Valute = JSON.parse(xhr.responseText).response.Valute;

    localStorage.setItem("Valute", JSON.stringify(Valute));

    generateItems(Valute);
  }
};

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();