const bodyElement = document.querySelector("body");

document.getElementById("checkbox").addEventListener("click", (event) => {
  if (event.target.checked) {
    bodyElement.classList.add("light-mode");
  } else {
    bodyElement.classList.remove("light-mode");
  }
});