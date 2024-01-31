Array.from(document.querySelectorAll(".dropdown")).forEach((dropdownElement) => {
  const dropdownListElement = dropdownElement.querySelector(".dropdown__list");
  const dropdownValueElement = dropdownElement.querySelector(".dropdown__value");

  dropdownValueElement.addEventListener("click", (event) => {
    if (dropdownListElement.classList.contains("dropdown__list_active")) {
      dropdownListElement.classList.remove("dropdown__list_active");
    } else {
      dropdownListElement.classList.add("dropdown__list_active");
    }
  });

  Array.from(dropdownListElement.querySelectorAll(".dropdown__link")).forEach((dropdownLinkElement) => {
    dropdownLinkElement.addEventListener("click", (event) => {
      event.preventDefault();
      dropdownValueElement.textContent = event.target.textContent;
      dropdownListElement.classList.remove("dropdown__list_active");
    });
  });
});