import{S as p,i as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function f(r){return r.map(({webformatURL:o,likes:i,views:s,comments:e,downloads:t,largeImageURL:n,tags:u})=>`<li class="photo-main-list">
          
<a class="galery-link"  href="${n}">
<img class="photo" width="360" height="200" src="${o}" alt="${u}" />
</a>

  <ul class='list-menu'>
    <li class='description'>
      <h3 class='title'>Likes</h3>
      <p class='datas'>${i}</p>
    </li>
    <li class='description'>
      <h3 class='title'>Views</h3>
      <p class='datas'>${s}</p>
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
`).join("")}function h(r){const o=r.trim(),i=`${y}?key=${m}&q=${o}&image_type=${g}&orientation=${b}&safesearch=${E} `;return fetch(i).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}const m="42475254-bcb32dbc18887673c1cce19dd",y="https://pixabay.com/api/",g="photo",b="horizontal",E="true",l=document.querySelector(".todo-list"),a=document.querySelector(".input-text"),$=document.querySelector(".main-form"),c=document.querySelector(".loading");c.style.display="none";function S(r){r.preventDefault(),l.style.marginTop="60px",c.style.display="inline-block",h(a.value).then(o=>{console.log(o);const i=o.hits;if(i.length===0)return l.innerHTML="",L();l.innerHTML=f(i),new p(".todo-list a.galery-link",{captionsData:"alt",captionDelay:250}).refresh()}).catch(o=>console.log(o)).finally(()=>{setTimeout(()=>{c.style.display="none",l.style.marginTop="20px"},600)}),a.value=""}$.addEventListener("submit",S);function L(){d.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
