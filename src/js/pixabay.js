import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const list = document.querySelector('.todo-list')
const input = document.querySelector('.input-text')

const form = document.querySelector('.main-form')

const btn = document.querySelector('.btn')

const KEY ='42475254-bcb32dbc18887673c1cce19dd'
const BASE_URI ='https://pixabay.com/api/'
const IMAGE_TYPE = 'photo'
const ORIENTATION = 'horizontal'
const SAFESEARCH = 'true'






function hadler(event){
event.preventDefault()
    const QUERY = input.value.trim()
const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH} `
fetch(LINK)
.then(res =>{
    if(!res.ok){
     throw new Error(res.status)
     
    }
    return res.json()
})
.then(data =>{
  console.log(data);
    const images = data.hits
    if(images.length === 0) {
    return hadlerError()
    } else{ list.innerHTML = images.map(({webformatURL,likes,views,comments,downloads})=>{
      return  `<li class="photo-main-list">
      <img class='photo' width="360" height="200" src="${webformatURL}" alt="" />
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
`
}).join('')}
   
})
.catch(error =>console.log(error))
input.value = ''
}
form.addEventListener('submit', hadler)



function hadlerError() {
    iziToast.show({
      titleColor: '#fff',
      messageColor: '#fff',
      message: `Sorry, there are no images matching your search query. Please try again!`,
      closeOnEscape: true,
      position: 'topRight',
      backgroundColor: '#ed6f7c',
    });
  }