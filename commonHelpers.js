import{i as d}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=document.querySelector(".todo-list"),n=document.querySelector(".input-text"),p=document.querySelector(".main-form");document.querySelector(".btn");const h="42475254-bcb32dbc18887673c1cce19dd",m="https://pixabay.com/api/",g="photo",y="horizontal",E="true";function $(c){c.preventDefault();const o=n.value.trim(),i=`${m}?key=${h}&q=${o}&image_type=${g}&orientation=${y}&safesearch=${E} `;fetch(i).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>{console.log(s);const e=s.hits;if(e.length===0)return b();f.innerHTML=e.map(({webformatURL:t,likes:r,views:l,comments:a,downloads:u})=>`<li class="photo-main-list">
      <img class='photo' width="360" height="200" src="${t}" alt="" />
      <ul class='list-menu'>
        <li class='description'>
          <h3 class='title'>Likes</h3>
          <p class='datas'>${r}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Views</h3>
          <p class='datas'>${l}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Comments</h3>
          <p class='datas'>${a}</p>
        </li>
        <li class='description'>
          <h3 class='title'>Downloads</h3>
          <p class='datas'>${u}</p>
        </li>
      </ul>
    </li>
`).join("")}).catch(s=>console.log(s)),n.value=""}p.addEventListener("submit",$);function b(){d.show({titleColor:"#fff",messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!",closeOnEscape:!0,position:"topRight",backgroundColor:"#ed6f7c"})}
//# sourceMappingURL=commonHelpers.js.map
