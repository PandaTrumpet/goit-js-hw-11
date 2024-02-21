import{S as h,i as y}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".todo-list"),a=document.querySelector(".input-text"),g=document.querySelector(".main-form");document.querySelector(".btn");const n=document.querySelector(".loading"),b="42475254-bcb32dbc18887673c1cce19dd",E="https://pixabay.com/api/",S="photo",$="horizontal",L="true";n.style.display="none";function x(c){c.preventDefault(),l.style.marginTop="60px",n.style.display="inline-block";const o=a.value.trim(),r=`${E}?key=${b}&q=${o}&image_type=${S}&orientation=${$}&safesearch=${L} `;fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{console.log(s);const e=s.hits;if(e.length===0)return O();l.innerHTML=e.map(({webformatURL:t,likes:i,views:u,comments:d,downloads:p,largeImageURL:f,tags:m})=>`<li class="photo-main-list">
              
   <a class="galery-link"  href="${f}">
   <img class="photo" width="360" height="200" src="${t}" alt="${m}" />
   </a>
  
      <ul class='list-menu'>
        <li class='description'>
          <h3 class='title'>Likes</h3>
          <p class='datas'>${i}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Views</h3>
          <p class='datas'>${u}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Comments</h3>
          <p class='datas'>${d}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Downloads</h3>
          <p class='datas'>${p}</p>
        </li>
      </ul>
    </li>
`).join("")}).catch(s=>console.log(s)).finally(()=>{setTimeout(()=>{n.style.display="none",l.style.marginTop="20px"},600)}),a.value="",q.refresh()}g.addEventListener("submit",x);function O(){y.error({maxWidth:"432px",messageSize:"16px",titleColor:" #fafafb",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}const q=new h(".todo-list a.galery-link",{captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
