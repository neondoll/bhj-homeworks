Array.from(document.querySelectorAll(".tabs")).forEach((tabsElement) => {
  const arrayTabElements = Array.from(tabsElement.querySelectorAll(".tab"));
  const arrayTabContentElements = Array.from(tabsElement.querySelectorAll(".tab__content"));

  arrayTabElements.forEach((tabElement, tabIndex) => {
    tabElement.addEventListener("click", (event) => {
      if (!event.target.classList.contains("tab_active")) {
        for (let index = 0; index < arrayTabElements.length; index++) {
          if (index === tabIndex) {
            arrayTabElements[index].classList.add("tab_active");
            arrayTabContentElements[index].classList.add("tab__content_active");
          } else if (arrayTabElements[index].classList.contains("tab_active")) {
            arrayTabElements[index].classList.remove("tab_active");
            arrayTabContentElements[index].classList.remove("tab__content_active");
          }
        }
      }
    });
  });
});