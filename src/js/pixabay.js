export default function getFotos(inputValue) {
  const QUERY = inputValue.trim();
  const LINK = `${BASE_URI}?key=${KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH} `;

  return fetch(LINK).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }

    return res.json();
  });
}

const KEY = '42475254-bcb32dbc18887673c1cce19dd';
const BASE_URI = 'https://pixabay.com/api/';
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';
const SAFESEARCH = 'true';
