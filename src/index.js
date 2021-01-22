import './styles.css';
import loadService from "./js/load-service";
import updateGalleryMarkup from "./js/update_gallery-markup";

const refs = {
    galleryRef: document.querySelector(".gallery"),
    formRef: document.querySelector(".search-form"),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
};
  console.log(refs.loadMoreBtn)
refs.formRef.addEventListener("submit", submitHandler)


function submitHandler(event) {
    event.preventDefault()
    const form = event.currentTarget;
    loadService.query = form.elements.query.value;
    refs.galleryRef.innerHTML = "";
    form.reset();
    loadService.resetPage();
    refs.loadMoreBtn.classList.add("is-hidden");
    loadService.fetchImages().then(hits => {
        updateGalleryMarkup(hits);
        refs.loadMoreBtn.classList.remove("is-hidden");
        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: "smooth",
        });
    });
    };



refs.loadMoreBtn.addEventListener("click", loadMoreBtnHandler);


function loadMoreBtnHandler() {
    loadService.fetchImages().then(hits => {
        updateGalleryMarkup(hits);
        refs.loadMoreBtn.classList.remove("is-hidden");
        window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: "smooth",
        });
    });
    };
