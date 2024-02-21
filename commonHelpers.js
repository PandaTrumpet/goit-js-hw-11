import{S as h,i as m}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=document.querySelector(".todo-list"),c=document.querySelector(".input-text"),g=document.querySelector(".main-form");document.querySelector(".btn");const l=document.querySelector(".loading"),b="42475254-bcb32dbc18887673c1cce19dd",E="https://pixabay.com/api/",S="photo",$="horizontal",L="true";l.style.display="none";function O(n){n.preventDefault(),l.style.display="inline-block";const o=c.value.trim(),r=`${E}?key=${b}&q=${o}&image_type=${S}&orientation=${$}&safesearch=${L} `;fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{console.log(s);const e=s.hits;if(e.length===0)return q();y.innerHTML=e.map(({webformatURL:t,likes:i,views:a,comments:u,downloads:d,largeImageURL:p,tags:f})=>`<li class="photo-main-list">
              
   <a class="galery-link"  href="${p}">
   <img class="photo" width="360" height="200" src="${t}" alt="${f}" />
   </a>
  
      <ul class='list-menu'>
        <li class='description'>
          <h3 class='title'>Likes</h3>
          <p class='datas'>${i}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Views</h3>
          <p class='datas'>${a}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Comments</h3>
          <p class='datas'>${u}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Downloads</h3>
          <p class='datas'>${d}</p>
        </li>
      </ul>
    </li>
`).join("")}).catch(s=>console.log(s)).finally(()=>{setTimeout(()=>{l.style.display="none"},600)}),c.value="",w.refresh()}g.addEventListener("submit",O);function q(){m.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}const w=new h(".todo-list a.galery-link",{captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
