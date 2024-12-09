function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in s)return s[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return s[e]=i,t.call(i.exports,i,i.exports),i.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var n=i.register;n("kyEFX",function(e,t){Object.defineProperty(e.exports,"register",{get:function(){return s},set:function(e){return s=e},enumerable:!0,configurable:!0});var s,r=new Map;s=function(e,t){for(var s=0;s<t.length-1;s+=2)r.set(t[s],{baseUrl:e,path:t[s+1]})}}),n("kBiqv",function(e,t){e.exports=new URL("icons.b5315233.svg",import.meta.url).toString()}),i("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["7bk21","index.8841e65e.js","hm5VY","icons.b5315233.svg","3w4ql","index.7b3032e3.js","95c9t","index.runtime.ac937765.js"]'));var a=i("9OeKo");i("bUb57");var o=i("6M5dt"),c={},l=0/0,d=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,f=/^0o[0-7]+$/i,g=parseInt,h="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,m=h||v||Function("return this")(),b=Object.prototype.toString,y=Math.max,w=Math.min,L=function(){return m.Date.now()};function S(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function $(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==b.call(t))return l;if(S(e)){var t,s="function"==typeof e.valueOf?e.valueOf():e;e=S(s)?s+"":s}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var r=p.test(e);return r||f.test(e)?g(e.slice(2),r?2:8):u.test(e)?l:+e}c=function(e,t,s){var r,i,n,a,o,c,l=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var s=r,n=i;return r=i=void 0,l=t,a=e.apply(n,s)}function g(e){var s=e-c,r=e-l;return void 0===c||s>=t||s<0||u&&r>=n}function h(){var e,s,r,i=L();if(g(i))return v(i);o=setTimeout(h,(e=i-c,s=i-l,r=t-e,u?w(r,n-s):r))}function v(e){return(o=void 0,p&&r)?f(e):(r=i=void 0,a)}function m(){var e,s=L(),n=g(s);if(r=arguments,i=this,c=s,n){if(void 0===o)return l=e=c,o=setTimeout(h,t),d?f(e):a;if(u)return o=setTimeout(h,t),f(c)}return void 0===o&&(o=setTimeout(h,t)),a}return t=$(t)||0,S(s)&&(d=!!s.leading,n=(u="maxWait"in s)?y($(s.maxWait)||0,t):n,p="trailing"in s?!!s.trailing:p),m.cancel=function(){void 0!==o&&clearTimeout(o),l=0,r=c=i=o=void 0},m.flush=function(){return void 0===o?a:v(L())},m};var a=i("9OeKo"),o=i("6M5dt"),B=i("kBiqv"),E=i("bfxWz"),C=i("04jNI"),I=i("krGWQ"),P=i("i4viU");async function k(e){let t=e.target.closest(".product-button-cart");if(null!==t){(0,P.switchSameBtn)(t.dataset.id),(0,P.putProductListItemInCart)(t.dataset.id);return}let s=e.target.closest(".product-card");if(null!==s){(0,C.spinnerPlay)();try{let e=await (0,o.default).getProductById(s.dataset.id);(0,E.openModalProductCard)(e)}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,C.spinnerStop)()}}}async function x(t={}){try{0===Object.keys(t).length&&((0,C.spinnerPlay)(),t=await (0,o.default).getProductsByFilter(M));let{page:s,totalPages:r}=t;I.refs.productList.innerHTML=function({results:t}){return t.map(({_id:t,name:s,img:r,category:i,price:n,size:a,is10PercentOff:o,popularity:c})=>`<li class="product-card" data-id="${t}">
      <div class="product-img-wrapper">
        <img src="${r}" alt="${s}" width="140" />    
        ${function(t){let s=`<svg class="product-discount-card" width="60" height="60">
          <use href="${e(B)}#icon-discount"></use>
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
          <span class="product-description-accent">${a}</span>
        </span>
        <span>
          Popularity:
          <span class="product-description-accent">${c}</span>
        </span>
      </p>
      <div class="product-bye">
        <p class="product-prise">$${n}</p>
        ${function(t){let s=localStorage.getItem("CART"),r=`<button class="product-button-cart" data-id="${t}"  aria-label="button add to cart" disabled>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${e(B)}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${e(B)}#icon-check"></use>
          </svg>
        </button>`,i=`<button class="product-button-cart" data-id="${t}" aria-label="added to cart">
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${e(B)}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${e(B)}#icon-check"></use>
          </svg>
        </button>`;return s.includes(t)?r:i}(t)}
      </div>
    </li>`).join("")}(t),(r>1?((0,I.refs).pagiContainer.classList.remove("is-hidden"),0):((0,I.refs).pagiContainer.classList.add("is-hidden"),1))||(I.refs.pagiList.innerHTML=(function(e,t){let s=[];if(1===t)return[1];if(document.documentElement.clientWidth>767){if(t<=5){for(let e=1;e<=t;e++)s.push(e);return s}if(t>5){if(1===e||2===e||3===e)return[1,2,3,"...",t];if(e===t||e===t-1||e===t-2){s.push(1,"...");for(let e=t-2;e<=t;e++)s.push(e);return s}return[1,"...",e,"...",t]}}if(t<=3){for(let e=1;e<=t;e++)s.push(e);return s}if(t>=5){if(1===e||2===e)return[1,2,"..."];if(e===t||e===t-1){s.push("...");for(let e=t-1;e<=t;e++)s.push(e);return s}return["...",e,"..."]}})(s,r).map(e=>e===s?`<li class="pagi-item is-active">${e}</li>`:"..."===e?`<li class="pagi-item dotted">${e}</li>`:`<li class="pagi-item">${e}</li>`).join("")),s>1&&(I.refs.pagiBtnLeftDuble.disabled=!0,I.refs.pagiBtnLeft.disabled=!1),s>2&&(I.refs.pagiBtnLeftDuble.disabled=!1),1===s&&(I.refs.pagiBtnLeft.disabled=!0,I.refs.pagiBtnLeftDuble.disabled=!0),r>s&&(I.refs.pagiBtnRightDuble.disabled=!0,I.refs.pagiBtnRight.disabled=!1),r-1>s&&(I.refs.pagiBtnRightDuble.disabled=!1),s===r&&(I.refs.pagiBtnRight.disabled=!0,I.refs.pagiBtnRightDuble.disabled=!0),0===r?(0,I.refs).productMessageContainer.classList.remove("is-hidden"):(0,I.refs).productMessageContainer.classList.add("is-hidden")}catch(e){(0,I.refs).pagiContainer.classList.add("is-hidden"),(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,C.spinnerStop)()}}(function(){if(localStorage.getItem("CART")){let e=JSON.parse(localStorage.getItem("CART"));(0,I.refs).cartQuantity.forEach(t=>t.textContent=e.length);return}localStorage.setItem("CART",JSON.stringify([]))})(),(0,I.refs).productList.addEventListener("click",k),(0,I.refs).pagiList.addEventListener("click",function({target:e}){"LI"===e.nodeName&&"..."!==e.textContent&&(M.page=+e.textContent,x())}),(0,I.refs).pagiContainer.addEventListener("click",function(e){let t=e.target.closest("button");null!==t&&(t===I.refs.pagiBtnLeft&&(M.page-=1,x()),t===I.refs.pagiBtnLeftDuble&&(M.page-=2,x()),t===I.refs.pagiBtnRight&&(M.page+=1,x()),t===I.refs.pagiBtnRightDuble&&(M.page+=2,x()))});var C=i("04jNI"),E=i("bfxWz"),I=i("krGWQ");let M=T();function j(){let e=document.documentElement.clientWidth;return e>1439?9!==M.limit&&(M.limit=9,!0):e>767?8!==M.limit&&(M.limit=8,!0):e>319?6!==M.limit&&(M.limit=6,!0):void 0}function T(){if(null===localStorage.getItem("searchKey"))return{keyword:null,category:null,page:1,limit:6};{let e=JSON.parse(localStorage.getItem("searchKey"));return I.refs.ftInput.value=e.keyword,e.category&&(I.refs.ftBtn.innerHTML=e.category),"byABC"in e&&(I.refs.dropdownBtn.textContent="true"===e.byABC?"A to Z":"Z to A"),"byPrice"in e&&(I.refs.dropdownBtn.textContent="true"===e.byPrice?"Cheap":"Expensive"),"byPopularity"in e&&(I.refs.dropdownBtn.textContent="true"===e.byPopularity?"Not popular":"Popular"),e}}async function _(e){try{(0,C.spinnerPlay)();let t=await (0,o.default).getProductsByFilter(e);x(t)}catch(e){(0,I.refs).pagiContainer.classList.add("is-hidden"),(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,C.spinnerStop)()}}window.addEventListener("resize",e(a)(function(){j()&&x()},1e3)),j(),_(M),(async()=>{try{let e=(await (0,o.default).getProductsCategories()).map(e=>`<li class="select-li">${e}</li>`);e.push('<li class="select-li">Show all</li>'),(0,I.refs).ftSelect.insertAdjacentHTML("beforeend",e.join("\n"))}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}})(),(0,I.refs).ftBtn.addEventListener("click",function(){(0,I.refs).ftSelect.classList.toggle("is-open")}),(0,I.refs).ftBtn.addEventListener("mouseenter",()=>{(0,I.refs).ftSelect.classList.add("is-open"),(0,I.refs).ftSelect.addEventListener("mouseleave",()=>{(0,I.refs).ftSelect.classList.remove("is-open")})}),(0,I.refs).ftSelect.addEventListener("click",function(e){if("LI"!==e.target.nodeName)return;let t=e.target.closest(".select-li");I.refs.ftBtn.innerHTML=t.textContent,(0,I.refs).ftSelect.classList.remove("is-open"),M.page=1,M.category=t.textContent,"Show all"===t.textContent&&(M.category=null),localStorage.setItem("searchKey",JSON.stringify(M)),_(M)}),(0,I.refs).ftInput.addEventListener("input",e(c)(e=>{let t=e.target.value;M.page=1,M.keyword=t,localStorage.setItem("searchKey",JSON.stringify(M)),_(M)},700)),(0,I.refs).dropdownBtn.addEventListener("click",function(){(0,I.refs).dropdownList.classList.toggle("dropdown_list-visible"),(0,I.refs).dropdownList.classList.add("dropdownList")}),(0,I.refs).dropdownBtn.addEventListener("mouseenter",()=>{(0,I.refs).dropdownList.classList.add("dropdown_list-visible"),(0,I.refs).dropdownList.addEventListener("mouseleave",()=>{(0,I.refs).dropdownList.classList.remove("dropdown_list-visible")})}),(0,I.refs).dropdownList.addEventListener("mouseleave",()=>{(0,I.refs).dropdownList.classList.remove("dropdown_list-visible")}),document.addEventListener("click",function(e){e.target!==I.refs.dropdownBtn&&(0,I.refs).dropdownList.classList.remove("dropdown_list-visible"),e.target!==I.refs.ftBtn&&(0,I.refs).ftSelect.classList.remove("is-open")}),document.addEventListener("keydown",function(e){("Tab"===e.key||"Escape"===e.key)&&((0,I.refs).dropdownList.classList.remove("dropdown_list-visible"),(0,I.refs).dropdownList.classList.remove("dropdown_list-visible"))}),(0,I.refs).dropdownList.addEventListener("click",e=>{if("LI"!==e.target.nodeName)return;let t=e.target.closest(".dropdown_list-item");I.refs.dropdownBtn.textContent=t.textContent;let s=e.target.dataset.value,r=e.target.dataset.key;delete M.byABC,delete M.byPrice,delete M.byPopularity,"showAll"!==r&&(M[r]=s),localStorage.setItem("searchKey",JSON.stringify(M)),_(M)}),(0,I.refs).resetBtn.addEventListener("click",function(){localStorage.removeItem("searchKey"),M=T(),j(),I.refs.ftInput.value="",I.refs.ftBtn.innerHTML="Categories",I.refs.dropdownBtn.innerHTML="A to Z",_(M)});var B=i("kBiqv"),o=i("6M5dt"),E=i("bfxWz"),P=i("i4viU");const O=document.querySelector(".popular-list");async function R(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;let t=e.target.closest("LI");if("BUTTON"===e.target.nodeName||"svg"===e.target.nodeName||"use"===e.target.nodeName){let t=e.target.closest(".popular-buy-btn");(0,P.switchSameBtn)(t.dataset.id),(0,P.putProductListItemInCart)(t.dataset.id)}else try{let e=await (0,o.default).getProductById(t.dataset.id);(0,E.openModalProductCard)(e)}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}}!async function(){let t=(await (0,o.default).getPopularProducts()).map(({category:t,img:s,name:r,popularity:i,size:n,_id:a})=>`
            <li class="popular-item" data-id="${a}">
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
                                    Size: <span class="popular-item-title-name">${n}</span>
                                </p>
                                <p class="popular-item-title">
                                    Popularity: <span class="popular-item-title-name">${i}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    ${function(t){let s=localStorage.getItem("CART"),r=`<button class="popular-buy-btn" data-id="${t}" aria-label="added to cart" disabled>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
              <use href="${e(B)}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon" width="12" height="12">
              <use href="${e(B)}#icon-check" class="icon"></use>
            </svg>
          </button>`,i=`<button class="popular-buy-btn" data-id="${t}" aria-label="button add to cart">
            <svg class="popular-buy-btn-icon" width="12" height="12">
                <use href="${e(B)}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
                <use href="${e(B)}#icon-check" class="icon"></use>
            </svg>
        </button>`;return s.includes(t)?r:i}(a)}
                </a>
            </li>
        `).join("");O.insertAdjacentHTML("beforeend",t),O.addEventListener("click",R)}();var o=i("6M5dt"),B=i("kBiqv"),E=i("bfxWz"),P=i("i4viU");const A=document.querySelector(".js-product-discount");async function H(e){let t=e.target.closest(".button-discount");if(null!==t){(0,P.switchSameBtn)(t.dataset.id),(0,P.putProductListItemInCart)(t.dataset.id);return}let s=e.target.closest(".item-discount");if(null!==s)try{let e=await (0,o.default).getProductById(s.dataset.id);(0,E.openModalProductCard)(e)}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}}document.querySelector(".js-cart-quantity"),(async()=>{try{let t=await (0,o.default).getDiscountProducts(),s=[];t.length>2&&(s=function(e,t=2){return[...e].sort(()=>.5-Math.random()).slice(0,t)}(t)),function(t){let s=t.map(({_id:t,name:s,img:r,category:i,price:n,size:a,is10PercentOff:o,popularity:c})=>`   <li class="item-discount" data-id="${t}">
      <div class="discount-image-container">
      <img src="${r}" alt="${i}" width="114" class="discout-image" loading="lazy"/>
      </div>
        <svg width=60 height=60 class="discount-icon">
          <use href="${e(B)}#icon-discount"></use>
        </svg>
        <div class="block-discount">
      <h3 class="tittle-product-discount">${s}</h3>
      <p class="discount-price">$${n}</p>
      ${function(t){let s=localStorage.getItem("CART"),r=`<button class="button-discount" data-id="${t}" aria-label="added to cart" disabled>
          <svg class="pbutton-svg-discount is-hidden" width="18" height="18">
            <use href="${e(B)}#icon-shopping-cart" class="icon"></use>
          </svg>
            <svg class="product-icon-cart" width="18" height="18">
            <use href="${e(B)}#icon-check" class="icon"></use>
          </svg>
        </button>`,i=`<button class="button-discount" data-id="${t}" aria-label="button add to cart">
          <svg class="button-svg-discount" width="18" height="18">
            <use href="${e(B)}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${e(B)}#icon-check" class="icon"></use>
          </svg>
        </button>`;return s.includes(t)?r:i}(t)}
        </div>
    </li>`).join("");A.innerHTML=s,A.addEventListener("click",H)}(s)}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}})(),i("epHO8"),i("bfxWz");const N=document.querySelector(".js-scroll-up-btn"),W=document.querySelector(".js-hero-container").getBoundingClientRect().height;document.addEventListener("scroll",e(a)(()=>{if(window.scrollY>W/2)return N.classList.add("show");N.classList.remove("show")},500)),N.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.8841e65e.js.map
