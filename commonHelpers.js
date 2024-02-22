import{S as p,i as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function f(i){return i.map(({webformatURL:o,likes:s,views:r,comments:e,downloads:t,largeImageURL:n,tags:u})=>`<li class="photo-main-list">
          
<a class="galery-link"  href="${n}">
<img class="photo" width="360" height="200" src="${o}" alt="${u}" />
</a>

  <ul class='list-menu'>
    <li class='description'>
      <h3 class='title'>Likes</h3>
      <p class='datas'>${s}</p>
    </li>
    <li class='description'>
      <h3 class='title'>Views</h3>
      <p class='datas'>${r}</p>
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
`).join("")}function m(i){const o=i.trim(),s=`${y}?key=${h}&q=${o}&image_type=${g}&orientation=${b}&safesearch=${E} `;return fetch(s).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const h="42475254-bcb32dbc18887673c1cce19dd",y="https://pixabay.com/api/",g="photo",b="horizontal",E="true",l=document.querySelector(".todo-list"),a=document.querySelector(".input-text"),S=document.querySelector(".main-form");document.querySelector(".btn");const c=document.querySelector(".loading");c.style.display="none";function $(i){i.preventDefault(),l.style.marginTop="60px",c.style.display="inline-block",m(a.value).then(o=>{console.log(o);const s=o.hits;if(s.length===0)return L();l.innerHTML=f(s)}).catch(o=>console.log(o)).finally(()=>{setTimeout(()=>{c.style.display="none",l.style.marginTop="20px"},600)}),a.value="",x.refresh()}S.addEventListener("submit",$);function L(){d.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}const x=new p(".todo-list a.galery-link",{captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
