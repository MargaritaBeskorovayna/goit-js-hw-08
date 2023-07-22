// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
const galleryItem= galleryItems.map(({ preview,description,original})=>{
    return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" 
    src="${preview}"
    data-source="${original}"
     alt="${description}" width=300px>
    </a></li>`
    }).join("");
    const gallery = document.querySelector(".gallery");
    gallery.insertAdjacentHTML("beforeend",galleryItem);
    gallery.addEventListener("click",(event)=>{
        event.preventDefault()})
    
    gallery.addEventListener("click",onClick);
    function onClick(event){
        const originalImg= event.target.dataset.source;
         const instance = basicLightbox.create(`
            <img src="${originalImg}" width="800" height="600">`,
            {
            onShow:() => {document.addEventListener('keydown', closeModal);},
            onClose:() => {document.removeEventListener('keydown', closeModal);},
            });
            instance.show();
             function closeModal(event) {
               if (event.code !== 'Escape') {
                   return;
               } 
                 instance.close(); }}