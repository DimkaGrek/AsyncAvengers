!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},n.parcelRequired7c6=s);var i=s.register;i("iE7OH",function(e,n){t(e.exports,"register",function(){return r},function(t){return r=t});var r,a=new Map;r=function(t,e){for(var n=0;n<e.length-1;n+=2)a.set(e[n],{baseUrl:t,path:e[n+1]})}}),i("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return r},function(t){return r=t});var r,a={};r=function(t){var e=a[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[t]=e),e}}),s("iE7OH").register(s("aNJCr").getBundleURL("86U9d"),JSON.parse('["86U9d","cart.046a8f80.js","d9SZC","icons.b5315233.svg","1kkTF","cart.fb314f43.css","cjXpj","index.08957ea4.js","1kkTF","cart.fb314f43.css","2wL0j","index.runtime.2e65ce68.js"]'));var o=s("dCfNN");s("i8Q71");var c=s("b84Xv"),l=s("2WlDD"),d={};d=s("aNJCr").getBundleURL("86U9d")+"icons.b5315233.svg",s("7hKzD");var u=s("j1lrD"),p=s("bC0sB");let m={itemsList:document.querySelector(".js-items-list"),fullCart:document.querySelector(".js-container"),emptyCart:document.querySelector(".js-empty-cart"),quantityHeaderSpan:document.querySelectorAll(".js-cart-quantity"),quantityTitle:document.querySelector(".js-quantity-span"),deleteAllButton:document.querySelector(".js-delete-all-btn"),totalSpan:document.querySelector(".js-total-price"),form:document.querySelector(".js-form-checkout")},f=[];async function h(t){t.preventDefault(),(0,u.spinnerPlay)();let e="";new FormData(t.target).forEach(t=>{e=t});let n={};n.products=v("CART"),n.email=e;try{await (0,l.default).createOrder(n),(0,p.openModalSuccess)(),b("CART",[]),f=[],m.form.reset(),y(f)}catch(t){400===t.response.status?(0,p.openModalError)("Incorrect email","The email must be in format: johnsmith125@gmail.com"):(0,p.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,u.spinnerStop)()}}async function g(t){(0,u.spinnerPlay)();try{if(!f)return;let n=0,r=t.map(async t=>await (0,l.default).getProductById(t.productId)),a=await Promise.all(r);n=a.reduce((t,e)=>t+e.price,0);let s=a.map(({name:n,category:r,size:a,img:s,price:i,_id:o,is10PercentOff:c},l)=>`<li class="item-list" data-id="${o}">
            <div class="cart-product-img-container">
              <img
                class="cart-product-img"
                src="${s}"
                alt="product"
                width="64"
                height="64"
              />
       ${function(t){let n=`<svg class="cart-product-discount-icon" width="35" height="35">
          <use href="${e(d)}#icon-discount"></use>
        </svg> `;return t?n:""}(c)}
            </div>
            <div class="cart-product-container">
              <h3 class="cart-product-name">${n}</h3>
              <div class="cart-description-container">
                <p class="cart-product-description">
                  Category:
                  <span class="cart-product-description-accent"
                    >${r}</span
                  >
                </p>
                <p class="cart-product-description">
                  Size:
                  <span class="cart-product-description-accent">${a}</span>
                </p>
              </div>
              <p class="cart-product-price js-cart-product-price">$${i}</p>
            </div>

            <div class="border-container js-border-container">
              <div class="product-price-wrapper">
                <div class="quantity-span-container">
                  <span class="quantity-span">
                    <button
                      class="quantity-span-btn"
                      type="button"
                      data-action="decrement"
                    >
                      <svg class="cart-icon-minus" width="10" height="10" data-action="decrement" aria-label="decrease by one item">
                        <use href="${e(d)}#icon-minus" data-action="decrement"></use>
                      </svg></button
                    ><span class="js-amount-span">${t[l].amount}</span>
                    <button
                      class="quantity-span-btn"
                      type="button"
                      data-action="increment" aria-label="increase by one item"
                    >
                      <svg class="cart-icon-plus" width="14" height="14" data-action="increment">
                        <use href="${e(d)}#icon-plus" data-action="increment"></use>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <button class="delete-btn" type="button" data-action="delete" aria-label="button delete item">
              <svg class="cart-icon-delete" width="10" height="10" data-action="delete">
                <use href="${e(d)}#icon-close" class="icon" data-action="delete"></use>
              </svg>
            </button>
          </li>`).join("");m.itemsList.innerHTML=s,m.quantityTitle.textContent=`${a.length}`,m.totalSpan.textContent=`$${n.toFixed(2)}`,m.quantityHeaderSpan.forEach(t=>t.textContent=`${a.length}`),new c.default(m.itemsList,{autoHide:!1})}catch(t){m.fullCart.classList.add("is-hidden"),m.emptyCart.classList.remove("is-hidden"),(0,p.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,u.spinnerStop)()}}function y(t){return t?.length?(m.emptyCart.classList.add("is-hidden"),m.fullCart.classList.remove("is-hidden"),!1):(m.fullCart.classList.add("is-hidden"),m.emptyCart.classList.remove("is-hidden"),m.quantityHeaderSpan.forEach(t=>t.textContent="0"),!0)}function b(t,e){try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}}function v(t){try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}y(f=v("CART"))||(g(f),m.deleteAllButton.addEventListener("click",function(){m.itemsList.classList.add("scale-down-center"),setTimeout(()=>{b("CART",[]),y(f=[]),(0,u.spinnerStop)()},500)}),m.itemsList.addEventListener("click",async t=>{if("UL"===t.target.nodeName)return;"delete"===t.target.dataset.action&&function(t){let e=t.target.closest("LI"),n=e.dataset.id,r=v("CART").filter(t=>t.productId!==n);e.classList.add("slide-top"),setTimeout(()=>{e.remove();let t=0;m.allPricesofProducts=document.querySelectorAll(".js-cart-product-price"),m.allAmountOfProducts=document.querySelectorAll(".js-amount-span"),t=r.reduce((t,e,n)=>t+Number(m.allPricesofProducts[n].textContent.replace("$",""))*Number(m.allAmountOfProducts[n].textContent),0),m.quantityTitle.textContent=`${r.length}`,m.quantityHeaderSpan.forEach(t=>t.textContent=`${r.length}`),m.totalSpan.textContent=`$${t.toFixed(2)}`,b("CART",r),y(r)},500)}(t);let e=t.target.dataset.action;("increment"===e||"decrement"===e)&&function(t,e){let n=Number(t.target.closest(".js-border-container").previousElementSibling.lastElementChild.textContent.replace("$","")),r=t.target.closest("SPAN").firstElementChild.nextElementSibling,a=Number(r.textContent),s=t.target.closest("LI").dataset.id;if("decrement"===e){if(1===a)return;a-=1,m.totalSpan.textContent="$"+(Number(m.totalSpan.textContent.replace("$",""))-n).toFixed(2)}"increment"===e&&(a+=1,m.totalSpan.textContent="$"+(Number(m.totalSpan.textContent.replace("$",""))+n).toFixed(2)),r.textContent=a;let i=v("CART"),o=i.findIndex(t=>t.productId===s);i[o].amount=a,b("CART",i)}(t,e)}),m.form.addEventListener("submit",h));let S=document.querySelector(".js-scroll-up-btn");document.addEventListener("scroll",e(o)(()=>{if(window.scrollY>200)return S.classList.add("show");S.classList.remove("show")},500)),S.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})})}();
//# sourceMappingURL=cart.046a8f80.js.map
