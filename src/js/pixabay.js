

import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const list = document.querySelector('.todo-list');
const input = document.querySelector('.input-text');

const form = document.querySelector('.main-form');

const btn = document.querySelector('.btn');
const load = document.querySelector('.loading')


const KEY = '42475254-bcb32dbc18887673c1cce19dd';
const BASE_URI = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';




load.style.display = 'none'
function hadler(event) {
  
  event.preventDefault();
  load.style.display = 'inline-block'
 
  const QUERY = input.value.trim();
  const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH} `;
  fetch(LINK)
    .then(res => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      
      return res.json();
    })
    .then(data => {
      console.log(data);
      const images = data.hits;
      if (images.length === 0) {
        return hadlerError();
      } else {
        list.innerHTML = images
          .map(
            ({
              webformatURL,
              likes,
              views,
              comments,
              downloads,
              largeImageURL,
              tags,
            }) => {
              return `<li class="photo-main-list">
              
   <a class="galery-link"  href="${largeImageURL}">
   <img class="photo" width="360" height="200" src="${webformatURL}" alt="${tags}" />
   </a>
  
      <ul class='list-menu'>
        <li class='description'>
          <h3 class='title'>Likes</h3>
          <p class='datas'>${likes}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Views</h3>
          <p class='datas'>${views}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Comments</h3>
          <p class='datas'>${comments}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Downloads</h3>
          <p class='datas'>${downloads}</p>
        </li>
      </ul>
    </li>
`;
            }
          )
          .join('');
      }
    })
    .catch(error => console.log(error))
    .finally(()=>{
      setTimeout(()=>{
        load.style.display = 'none'
      },600)
      
    })
    


  input.value = '';
  lightbox.refresh()

 
  
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
  
    captionDelay: 250,
 
  });




//   <a class="galery-link" href="${largeImageURL}">
//   <img class='photo' width="360" height="200" src="${webformatURL}" alt="" />
//   </a>

//  <div class="gallery">
// <a href="images/image1.jpg"><img src="images/thumbs/thumb1.jpg" alt="" title=""/></a>
// <a href="images/image2.jpg"><img src="images/thumbs/thumb2.jpg" alt="" title="Beautiful Image"/></a>
// </div>
