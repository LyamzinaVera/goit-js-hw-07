import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = creatImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup)

function creatImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description}) => {
        return `
       <a class="gallery__item" href="${original}">
            <img 
            class="gallery__image" 
            src="${preview}" 
            alt="${description}" />
       </a>`
    }).join('');
}
  const lightbox = new SimpleLightbox('.gallery a', {
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
    close: true,
    // enableKeyboard: true,
   


});



