import galleryTpl from "../templataes/gallery.hbs";

const refs = {
    galleryRef: document.querySelector(".gallery"),
}

function updateGalleryMarkup(hits) {
     const galleryMarkup = galleryTpl(hits);
        refs.galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);
}

export default updateGalleryMarkup;