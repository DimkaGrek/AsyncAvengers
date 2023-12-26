!function(){function e(e,t,s,r){Object.defineProperty(e,t,{get:s,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=s.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},s.parcelRequired7c6=a);var n=a.register;n("iE7OH",function(t,s){e(t.exports,"register",function(){return r},function(e){return r=e});var r,i=new Map;r=function(e,t){for(var s=0;s<t.length-1;s+=2)i.set(t[s],{baseUrl:e,path:t[s+1]})}}),n("aNJCr",function(t,s){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,i={};r=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),a("iE7OH").register(a("aNJCr").getBundleURL("9p9yL"),JSON.parse('["9p9yL","index.e5213c06.js","d9SZC","icons.b5315233.svg","1kkTF","cart.fb314f43.css","cjXpj","index.08957ea4.js","1kkTF","cart.fb314f43.css","2wL0j","index.runtime.2e65ce68.js"]'));var o=a("dCfNN");a("i8Q71");var l=a("2WlDD"),c=a("1WSnx"),l=a("2WlDD"),d={};d=a("aNJCr").getBundleURL("9p9yL")+"icons.b5315233.svg";var u=a("bC0sB"),p=a("j1lrD"),f=a("4Nugj"),g=a("j3HXm");async function h(e){let t=e.target.closest(".product-button-cart");if(null!==t){(0,g.switchSameBtn)(t.dataset.id),(0,g.putProductListItemInCart)(t.dataset.id);return}let s=e.target.closest(".product-card");if(null!==s){(0,p.spinnerPlay)();try{let e=await (0,l.default).getProductById(s.dataset.id);(0,u.openModalProductCard)(e)}catch(e){(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,p.spinnerStop)()}}}async function v(e={}){try{0===Object.keys(e).length&&((0,p.spinnerPlay)(),e=await (0,l.default).getProductsByFilter(m));let{page:s,totalPages:r}=e;f.refs.productList.innerHTML=function({results:e}){return e.map(({_id:e,name:s,img:r,category:i,price:a,size:n,is10PercentOff:o,popularity:l})=>`<li class="product-card" data-id="${e}">
      <div class="product-img-wrapper">
        <img src="${r}" alt="${s}" width="140" />    
        ${function(e){let s=`<svg class="product-discount-card" width="60" height="60">
          <use href="${t(d)}#icon-discount"></use>
        </svg> `;return e?s:""}(o)}
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
        ${function(e){let s=localStorage.getItem("CART"),r=`<button class="product-button-cart" data-id="${e}"  aria-label="button add to cart" disabled>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${t(d)}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${t(d)}#icon-check"></use>
          </svg>
        </button>`,i=`<button class="product-button-cart" data-id="${e}" aria-label="added to cart">
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${t(d)}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${t(d)}#icon-check"></use>
          </svg>
        </button>`;return s.includes(e)?r:i}(e)}
      </div>
    </li>`).join("")}(e),(r>1?((0,f.refs).pagiContainer.classList.remove("is-hidden"),0):((0,f.refs).pagiContainer.classList.add("is-hidden"),1))||(f.refs.pagiList.innerHTML=(function(e,t){let s=[];if(1===t)return[1];if(document.documentElement.clientWidth>767){if(t<=5){for(let e=1;e<=t;e++)s.push(e);return s}if(t>5){if(1===e||2===e||3===e)return[1,2,3,"...",t];if(e===t||e===t-1||e===t-2){s.push(1,"...");for(let e=t-2;e<=t;e++)s.push(e);return s}return[1,"...",e,"...",t]}}if(t<=3){for(let e=1;e<=t;e++)s.push(e);return s}if(t>=5){if(1===e||2===e)return[1,2,"..."];if(e===t||e===t-1){s.push("...");for(let e=t-1;e<=t;e++)s.push(e);return s}return["...",e,"..."]}})(s,r).map(e=>e===s?`<li class="pagi-item is-active">${e}</li>`:"..."===e?`<li class="pagi-item dotted">${e}</li>`:`<li class="pagi-item">${e}</li>`).join("")),s>1&&(f.refs.pagiBtnLeftDuble.disabled=!0,f.refs.pagiBtnLeft.disabled=!1),s>2&&(f.refs.pagiBtnLeftDuble.disabled=!1),1===s&&(f.refs.pagiBtnLeft.disabled=!0,f.refs.pagiBtnLeftDuble.disabled=!0),r>s&&(f.refs.pagiBtnRightDuble.disabled=!0,f.refs.pagiBtnRight.disabled=!1),r-1>s&&(f.refs.pagiBtnRightDuble.disabled=!1),s===r&&(f.refs.pagiBtnRight.disabled=!0,f.refs.pagiBtnRightDuble.disabled=!0),0===r?(0,f.refs).productMessageContainer.classList.remove("is-hidden"):(0,f.refs).productMessageContainer.classList.add("is-hidden")}catch(e){(0,f.refs).pagiContainer.classList.add("is-hidden"),(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,p.spinnerStop)()}}(function(){if(localStorage.getItem("CART")){let e=JSON.parse(localStorage.getItem("CART"));(0,f.refs).cartQuantity.forEach(t=>t.textContent=e.length);return}localStorage.setItem("CART",JSON.stringify([]))})(),(0,f.refs).productList.addEventListener("click",h),(0,f.refs).pagiList.addEventListener("click",function({target:e}){"LI"===e.nodeName&&"..."!==e.textContent&&(m.page=+e.textContent,v())}),(0,f.refs).pagiContainer.addEventListener("click",function(e){let t=e.target.closest("button");null!==t&&(t===f.refs.pagiBtnLeft&&(m.page-=1,v()),t===f.refs.pagiBtnLeftDuble&&(m.page-=2,v()),t===f.refs.pagiBtnRight&&(m.page+=1,v()),t===f.refs.pagiBtnRightDuble&&(m.page+=2,v()))});var p=a("j1lrD"),u=a("bC0sB"),f=a("4Nugj");let m=y();function b(){let e=document.documentElement.clientWidth;return e>1439?9!==m.limit&&(m.limit=9,!0):e>767?8!==m.limit&&(m.limit=8,!0):e>319?6!==m.limit&&(m.limit=6,!0):void 0}function y(){if(null===localStorage.getItem("searchKey"))return{keyword:null,category:null,page:1,limit:6};{let e=JSON.parse(localStorage.getItem("searchKey"));return f.refs.ftInput.value=e.keyword,e.category&&(f.refs.ftBtn.innerHTML=e.category),"byABC"in e&&(f.refs.dropdownBtn.textContent="true"===e.byABC?"A to Z":"Z to A"),"byPrice"in e&&(f.refs.dropdownBtn.textContent="true"===e.byPrice?"Cheap":"Expensive"),"byPopularity"in e&&(f.refs.dropdownBtn.textContent="true"===e.byPopularity?"Not popular":"Popular"),e}}async function w(e){try{(0,p.spinnerPlay)();let t=await (0,l.default).getProductsByFilter(e);v(t)}catch(e){(0,f.refs).pagiContainer.classList.add("is-hidden"),(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,p.spinnerStop)()}}window.addEventListener("resize",(0,c.throttle)(function(){b()&&v()},1e3)),b(),w(m),(async()=>{try{let e=(await (0,l.default).getProductsCategories()).map(e=>`<li class="select-li">${e}</li>`);e.push('<li class="select-li">Show all</li>'),(0,f.refs).ftSelect.insertAdjacentHTML("beforeend",e.join("\n"))}catch(e){(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}})(),(0,f.refs).ftBtn.addEventListener("click",function(){(0,f.refs).ftSelect.classList.toggle("is-open")}),(0,f.refs).ftSelect.addEventListener("click",function(e){if("LI"!==e.target.nodeName)return;let t=e.target.closest(".select-li");f.refs.ftBtn.innerHTML=t.textContent,(0,f.refs).ftSelect.classList.remove("is-open"),m.page=1,m.category=t.textContent,"Show all"===t.textContent&&(m.category=null),localStorage.setItem("searchKey",JSON.stringify(m)),w(m)}),(0,f.refs).ftSelect.addEventListener("mouseleave",()=>{(0,f.refs).ftSelect.classList.remove("is-open")}),(0,f.refs).ftInput.addEventListener("input",e=>{let t=e.target.value;m.page=1,m.keyword=t,localStorage.setItem("searchKey",JSON.stringify(m)),w(m)}),(0,f.refs).dropdownBtn.addEventListener("click",function(){(0,f.refs).dropdownList.classList.toggle("dropdown_list-visible"),(0,f.refs).dropdownList.classList.add("dropdownList")}),(0,f.refs).dropdownBtn.addEventListener("mouseenter",()=>{(0,f.refs).dropdownList.classList.add("dropdown_list-visible"),(0,f.refs).dropdownList.addEventListener("mouseleave",()=>{(0,f.refs).dropdownList.classList.remove("dropdown_list-visible")})}),(0,f.refs).dropdownList.addEventListener("mouseleave",()=>{(0,f.refs).dropdownList.classList.remove("dropdown_list-visible")}),document.addEventListener("click",function(e){e.target!==f.refs.dropdownBtn&&(0,f.refs).dropdownList.classList.remove("dropdown_list-visible"),e.target!==f.refs.ftBtn&&(0,f.refs).ftSelect.classList.remove("is-open")}),document.addEventListener("keydown",function(e){("Tab"===e.key||"Escape"===e.key)&&((0,f.refs).dropdownList.classList.remove("dropdown_list-visible"),(0,f.refs).dropdownList.classList.remove("dropdown_list-visible"))}),(0,f.refs).dropdownList.addEventListener("click",e=>{if("LI"!==e.target.nodeName)return;let t=e.target.closest(".dropdown_list-item");f.refs.dropdownBtn.textContent=t.textContent;let s=e.target.dataset.value,r=e.target.dataset.key;delete m.byABC,delete m.byPrice,delete m.byPopularity,"showAll"!==r&&(m[r]=s),localStorage.setItem("searchKey",JSON.stringify(m)),w(m)}),(0,f.refs).resetBtn.addEventListener("click",function(){localStorage.removeItem("searchKey"),m=y(),b(),f.refs.ftInput.value="",f.refs.ftBtn.innerHTML="Categories",f.refs.dropdownBtn.innerHTML="A to Z",w(m)});var l=a("2WlDD"),u=a("bC0sB"),g=a("j3HXm");let L=document.querySelector(".popular-list");async function S(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;let t=e.target.closest("LI");if("BUTTON"===e.target.nodeName||"svg"===e.target.nodeName||"use"===e.target.nodeName){let t=e.target.closest(".popular-buy-btn");(0,g.switchSameBtn)(t.dataset.id),(0,g.putProductListItemInCart)(t.dataset.id)}else try{let e=await (0,l.default).getProductById(t.dataset.id);(0,u.openModalProductCard)(e)}catch(e){(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}}!async function(){let e=(await (0,l.default).getPopularProducts()).map(({category:e,img:s,name:r,popularity:i,size:a,_id:n})=>`
            <li class="popular-item" data-id="${n}">
                <a href="" class="popular-link">
                    <div class="polular-content-container">
                        <div class="popular-img-container">
                            <img src="${s}" alt="${r}" class="popular-img"/>
                        </div>
                        <div class="popular-content">
                            <h3 class="popular-item-name">${r}</h3>
                            <p class="popular-item-title">
                                Category: <span class="popular-item-title-name">${e.replace("_"," ")}</span>
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
                    ${function(e){let s=localStorage.getItem("CART"),r=`<button class="popular-buy-btn" data-id="${e}" aria-label="added to cart" disabled>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
              <use href="${t(d)}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon" width="12" height="12">
              <use href="${t(d)}#icon-check" class="icon"></use>
            </svg>
          </button>`,i=`<button class="popular-buy-btn" data-id="${e}" aria-label="button add to cart">
            <svg class="popular-buy-btn-icon" width="12" height="12">
                <use href="${t(d)}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
                <use href="${t(d)}#icon-check" class="icon"></use>
            </svg>
        </button>`;return s.includes(e)?r:i}(n)}
                </a>
            </li>
        `).join("");L.insertAdjacentHTML("beforeend",e),L.addEventListener("click",S)}();var l=a("2WlDD"),u=a("bC0sB"),g=a("j3HXm");let $=document.querySelector(".js-product-discount");async function C(e){let t=e.target.closest(".button-discount");if(null!==t){(0,g.switchSameBtn)(t.dataset.id),(0,g.putProductListItemInCart)(t.dataset.id);return}let s=e.target.closest(".item-discount");if(null!==s)try{let e=await (0,l.default).getProductById(s.dataset.id);(0,u.openModalProductCard)(e)}catch(e){(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}}document.querySelector(".js-cart-quantity"),(async()=>{try{let e=await (0,l.default).getDiscountProducts(),s=[];e.length>2&&(s=function(e,t=2){return[...e].sort(()=>.5-Math.random()).slice(0,t)}(e)),function(e){let s=e.map(({_id:e,name:s,img:r,category:i,price:a,size:n,is10PercentOff:o,popularity:l})=>`   <li class="item-discount" data-id="${e}">
      <div class="discount-image-container">
      <img src="${r}" alt="${i}" width="114" class="discout-image" loading="lazy"/>
      </div>
        <svg width=60 height=60 class="discount-icon">
          <use href="${t(d)}#icon-discount"></use>
        </svg>
        <div class="block-discount">
      <h3 class="tittle-product-discount">${s}</h3>
      <p class="discount-price">$${a}</p>
      ${function(e){let s=localStorage.getItem("CART"),r=`<button class="button-discount" data-id="${e}" aria-label="added to cart" disabled>
          <svg class="pbutton-svg-discount is-hidden" width="18" height="18">
            <use href="${t(d)}#icon-shopping-cart" class="icon"></use>
          </svg>
            <svg class="product-icon-cart" width="18" height="18">
            <use href="${t(d)}#icon-check" class="icon"></use>
          </svg>
        </button>`,i=`<button class="button-discount" data-id="${e}" aria-label="button add to cart">
          <svg class="button-svg-discount" width="18" height="18">
            <use href="${t(d)}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${t(d)}#icon-check" class="icon"></use>
          </svg>
        </button>`;return s.includes(e)?r:i}(e)}
        </div>
    </li>`).join("");$.innerHTML=s,$.addEventListener("click",C)}(s)}catch(e){(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}})(),a("7hKzD"),a("bC0sB");let B=document.querySelector(".js-scroll-up-btn"),E=document.querySelector(".js-hero-container").getBoundingClientRect().height;document.addEventListener("scroll",t(o)(()=>{if(window.scrollY>E/2)return B.classList.add("show");B.classList.remove("show")},500)),B.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})})}();
//# sourceMappingURL=index.e5213c06.js.map
