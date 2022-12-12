// Обрати внимание на то, что изображение обернуто в ссылку, а значит при клике по умолчанию пользователь будет перенаправлен на другую страницу. Запрети это поведение по умолчанию.

// Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод для программного закрытия модального окна.

// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// // Cтворив змінну для загального контейнера для галереї
// const galleryContainer = document.querySelector('.gallery');

// // Cтворив змінну для галереї
// const gallery = createGalleryMarkup(galleryItems);

// // Додав слухач на весь контейнер з зображеннями.
// galleryContainer.addEventListener('click', onGalleryClick)

// // Створив розмітку в HTML і
// function createGalleryMarkup(galleryItems) {
//    return galleryItems.map(({original, preview, description}) => {
//       return `
//       <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//           <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//           />
//         </a>
//       </div>
//       `;

//       })
//       .join ('');
// };

// // "Відправив" розмітку з зображеннями в HTML.
// galleryContainer.insertAdjacentHTML('beforeend', gallery);

// //Створив функцію яка забороняє дефолтне завантаження і яка відслідковує натискання саме на зображення, а не ще де-небудь.
// function onGalleryClick(event){

//    event.preventDefault();
//    const galleryItem = event.target.classList.contains('gallery__link');

//     // вказую библиотеці basicLightbox звідкіля брати велике зображення при відкритті модального вікна, яке вже вбудоване в скрипт

//     const selectedImage = event.target.getAttribute('data-source');
//     const imageInstance = basicLightbox.create(`<img src="${selectedImage}"  width="800" height="600">`);

//     console.log(imageInstance)

//     // Вказую запуститися
//     imageInstance.show();

// };

import { galleryItems } from "./gallery-items.js";

const galleryContainer = document.querySelector(".gallery");
const gallery = createGalleryMarkup(galleryItems);
galleryContainer.addEventListener("click", onGalleryClick);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", gallery);
function onGalleryClick(event) {
   event.preventDefault();
   
  const galleryItem = event.target.classList.contains("gallery__link");
  const selectedImage = event.target.getAttribute("data-source");
  const imageInstance = basicLightbox.create(
    `<img src="${selectedImage}"  width="800" height="600">`
  );

  imageInstance.show();
}
