const progressElement = document.getElementById('progress');

document.forms.form.addEventListener('submit', function (event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.upload.onloadstart = function () {
    progressElement.value = 0.0;
  };

  xhr.upload.onprogress = function (event) {
    progressElement.value = event.loaded / event.total;
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === xhr.DONE) {
      alert(JSON.parse(xhr.responseText).message);
    }
  };

  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);
  xhr.send(new FormData(event.target));
});

