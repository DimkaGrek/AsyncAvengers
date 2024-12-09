!function(){function e(e,t,s,r){Object.defineProperty(e,t,{get:s,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},n=s.parcelRequired7c6;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return r[e]=s,t.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},s.parcelRequired7c6=n);var a=n.register;a("iE7OH",function(t,s){e(t.exports,"register",function(){return r},function(e){return r=e});var r,i=new Map;r=function(e,t){for(var s=0;s<t.length-1;s+=2)i.set(t[s],{baseUrl:e,path:t[s+1]})}}),a("aNJCr",function(t,s){e(t.exports,"getBundleURL",function(){return r},function(e){return r=e});var r,i={};r=function(e){var t=i[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),i[e]=t),t}}),n("iE7OH").register(n("aNJCr").getBundleURL("9p9yL"),JSON.parse('["9p9yL","index.a7888ce4.js","d9SZC","icons.b5315233.svg","iZh0S","index.578b7fdd.js","fGTly","index.runtime.34a4d748.js"]'));var o=n("dCfNN");n("i8Q71");var c=n("2WlDD"),l={},d=0/0,u=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,g=/^0o[0-7]+$/i,h=parseInt,v="object"==typeof s&&s&&s.Object===Object&&s,m="object"==typeof self&&self&&self.Object===Object&&self,b=v||m||Function("return this")(),y=Object.prototype.toString,w=Math.max,L=Math.min,S=function(){return b.Date.now()};function $(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function C(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==y.call(t))return d;if($(e)){var t,s="function"==typeof e.valueOf?e.valueOf():e;e=$(s)?s+"":s}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var r=f.test(e);return r||g.test(e)?h(e.slice(2),r?2:8):p.test(e)?d:+e}l=function(e,t,s){var r,i,n,a,o,c,l=0,d=!1,u=!1,p=!0;if("function"!=typeof e)throw TypeError("Expected a function");function f(t){var s=r,n=i;return r=i=void 0,l=t,a=e.apply(n,s)}function g(e){var s=e-c,r=e-l;return void 0===c||s>=t||s<0||u&&r>=n}function h(){var e,s,r,i=S();if(g(i))return v(i);o=setTimeout(h,(e=i-c,s=i-l,r=t-e,u?L(r,n-s):r))}function v(e){return(o=void 0,p&&r)?f(e):(r=i=void 0,a)}function m(){var e,s=S(),n=g(s);if(r=arguments,i=this,c=s,n){if(void 0===o)return l=e=c,o=setTimeout(h,t),d?f(e):a;if(u)return o=setTimeout(h,t),f(c)}return void 0===o&&(o=setTimeout(h,t)),a}return t=C(t)||0,$(s)&&(d=!!s.leading,n=(u="maxWait"in s)?w(C(s.maxWait)||0,t):n,p="trailing"in s?!!s.trailing:p),m.cancel=function(){void 0!==o&&clearTimeout(o),l=0,r=c=i=o=void 0},m.flush=function(){return void 0===o?a:v(S())},m};var o=n("dCfNN"),c=n("2WlDD"),B={};B=n("aNJCr").getBundleURL("9p9yL")+"icons.b5315233.svg";var E=n("bC0sB"),P=n("j1lrD"),I=n("4Nugj"),j=n("j3HXm");async function k(e){let t=e.target.closest(".product-button-cart");if(null!==t){(0,j.switchSameBtn)(t.dataset.id),(0,j.putProductListItemInCart)(t.dataset.id);return}let s=e.target.closest(".product-card");if(null!==s){(0,P.spinnerPlay)();try{let e=await (0,c.default).getProductById(s.dataset.id);(0,E.openModalProductCard)(e)}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,P.spinnerStop)()}}}async function x(e={}){try{0===Object.keys(e).length&&((0,P.spinnerPlay)(),e=await (0,c.default).getProductsByFilter(T));let{page:s,totalPages:r}=e;I.refs.productList.innerHTML=function({results:e}){return e.map(({_id:e,name:s,img:r,category:i,price:n,size:a,is10PercentOff:o,popularity:c})=>`<li class="product-card" data-id="${e}">
      <div class="product-img-wrapper">
        <img src="${r}" alt="${s}" width="140" />    
        ${function(e){let s=`<svg class="product-discount-card" width="60" height="60">
          <use href="${t(B)}#icon-discount"></use>
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
          <span class="product-description-accent">${a}</span>
        </span>
        <span>
          Popularity:
          <span class="product-description-accent">${c}</span>
        </span>
      </p>
      <div class="product-bye">
        <p class="product-prise">$${n}</p>
        ${function(e){let s=localStorage.getItem("CART"),r=`<button class="product-button-cart" data-id="${e}"  aria-label="button add to cart" disabled>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${t(B)}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${t(B)}#icon-check"></use>
          </svg>
        </button>`,i=`<button class="product-button-cart" data-id="${e}" aria-label="added to cart">
          <svg class="product-icon-cart" width="18" height="18">
            <use href="${t(B)}#icon-shopping-cart"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${t(B)}#icon-check"></use>
          </svg>
        </button>`;return s.includes(e)?r:i}(e)}
      </div>
    </li>`).join("")}(e),(r>1?((0,I.refs).pagiContainer.classList.remove("is-hidden"),0):((0,I.refs).pagiContainer.classList.add("is-hidden"),1))||(I.refs.pagiList.innerHTML=(function(e,t){let s=[];if(1===t)return[1];if(document.documentElement.clientWidth>767){if(t<=5){for(let e=1;e<=t;e++)s.push(e);return s}if(t>5){if(1===e||2===e||3===e)return[1,2,3,"...",t];if(e===t||e===t-1||e===t-2){s.push(1,"...");for(let e=t-2;e<=t;e++)s.push(e);return s}return[1,"...",e,"...",t]}}if(t<=3){for(let e=1;e<=t;e++)s.push(e);return s}if(t>=5){if(1===e||2===e)return[1,2,"..."];if(e===t||e===t-1){s.push("...");for(let e=t-1;e<=t;e++)s.push(e);return s}return["...",e,"..."]}})(s,r).map(e=>e===s?`<li class="pagi-item is-active">${e}</li>`:"..."===e?`<li class="pagi-item dotted">${e}</li>`:`<li class="pagi-item">${e}</li>`).join("")),s>1&&(I.refs.pagiBtnLeftDuble.disabled=!0,I.refs.pagiBtnLeft.disabled=!1),s>2&&(I.refs.pagiBtnLeftDuble.disabled=!1),1===s&&(I.refs.pagiBtnLeft.disabled=!0,I.refs.pagiBtnLeftDuble.disabled=!0),r>s&&(I.refs.pagiBtnRightDuble.disabled=!0,I.refs.pagiBtnRight.disabled=!1),r-1>s&&(I.refs.pagiBtnRightDuble.disabled=!1),s===r&&(I.refs.pagiBtnRight.disabled=!0,I.refs.pagiBtnRightDuble.disabled=!0),0===r?(0,I.refs).productMessageContainer.classList.remove("is-hidden"):(0,I.refs).productMessageContainer.classList.add("is-hidden")}catch(e){(0,I.refs).pagiContainer.classList.add("is-hidden"),(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,P.spinnerStop)()}}(function(){if(localStorage.getItem("CART")){let e=JSON.parse(localStorage.getItem("CART"));(0,I.refs).cartQuantity.forEach(t=>t.textContent=e.length);return}localStorage.setItem("CART",JSON.stringify([]))})(),(0,I.refs).productList.addEventListener("click",k),(0,I.refs).pagiList.addEventListener("click",function({target:e}){"LI"===e.nodeName&&"..."!==e.textContent&&(T.page=+e.textContent,x())}),(0,I.refs).pagiContainer.addEventListener("click",function(e){let t=e.target.closest("button");null!==t&&(t===I.refs.pagiBtnLeft&&(T.page-=1,x()),t===I.refs.pagiBtnLeftDuble&&(T.page-=2,x()),t===I.refs.pagiBtnRight&&(T.page+=1,x()),t===I.refs.pagiBtnRightDuble&&(T.page+=2,x()))});var P=n("j1lrD"),E=n("bC0sB"),I=n("4Nugj");let T=N();function M(){let e=document.documentElement.clientWidth;return e>1439?9!==T.limit&&(T.limit=9,!0):e>767?8!==T.limit&&(T.limit=8,!0):e>319?6!==T.limit&&(T.limit=6,!0):void 0}function N(){if(null===localStorage.getItem("searchKey"))return{keyword:null,category:null,page:1,limit:6};{let e=JSON.parse(localStorage.getItem("searchKey"));return I.refs.ftInput.value=e.keyword,e.category&&(I.refs.ftBtn.innerHTML=e.category),"byABC"in e&&(I.refs.dropdownBtn.textContent="true"===e.byABC?"A to Z":"Z to A"),"byPrice"in e&&(I.refs.dropdownBtn.textContent="true"===e.byPrice?"Cheap":"Expensive"),"byPopularity"in e&&(I.refs.dropdownBtn.textContent="true"===e.byPopularity?"Not popular":"Popular"),e}}async function _(e){try{(0,P.spinnerPlay)();let t=await (0,c.default).getProductsByFilter(e);x(t)}catch(e){(0,I.refs).pagiContainer.classList.add("is-hidden"),(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,P.spinnerStop)()}}window.addEventListener("resize",t(o)(function(){M()&&x()},1e3)),M(),_(T),(async()=>{try{let e=(await (0,c.default).getProductsCategories()).map(e=>`<li class="select-li">${e}</li>`);e.push('<li class="select-li">Show all</li>'),(0,I.refs).ftSelect.insertAdjacentHTML("beforeend",e.join("\n"))}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}})(),(0,I.refs).ftBtn.addEventListener("click",function(){(0,I.refs).ftSelect.classList.toggle("is-open")}),(0,I.refs).ftBtn.addEventListener("mouseenter",()=>{(0,I.refs).ftSelect.classList.add("is-open"),(0,I.refs).ftSelect.addEventListener("mouseleave",()=>{(0,I.refs).ftSelect.classList.remove("is-open")})}),(0,I.refs).ftSelect.addEventListener("click",function(e){if("LI"!==e.target.nodeName)return;let t=e.target.closest(".select-li");I.refs.ftBtn.innerHTML=t.textContent,(0,I.refs).ftSelect.classList.remove("is-open"),T.page=1,T.category=t.textContent,"Show all"===t.textContent&&(T.category=null),localStorage.setItem("searchKey",JSON.stringify(T)),_(T)}),(0,I.refs).ftInput.addEventListener("input",t(l)(e=>{let t=e.target.value;T.page=1,T.keyword=t,localStorage.setItem("searchKey",JSON.stringify(T)),_(T)},700)),(0,I.refs).dropdownBtn.addEventListener("click",function(){(0,I.refs).dropdownList.classList.toggle("dropdown_list-visible"),(0,I.refs).dropdownList.classList.add("dropdownList")}),(0,I.refs).dropdownBtn.addEventListener("mouseenter",()=>{(0,I.refs).dropdownList.classList.add("dropdown_list-visible"),(0,I.refs).dropdownList.addEventListener("mouseleave",()=>{(0,I.refs).dropdownList.classList.remove("dropdown_list-visible")})}),(0,I.refs).dropdownList.addEventListener("mouseleave",()=>{(0,I.refs).dropdownList.classList.remove("dropdown_list-visible")}),document.addEventListener("click",function(e){e.target!==I.refs.dropdownBtn&&(0,I.refs).dropdownList.classList.remove("dropdown_list-visible"),e.target!==I.refs.ftBtn&&(0,I.refs).ftSelect.classList.remove("is-open")}),document.addEventListener("keydown",function(e){("Tab"===e.key||"Escape"===e.key)&&((0,I.refs).dropdownList.classList.remove("dropdown_list-visible"),(0,I.refs).dropdownList.classList.remove("dropdown_list-visible"))}),(0,I.refs).dropdownList.addEventListener("click",e=>{if("LI"!==e.target.nodeName)return;let t=e.target.closest(".dropdown_list-item");I.refs.dropdownBtn.textContent=t.textContent;let s=e.target.dataset.value,r=e.target.dataset.key;delete T.byABC,delete T.byPrice,delete T.byPopularity,"showAll"!==r&&(T[r]=s),localStorage.setItem("searchKey",JSON.stringify(T)),_(T)}),(0,I.refs).resetBtn.addEventListener("click",function(){localStorage.removeItem("searchKey"),T=N(),M(),I.refs.ftInput.value="",I.refs.ftBtn.innerHTML="Categories",I.refs.dropdownBtn.innerHTML="A to Z",_(T)});var c=n("2WlDD"),E=n("bC0sB"),j=n("j3HXm");let D=document.querySelector(".popular-list");async function H(e){if(e.preventDefault(),"UL"===e.target.nodeName)return;let t=e.target.closest("LI");if("BUTTON"===e.target.nodeName||"svg"===e.target.nodeName||"use"===e.target.nodeName){let t=e.target.closest(".popular-buy-btn");(0,j.switchSameBtn)(t.dataset.id),(0,j.putProductListItemInCart)(t.dataset.id)}else try{let e=await (0,c.default).getProductById(t.dataset.id);(0,E.openModalProductCard)(e)}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}}!async function(){let e=(await (0,c.default).getPopularProducts()).map(({category:e,img:s,name:r,popularity:i,size:n,_id:a})=>`
            <li class="popular-item" data-id="${a}">
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
                                    Size: <span class="popular-item-title-name">${n}</span>
                                </p>
                                <p class="popular-item-title">
                                    Popularity: <span class="popular-item-title-name">${i}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    ${function(e){let s=localStorage.getItem("CART"),r=`<button class="popular-buy-btn" data-id="${e}" aria-label="added to cart" disabled>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
              <use href="${t(B)}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon" width="12" height="12">
              <use href="${t(B)}#icon-check" class="icon"></use>
            </svg>
          </button>`,i=`<button class="popular-buy-btn" data-id="${e}" aria-label="button add to cart">
            <svg class="popular-buy-btn-icon" width="12" height="12">
                <use href="${t(B)}#icon-popular-shopping-cart" class="icon"></use>
            </svg>
            <svg class="popular-buy-btn-icon is-hidden" width="12" height="12">
                <use href="${t(B)}#icon-check" class="icon"></use>
            </svg>
        </button>`;return s.includes(e)?r:i}(a)}
                </a>
            </li>
        `).join("");D.insertAdjacentHTML("beforeend",e),D.addEventListener("click",H)}();var c=n("2WlDD"),E=n("bC0sB"),j=n("j3HXm");let O=document.querySelector(".js-product-discount");async function R(e){let t=e.target.closest(".button-discount");if(null!==t){(0,j.switchSameBtn)(t.dataset.id),(0,j.putProductListItemInCart)(t.dataset.id);return}let s=e.target.closest(".item-discount");if(null!==s)try{let e=await (0,c.default).getProductById(s.dataset.id);(0,E.openModalProductCard)(e)}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}}document.querySelector(".js-cart-quantity"),(async()=>{try{let e=await (0,c.default).getDiscountProducts(),s=[];e.length>2&&(s=function(e,t=2){return[...e].sort(()=>.5-Math.random()).slice(0,t)}(e)),function(e){let s=e.map(({_id:e,name:s,img:r,category:i,price:n,size:a,is10PercentOff:o,popularity:c})=>`   <li class="item-discount" data-id="${e}">
      <div class="discount-image-container">
      <img src="${r}" alt="${i}" width="114" class="discout-image" loading="lazy"/>
      </div>
        <svg width=60 height=60 class="discount-icon">
          <use href="${t(B)}#icon-discount"></use>
        </svg>
        <div class="block-discount">
      <h3 class="tittle-product-discount">${s}</h3>
      <p class="discount-price">$${n}</p>
      ${function(e){let s=localStorage.getItem("CART"),r=`<button class="button-discount" data-id="${e}" aria-label="added to cart" disabled>
          <svg class="pbutton-svg-discount is-hidden" width="18" height="18">
            <use href="${t(B)}#icon-shopping-cart" class="icon"></use>
          </svg>
            <svg class="product-icon-cart" width="18" height="18">
            <use href="${t(B)}#icon-check" class="icon"></use>
          </svg>
        </button>`,i=`<button class="button-discount" data-id="${e}" aria-label="button add to cart">
          <svg class="button-svg-discount" width="18" height="18">
            <use href="${t(B)}#icon-shopping-cart" class="icon"></use>
          </svg>
          <svg class="product-icon-cart is-hidden" width="18" height="18">
            <use href="${t(B)}#icon-check" class="icon"></use>
          </svg>
        </button>`;return s.includes(e)?r:i}(e)}
        </div>
    </li>`).join("");O.innerHTML=s,O.addEventListener("click",R)}(s)}catch(e){(0,E.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}})(),n("7hKzD"),n("bC0sB");let A=document.querySelector(".js-scroll-up-btn"),W=document.querySelector(".js-hero-container").getBoundingClientRect().height;document.addEventListener("scroll",t(o)(()=>{if(window.scrollY>W/2)return A.classList.add("show");A.classList.remove("show")},500)),A.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})})}();
//# sourceMappingURL=index.a7888ce4.js.map
