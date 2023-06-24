import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = creatImgMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup)

function creatImgMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li class="gallery__item">
           <a class="gallery__link" href="large-image.jpg">
             <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"/>
           </a>
       </li> `
    }).join('');

} 

galleryContainer.addEventListener('click', onGallaryContainerClick);

function onGallaryContainerClick(evt) {
    evt.preventDefault();
    const imgSrc = evt.target.dataset.source;
    console.log(imgSrc);

    const instance = basicLightbox.create(`
    <img     
    src="${imgSrc}"
    >
    `);
    instance.show();
}




