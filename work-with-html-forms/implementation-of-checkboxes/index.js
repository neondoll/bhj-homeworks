const mainCheckbox = document.getElementById('main-checkbox');
const subCheckboxes = Array.from(document.querySelectorAll('.sub-checkbox'));

mainCheckbox.addEventListener('change', function (event) {
  subCheckboxes.forEach((subCheckbox) => {
    subCheckbox.checked = event.target.checked;
  });
});

subCheckboxes.forEach((subCheckbox) => {
  subCheckbox.addEventListener('change', function (event) {
    if (event.target.checked) {
      let mainCheckboxChecked = true;

      for (let index = 0; index < subCheckboxes.length; index++) {
        mainCheckboxChecked = mainCheckboxChecked && subCheckboxes[index].checked;
      }

      mainCheckbox.checked = mainCheckboxChecked;
    } else {
      mainCheckbox.checked = false;
    }
  });
});