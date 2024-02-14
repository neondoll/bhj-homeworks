const hasTooltipArray = Array.from(document.getElementsByClassName('has-tooltip'));

hasTooltipArray.forEach((hasTooltipElement, hasTooltipIndex) => {
  const newTooltipElement = document.createElement('div');
  newTooltipElement.classList.add('tooltip');
  newTooltipElement.innerText = hasTooltipElement.getAttribute('title');

  hasTooltipElement.insertAdjacentElement('afterend', newTooltipElement);

  hasTooltipElement.addEventListener('click', function (event) {
    event.preventDefault();

    const needAddTooltip = !newTooltipElement.classList.contains('tooltip_active');

    Array.from(document.getElementsByClassName('tooltip')).forEach((tooltipElement) => {
      if (tooltipElement.classList.contains('tooltip_active')) {
        tooltipElement.classList.remove('tooltip_active');
      }
    });

    if (needAddTooltip) {
      newTooltipElement.classList.add('tooltip_active');

      const hasTooltipRect = hasTooltipElement.getBoundingClientRect();
      const newTooltipRect = newTooltipElement.getBoundingClientRect();

      switch (hasTooltipElement.dataset.position) {
        case 'bottom':
          newTooltipElement.style.top = hasTooltipRect.bottom + 'px';
          newTooltipElement.style.left = (hasTooltipRect.left + (hasTooltipRect.width / 2) - (newTooltipRect.width / 2)) + 'px';
          break;
        case 'left':
          newTooltipElement.style.top = (hasTooltipRect.top + (hasTooltipRect.height / 2) - (newTooltipRect.height / 2)) + 'px';
          newTooltipElement.style.left = (hasTooltipRect.left - newTooltipRect.width) + 'px';
          break;
        case 'right':
          newTooltipElement.style.top = (hasTooltipRect.top + (hasTooltipRect.height / 2) - (newTooltipRect.height / 2)) + 'px';
          newTooltipElement.style.left = hasTooltipRect.right + 'px';
          break
        case 'top':
          newTooltipElement.style.top = (hasTooltipRect.top - newTooltipRect.height) + 'px';
          newTooltipElement.style.left = (hasTooltipRect.left + (hasTooltipRect.width / 2) - (newTooltipRect.width / 2)) + 'px';
          break;
        default:
          newTooltipElement.style.top = hasTooltipRect.bottom + 'px';
          newTooltipElement.style.left = hasTooltipRect.left + 'px';
          break;
      }
    }
  });
});