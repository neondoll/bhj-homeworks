const starElements = document.getElementsByClassName("star");

Array.from(starElements).forEach((starElement, starIndex) => {
  starElement.addEventListener("click", () => {
    for (let index = 0; index < starElements.length; index++) {
      if (index > starIndex) {
        if (starElements[index].classList.contains("star_active")) {
          starElements[index].classList.remove("star_active");
        }
      } else {
        if (!starElements[index].classList.contains("star_active")) {
          starElements[index].classList.add("star_active");
        }
      }
    }
  });
});