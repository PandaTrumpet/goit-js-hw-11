import{S as p,i as d}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(i){return i.map(({webformatURL:s,likes:r,views:o,comments:e,downloads:t,largeImageURL:n,tags:u})=>`<li class="photo-main-list">
          
<a class="galery-link"  href="${n}">
<img class="photo" width="360" height="200" src="${s}" alt="${u}" />
</a>

  <ul class='list-menu'>
    <li class='description'>
      <h3 class='title'>Likes</h3>
      <p class='datas'>${r}</p>
    </li>
    <li class='description'>
      <h3 class='title'>Views</h3>
      <p class='datas'>${o}</p>
    </li>
    <li class='description'>
      <h3 class='title'>Comments</h3>
      <p class='datas'>${e}</p>
    </li>
    <li class='description'>
      <h3 class='title'>Downloads</h3>
      <p class='datas'>${t}</p>
    </li>
  </ul>
</li>
`).join("")}function h(i){const s=i.trim(),r=`${y}?key=${m}&q=${s}&image_type=${g}&orientation=${b}&safesearch=${E} `;return fetch(r).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const m="42475254-bcb32dbc18887673c1cce19dd",y="https://pixabay.com/api/",g="photo",b="horizontal",E="true",l=document.querySelector(".todo-list"),c=document.querySelector(".input-text"),$=document.querySelector(".main-form"),a=document.querySelector(".loading");a.style.display="none";function S(i){i.preventDefault(),l.style.marginTop="60px",a.style.display="inline-block",h(c.value).then(s=>{const r=s.hits;if(r.length===0)return l.innerHTML="",L();l.innerHTML=f(r),new p(".todo-list a.galery-link",{captionsData:"alt",captionDelay:500}).refresh()}).catch(s=>console.log(s)).finally(()=>{a.style.display="none",l.style.marginTop="20px"}),c.value=""}$.addEventListener("submit",S);function L(){d.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
