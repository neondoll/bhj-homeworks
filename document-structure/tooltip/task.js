const hasTooltipArray = Array.from(document.getElementsByClassName('has-tooltip'));

hasTooltipArray.forEach((hasTooltipElement, hasTooltipIndex) => {
  let style = '';

  if (hasTooltipElement.dataset.position) {
    style = hasTooltipElement.dataset.position + ':0';
  }

  hasTooltipElement.insertAdjacentHTML('beforeEnd', `<div class="tooltip" style="${style}">` + hasTooltipElement.getAttribute('title') + '</div>');

  hasTooltipElement.addEventListener('click', function (event) {
    event.preventDefault();

    const tooltipElement = event.target.querySelector('.tooltip');

    if (tooltipElement.classList.contains('tooltip_active')) {
      tooltipElement.classList.remove('tooltip_active');
    } else {
      for (let index = 0; index < hasTooltipArray.length; index++) {
        const element = hasTooltipArray[index].querySelector('.tooltip');

        if (index === hasTooltipIndex) {
          element.classList.add('tooltip_active');
        } else {
          if (element.classList.contains('tooltip_active')) {
            element.classList.remove('tooltip_active');
          }
        }
      }
    }
  });
});