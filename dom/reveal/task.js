const viewportHeight = window.innerHeight;

window.addEventListener('scroll', function (event) {
  Array.from(document.querySelectorAll('.reveal')).forEach((revealElement) => {
    const revealElementRect = revealElement.getBoundingClientRect();

    if (revealElementRect.top > 0 && revealElementRect.top + revealElementRect.height < viewportHeight) {
      if (!revealElement.classList.contains('reveal_active')) {
        revealElement.classList.add('reveal_active');
      }
    } else {
      if (revealElement.classList.contains('reveal_active')) {
        revealElement.classList.remove('reveal_active');
      }
    }
  });
});