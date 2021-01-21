import './styles.css';
import fetchImages from "./js/fetch-images";
import updateGalleryMarkup from "./js/update_gallery-markup";

const refs = {
    galleryRef: document.querySelector(".gallery"),
    formRef: document.querySelector(".search-form"),
};
  
refs.formRef.addEventListener("submit", submitHandler)


function submitHandler(event) {
    event.preventDefault()
    const form = event.currentTarget;
    const imageToFind = form.elements.query.value;
    refs.galleryRef.innerHTML = "";
    form.reset();
    fetchImages(imageToFind).then(updateGalleryMarkup);

}


        
        

