Array.from(document.querySelectorAll('.book')).forEach((bookElement) => {
  let size = bookElement.querySelector('.book__control_font-size .font-size_active').dataset.size;
  let textColor = bookElement.querySelector('.book__control_color .color_active').dataset.textColor;
  let bgColor = bookElement.querySelector('.book__control_background .color_active').dataset.bgColor;

  const updateBookClass = function () {
    let bookClass = 'book';

    if (size) {
      bookClass += ` book_fs-${size}`;
    }

    if (textColor) {
      bookClass += ` book_color-${textColor}`;
    }

    if (bgColor) {
      bookClass += ` book_bg-${bgColor}`;
    }

    bookElement.setAttribute('class', bookClass);
  }

  updateBookClass();

  Array.from(bookElement.querySelectorAll('.book__control')).forEach((bookControlElement) => {
    const colorArray = Array.from(bookControlElement.querySelectorAll('.color'));
    const fontSizeArray = Array.from(bookControlElement.querySelectorAll('.font-size'));

    switch (true) {
      case bookControlElement.classList.contains('book__control_font-size'):
        fontSizeArray.forEach((fontSizeElement, fontSizeIndex) => {
          fontSizeElement.addEventListener("click", function (event) {
            event.preventDefault();

            for (let index = 0; index < fontSizeArray.length; index++) {
              if (index === fontSizeIndex) {
                if (!fontSizeArray[index].classList.contains('font-size_active')) {
                  fontSizeArray[index].classList.add('font-size_active');
                }
              } else {
                if (fontSizeArray[index].classList.contains('font-size_active')) {
                  fontSizeArray[index].classList.remove('font-size_active');
                }
              }
            }

            size = fontSizeElement.dataset.size;

            updateBookClass();
          });
        });
        break;
      case bookControlElement.classList.contains('book__control_color'):
        colorArray.forEach((colorElement, colorIndex) => {
          colorElement.addEventListener("click", function (event) {
            event.preventDefault();

            for (let index = 0; index < colorArray.length; index++) {
              if (index === colorIndex) {
                if (!colorArray[index].classList.contains('color_active')) {
                  colorArray[index].classList.add('color_active');
                }
              } else {
                if (colorArray[index].classList.contains('color_active')) {
                  colorArray[index].classList.remove('color_active');
                }
              }
            }

            textColor = colorElement.dataset.textColor;

            updateBookClass();
          });
        });
        break;
      case bookControlElement.classList.contains('book__control_background'):
        colorArray.forEach((colorElement, colorIndex) => {
          colorElement.addEventListener("click", function (event) {
            event.preventDefault();

            for (let index = 0; index < colorArray.length; index++) {
              if (index === colorIndex) {
                if (!colorArray[index].classList.contains('color_active')) {
                  colorArray[index].classList.add('color_active');
                }
              } else {
                if (colorArray[index].classList.contains('color_active')) {
                  colorArray[index].classList.remove('color_active');
                }
              }
            }

            bgColor = colorElement.dataset.bgColor;

            updateBookClass();
          });
        });
        break;
    }
  });
});