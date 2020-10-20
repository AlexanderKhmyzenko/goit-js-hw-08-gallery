const gallery = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const buttonModalClose = document.querySelector('.js-lightbox__button');


gallery.addEventListener("click", onClick);
buttonModalClose.addEventListener('click', closeModal);

function onClick(evt) {
    if (evt.target.nodeName !== 'UL') {
        return;
    };
    modal.classList.add('is-open');
};

function closeModal(evt) {
  modal.classList.remove('is-open');  
}