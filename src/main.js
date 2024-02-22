import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import createMurkup from './js/render-function';
import getFotos from './js/pixabay';

const list = document.querySelector('.todo-list');
const input = document.querySelector('.input-text');

const form = document.querySelector('.main-form');

const load = document.querySelector('.loading');

load.style.display = 'none';

function hadler(event) {
  event.preventDefault();
  list.style.marginTop = '60px';

  load.style.display = 'inline-block';

  getFotos(input.value)
    .then(data => {
      console.log(data);
      const images = data.hits;
      if (images.length === 0) {
        return hadlerError();
      } else {
        list.innerHTML = createMurkup(images);
      }
    })
    .catch(error => console.log(error))
    .finally(() => {
      setTimeout(() => {
        load.style.display = 'none';
        list.style.marginTop = '20px';
      }, 600);
    });

  input.value = '';
  lightbox.refresh();
}

form.addEventListener('submit', hadler);

function hadlerError() {
  iziToast.error({
    maxWidth: '432px',
    messageSize: '16px',
    titleColor: ' #fafafb',
    messageColor: '#fff',
    message: `Sorry, there are no images matching your search query. Please try again!`,
    closeOnEscape: true,
    position: 'topRight',
    backgroundColor: '#ed6f7c',
  });
}

const lightbox = new SimpleLightbox('.todo-list a.galery-link', {
    captionsData: "alt",
    captionDelay:250,
});
