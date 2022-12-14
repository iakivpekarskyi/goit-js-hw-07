import { galleryItems } from "./gallery-items.js";
// Change code below this line


// Посмотри в документации секцию «Options» и добавь отображение подписей к изображениям из атрибута alt. Пусть подпись будет снизу и появляется через 250 миллисекунд после открытия изображения.

const galleryContainer = document.querySelector(".gallery");
const gallery = createGalleryMarkup(galleryItems);

galleryContainer.addEventListener("click", onGalleryClick);
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
 </a>
      `;
    })
    .join("");
}

galleryContainer.insertAdjacentHTML("beforeend", gallery);
function onGalleryClick(event) {
  event.preventDefault();
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: 'alt',
});

