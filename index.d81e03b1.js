function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var a=i.register;a("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return s},set:function(e){return s=e},enumerable:!0,configurable:!0});var s,r=new Map;s=function(e,t){for(var s=0;s<t.length-1;s+=2)r.set(t[s],{baseUrl:e,path:t[s+1]})}}),a("kBiqv",function(e,t){e.exports=new URL("icons.b5315233.svg",import.meta.url).toString()}),i("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["7bk21","index.d81e03b1.js","hm5VY","icons.b5315233.svg","1kkTF","cart.fb314f43.css","eBb1I","index.78bb341e.js","1kkTF","cart.fb314f43.css","14klr","index.runtime.360d4df5.js"]'));var n=i("9OeKo");i("bUb57");var o=i("6M5dt"),l=i("kEUo3"),o=i("6M5dt"),c=i("kBiqv"),d=i("bfxWz"),u=i("04jNI"),p=i("krGWQ"),f=i("i4viU");async function g(e){let t=e.target.closest(".product-button-cart");if(null!==t){(0,f.switchSameBtn)(t.dataset.id),(0,f.putProductListItemInCart)(t.dataset.id);return}let s=e.target.closest(".product-card");if(null!==s){(0,u.spinnerPlay)();try{let e=await (0,o.default).getProductById(s.dataset.id);(0,d.openModalProductCard)(e)}catch(e){(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,u.spinnerStop)()}}}async function h(t={}){try{0===Object.keys(t).length&&((0,u.spinnerPlay)(),t=await (0,o.default).getProductsByFilter(v));let{page:s,totalPages:r}=t;p.refs.productList.innerHTML=function({results:t}){return t.map(({_id:t,name:s,img:r,category:i,price:a,size:n,is10PercentOff:o,popularity:l})=>`<li class="product-card" data-id="${t}">
      <div class="product-img-wrapper">
        <img src="${r}" alt="${s}" width="140" />    
        ${function(t){let s=`<svg class="product-discount-card" width="60" height="60">
          <use href="${e(c)}#icon-discount"></use>
        </svg> `;return t?s:""}(o)}
      </div>
      <h2 class="product-name">${s}</h2>
      <p class="product-description">
        <span>
          Category:
          <span class="product-description-accent">${i}</span>
        </span>
        <span>
          Size:
          <span class="product-description-accent">${n}</span>
        </span>
        <span>
          Popularity:
          <span class="product-description-accent">${l}</span>
        </span>
      </p>
      <div class="product-bye">
        <p class="product-prise">$${a}</p>
        ${function(t){let s=localStorage.getItem("CART"),r=`<button class="product-button-cart" data-id="${t}"  aria-label="button add to cart" disabled>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${e(c)}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${e(c)}#icon-check"></use>
          </svg>
        </button>`,i=`<button class="product-button-cart" data-id="${t}" aria-label="added to cart">
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${e(c)}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${e(c)}#icon-check"></use>
          </svg>
        </button>`;return s.includes(t)?r:i}(t)}
      </div>
    </li>`).join("")}(t),(r>1?((0,p.refs).pagiContainer.classList.remove("is-hidden"),0):((0,p.refs).pagiContainer.classList.add("is-hidden"),1))||(p.refs.pagiList.innerHTML=(function(e,t){let s=[];if(1===t)return[1];if(document.documentElement.clientWidth>767){if(t<=5){for(let e=1;e<=t;e++)s.push(e);return s}if(t>5){if(1===e||2===e||3===e)return[1,2,3,"...",t];if(e===t||e===t-1||e===t-2){s.push(1,"...");for(let e=t-2;e<=t;e++)s.push(e);return s}return[1,"...",e,"...",t]}}if(t<=3){for(let e=1;e<=t;e++)s.push(e);return s}if(t>=5){if(1===e||2===e)return[1,2,"..."];if(e===t||e===t-1){s.push("...");for(let e=t-1;e<=t;e++)s.push(e);return s}return["...",e,"..."]}})(s,r).map(e=>e===s?`<li class="pagi-item is-active">${e}</li>`:"..."===e?`<li class="pagi-item dotted">${e}</li>`:`<li class="pagi-item">${e}</li>`).join("")),s>1&&(p.refs.pagiBtnLeftDuble.disabled=!0,p.refs.pagiBtnLeft.disabled=!1),s>2&&(p.refs.pagiBtnLeftDuble.disabled=!1),1===s&&(p.refs.pagiBtnLeft.disabled=!0,p.refs.pagiBtnLeftDuble.disabled=!0),r>s&&(p.refs.pagiBtnRightDuble.disabled=!0,p.refs.pagiBtnRight.disabled=!1),r-1>s&&(p.refs.pagiBtnRightDuble.disabled=!1),s===r&&(p.refs.pagiBtnRight.disabled=!0,p.refs.pagiBtnRightDuble.disabled=!0),0===r?(0,p.refs).productMessageContainer.classList.remove("is-hidden"):(0,p.refs).productMessageContainer.classList.add("is-hidden")}catch(e){(0,p.refs).pagiContainer.classList.add("is-hidden"),(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,u.spinnerStop)()}}(function(){if(localStorage.getItem("CART")){let e=JSON.parse(localStorage.getItem("CART"));(0,p.refs).cartQuantity.forEach(t=>t.textContent=e.length);return}localStorage.setItem("CART",JSON.stringify([]))})(),(0,p.refs).productList.addEventListener("click",g),(0,p.refs).pagiList.addEventListener("click",function({target:e}){"LI"===e.nodeName&&"..."!==e.textContent&&(v.page=+e.textContent,h())}),(0,p.refs).pagiContainer.addEventListener("click",function(e){let t=e.target.closest("button");null!==t&&(t===p.refs.pagiBtnLeft&&(v.page-=1,h()),t===p.refs.pagiBtnLeftDuble&&(v.page-=2,h()),t===p.refs.pagiBtnRight&&(v.page+=1,h()),t===p.refs.pagiBtnRightDuble&&(v.page+=2,h()))});var u=i("04jNI"),d=i("bfxWz"),p=i("krGWQ");let v=m();function b(){let e=document.documentElement.clientWidth;return e>1439?9!==v.limit&&(v.limit=9,!0):e>767?8!==v.limit&&(v.limit=8,!0):e>319?6!==v.limit&&(v.limit=6,!0):void 0}function m(){if(null===localStorage.getItem("searchKey"))return{keyword:null,category:null,page:1,limit:6};{let e=JSON.parse(localStorage.getItem("searchKey"));return p.refs.ftInput.value=e.keyword,e.category&&(p.refs.ftBtn.innerHTML=e.category),"byABC"in e&&(p.refs.dropdownBtn.textContent="true"===e.byABC?"A to Z":"Z to A"),"byPrice"in e&&(p.refs.dropdownBtn.textContent="true"===e.byPrice?"Cheap":"Expensive"),"byPopularity"in e&&(p.refs.dropdownBtn.textContent="true"===e.byPopularity?"Not popular":"Popular"),e}}async function y(e){try{(0,u.spinnerPlay)();let t=await (0,o.default).getProductsByFilter(e);h(t)}catch(e){(0,p.refs).pagiContainer.classList.add("is-hidden"),(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,u.spinnerStop)()}}window.addEventListener("resize",(0,l.throttle)(function(){b()&&h()},1e3)),b(),y(v),(async()=>{try{let e=(await (0,o.default).getProductsCategories()).map(e=>`<li class="select-li">${e}</li>`);e.push('<li class="select-li">Show all</li>'),(0,p.refs).ftSelect.insertAdjacentHTML("beforeend",e.join("\n"))}catch(e){(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}})(),(0,p.refs).ftBtn.addEventListener("click",function(){(0,p.refs).ftSelect.classList.toggle("is-open")}),(0,p.refs).ftSelect.addEventListener("click",function(e){if("LI"!==e.target.nodeName)return;let t=e.target.closest(".select-li");p.refs.ftBtn.innerHTML=t.textContent,(0,p.refs).ftSelect.classList.remove("is-open"),v.page=1,v.category=t.textContent,"Show all"===t.textContent&&(v.category=null),localStorage.setItem("searchKey",JSON.stringify(v)),y(v)}),(0,p.refs).ftSelect.addEventListener("mouseleave",()=>{(0,p.refs).ftSelect.classList.remove("is-open")}),(0,p.refs).ftInput.addEventListener("input",e=>{let t=e.target.value;v.page=1,v.keyword=t,localStorage.setItem("searchKey",JSON.stringify(v)),y(v)}),(0,p.refs).dropdownBtn.addEventListener("click",function(){(0,p.refs).dropdownList.classList.toggle("dropdown_list-visible"),(0,p.refs).dropdownList.classList.add("dropdownList")}),(0,p.refs).dropdownBtn.addEventListener("mouseenter",()=>{(0,p.refs).dropdownList.classList.add("dropdown_list-visible"),(0,p.refs).dropdownList.addEventListener("mouseleave",()=>{(0,p.refs).dropdownList.classList.remove("dropdown_list-visible")})}),(0,p.refs).dropdownList.addEventListener("mouseleave",()=>{(0,p.refs).dropdownList.classList.remove("dropdown_list-visible")}),document.addEventListener("click",function(e){e.target!==p.refs.dropdownBtn&&(0,p.refs).dropdownList.classList.remove("dropdown_list-visible"),e.target!==p.refs.ftBtn&&(0,p.refs).ftSelect.classList.remove("is-open")}),document.addEventListener("keydown",function(e){("Tab"===e.key||"Escape"===e.key)&&((0,p.refs).dropdownList.classList.remove("dropdown_list-visible"),(0,p.refs).dropdownList.classList.remove("dropdown_list-visible"))}),(0,p.refs).dropdownList.addEventListener("click",e=>{if("LI"!==e.target.nodeName)return;let t=e.target.closest(".dropdown_list-item");p.refs.dropdownBtn.textContent=t.textContent;let s=e.target.dataset.value,r=e.target.dataset.key;delete v.byABC,delete v.byPrice,delete v.byPopularity,"showAll"!==r&&(v[r]=s),localStorage.setItem("searchKey",JSON.stringify(v)),y(v)}),(0,p.refs).resetBtn.addEventListener("click",function(){localStorage.removeItem("searchKey"),v=m(),b(),p.refs.ftInput.value="",p.refs.ftBtn.innerHTML="Categories",p.refs.dropdownBtn.innerHTML="A to Z",y(v)});var c=i("kBiqv"),o=i("6M5dt"),d=i("bfxWz"),f=i("i4viU");const w=document.querySelector(".popular-list");async function L(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;let t=e.target.closest("LI");if("BUTTON"===e.target.nodeName||"svg"===e.target.nodeName||"use"===e.target.nodeName){let t=e.target.closest(".popular-buy-btn");(0,f.switchSameBtn)(t.dataset.id),(0,f.putProductListItemInCart)(t.dataset.id)}else try{let e=await (0,o.default).getProductById(t.dataset.id);(0,d.openModalProductCard)(e)}catch(e){(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}}!async function(){let t=(await (0,o.default).getPopularProducts()).map(({category:t,img:s,name:r,popularity:i,size:a,_id:n})=>`
            <li class="popular-item" data-id="${n}">
                <a href="" class="popular-link">
                    <div class="polular-content-container">
                        <div class="popular-img-container">
                            <img src="${s}" alt="${r}" class="popular-img"/>
                        </div>
                        <div class="popular-content">
                            <h3 class="popular-item-name">${r}</h3>
                            <p class="popular-item-title">
                                Category: <span class="popular-item-title-name">${t.replace("_"," ")}</span>
                            </p>
                            <div class="popular-content-bottom">
                                <p class="popular-item-title">
                                    Size: <span class="popular-item-title-name">${a}</span>
                                </p>
                                <p class="popular-item-title">
                                    Popularity: <span class="popular-item-title-name">${i}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    ${function(t){let s=localStorage.getItem("CART"),r=`<button class="popular-buy-btn" data-id="${t}" aria-label="added to cart" disabled>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
              <use href="${e(c)}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon" width="12" height="12">
              <use href="${e(c)}#icon-check" class="icon"></use>
            </svg>
          </button>`,i=`<button class="popular-buy-btn" data-id="${t}" aria-label="button add to cart">
            <svg class="popular-buy-btn-icon" width="12" height="12">
                <use href="${e(c)}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
                <use href="${e(c)}#icon-check" class="icon"></use>
            </svg>
        </button>`;return s.includes(t)?r:i}(n)}
                </a>
            </li>
        `).join("");w.insertAdjacentHTML("beforeend",t),w.addEventListener("click",L)}();var o=i("6M5dt"),c=i("kBiqv"),d=i("bfxWz"),f=i("i4viU");const S=document.querySelector(".js-product-discount");async function $(e){let t=e.target.closest(".button-discount");if(null!==t){(0,f.switchSameBtn)(t.dataset.id),(0,f.putProductListItemInCart)(t.dataset.id);return}let s=e.target.closest(".item-discount");if(null!==s)try{let e=await (0,o.default).getProductById(s.dataset.id);(0,d.openModalProductCard)(e)}catch(e){(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}}document.querySelector(".js-cart-quantity"),(async()=>{try{let t=await (0,o.default).getDiscountProducts(),s=[];t.length>2&&(s=function(e,t=2){return[...e].sort(()=>.5-Math.random()).slice(0,t)}(t)),function(t){let s=t.map(({_id:t,name:s,img:r,category:i,price:a,size:n,is10PercentOff:o,popularity:l})=>`   <li class="item-discount" data-id="${t}">
      <div class="discount-image-container">
      <img src="${r}" alt="${i}" width="114" class="discout-image" loading="lazy"/>
      </div>
        <svg width=60 height=60 class="discount-icon">
          <use href="${e(c)}#icon-discount"></use>
        </svg>
        <div class="block-discount">
      <h3 class="tittle-product-discount">${s}</h3>
      <p class="discount-price">$${a}</p>
      ${function(t){let s=localStorage.getItem("CART"),r=`<button class="button-discount" data-id="${t}" aria-label="added to cart" disabled>
          <svg class="pbutton-svg-discount is-hidden" width="18" height="18">
            <use href="${e(c)}#icon-shopping-cart" class="icon"></use>
          </svg>
            <svg class="product-icon-cart" width="18" height="18">
            <use href="${e(c)}#icon-check" class="icon"></use>
          </svg>
        </button>`,i=`<button class="button-discount" data-id="${t}" aria-label="button add to cart">
          <svg class="button-svg-discount" width="18" height="18">
            <use href="${e(c)}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${e(c)}#icon-check" class="icon"></use>
          </svg>
        </button>`;return s.includes(t)?r:i}(t)}
        </div>
    </li>`).join("");S.innerHTML=s,S.addEventListener("click",$)}(s)}catch(e){(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}})(),i("epHO8"),i("bfxWz");const B=document.querySelector(".js-scroll-up-btn"),E=document.querySelector(".js-hero-container").getBoundingClientRect().height;document.addEventListener("scroll",e(n)(()=>{if(window.scrollY>E/2)return B.classList.add("show");B.classList.remove("show")},500)),B.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.d81e03b1.js.map
