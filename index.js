/* empty css                      */import{S as p,i as u}from"./assets/vendor-BrddEoy-.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h=document.getElementById("search-input"),f=document.getElementById("search-button"),g=document.getElementById("gallery"),n=document.getElementById("loading-spinner"),y=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});f.addEventListener("click",()=>{const a=`https://pixabay.com/api/?key=45876667-2d0330e34270c14d815b5249b&q=${h.value}&image_type=photo&orientation=horizontal&safesearch=true`;n.classList.remove("hidden"),(o=>new Promise((i,e)=>{fetch(o).then(t=>{if(!t.ok)throw new Error("Veri alınırken bir hata oluştu");return t.json()}).then(t=>i(t)).catch(t=>e("Bir hata oluştu: "+t.message))}))(a).then(o=>{o.hits.length===0&&u.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"red"});const i=o.hits.map(({webformatURL:e,largeImageURL:t,tags:s,likes:l,views:c,comments:m,downloads:d})=>`
            <li class="gallery-item">
              <a href="${t}" data-lightbox="gallery" data-title="${s}">
                <img class="gallery-image" src="${e}" alt="${s}"/>
              </a>
              <div class="bottom-item">
                <div class="bottom-item-div"><p class="bottom-item-p1">Likes</p><p class="bottom-item-p2">${l}</p></div>
                <div class="bottom-item-div"><p class="bottom-item-p1">Views</p><p class="bottom-item-p2">${c}</p></div>
                <div class="bottom-item-div"><p class="bottom-item-p1">Comments</p><p class="bottom-item-p2">${m}</p></div>
                <div class="bottom-item-div"><p class="bottom-item-p1">Downloads</p><p class="bottom-item-p2">${d}</p></div>
              </div>
            </li>
          `).join("");g.innerHTML=i,y.refresh()}).catch(o=>{console.log("Hata:",o)}).finally(()=>{n.classList.add("hidden")})});
//# sourceMappingURL=index.js.map
