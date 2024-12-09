!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in a){var e=a[t];delete a[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){a[t]=e},n.parcelRequired7c6=s);var i=s.register;i("iE7OH",function(e,n){t(e.exports,"register",function(){return r},function(t){return r=t});var r,a=new Map;r=function(t,e){for(var n=0;n<e.length-1;n+=2)a.set(e[n],{baseUrl:t,path:e[n+1]})}}),i("aNJCr",function(e,n){t(e.exports,"getBundleURL",function(){return r},function(t){return r=t});var r,a={};r=function(t){var e=a[t];return e||(e=function(){try{throw Error()}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[t]=e),e}}),s("iE7OH").register(s("aNJCr").getBundleURL("86U9d"),JSON.parse('["86U9d","cart.3a25f972.js","d9SZC","icons.b5315233.svg","iZh0S","index.578b7fdd.js","fGTly","index.runtime.34a4d748.js"]'));var o=s("dCfNN");s("i8Q71");var c=s("2WlDD"),l={};l=s("aNJCr").getBundleURL("86U9d")+"icons.b5315233.svg",s("7hKzD");var d=s("j1lrD"),u=s("bC0sB");let p={itemsList:document.querySelector(".js-items-list"),fullCart:document.querySelector(".js-container"),emptyCart:document.querySelector(".js-empty-cart"),quantityHeaderSpan:document.querySelectorAll(".js-cart-quantity"),quantityTitle:document.querySelector(".js-quantity-span"),deleteAllButton:document.querySelector(".js-delete-all-btn"),totalSpan:document.querySelector(".js-total-price"),form:document.querySelector(".js-form-checkout")},m=[];async function f(t){if(t.preventDefault(),y(v("CART")))return;(0,d.spinnerPlay)();let e="";new FormData(t.target).forEach(t=>{e=t});let n={};n.products=v("CART"),n.email=e;try{await (0,c.default).createOrder(n),(0,u.openModalSuccess)(),g("CART",[]),m=[],p.form.reset(),y(m)}catch(t){400===t.response.status?(0,u.openModalError)("Incorrect email","The email must be in format: johnsmith125@gmail.com"):(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,d.spinnerStop)()}}async function h(t){(0,d.spinnerPlay)();try{if(!m)return;let n=t.map(async t=>await (0,c.default).getProductById(t.productId)),r=await Promise.all(n),a=r.map(({name:n,category:r,size:a,img:s,price:i,_id:o,is10PercentOff:c},d)=>`<li class="item-list" data-id="${o}">
            <div class="cart-product-img-container">
              <img
                class="cart-product-img"
                src="${s}"
                alt="product"
                width="64"
                height="64"
              />
       ${function(t){let n=`<svg class="cart-product-discount-icon" width="35" height="35">
          <use href="${e(l)}#icon-discount"></use>
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
                        <use href="${e(l)}#icon-minus" data-action="decrement"></use>
                      </svg></button
                    ><span class="js-amount-span">${t[d].amount}</span>
                    <button
                      class="quantity-span-btn"
                      type="button"
                      data-action="increment" aria-label="increase by one item"
                    >
                      <svg class="cart-icon-plus" width="14" height="14" data-action="increment">
                        <use href="${e(l)}#icon-plus" data-action="increment"></use>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <button class="delete-btn" type="button" data-action="delete" aria-label="button delete item">
              <svg class="cart-icon-delete" width="10" height="10" data-action="delete">
                <use href="${e(l)}#icon-close" class="icon" data-action="delete"></use>
              </svg>
            </button>
          </li>`).join("");p.itemsList.innerHTML=a;let s=t.reduce((t,e)=>{let n=r.find(t=>t._id===e.productId);return n?t+n.price*e.amount:t},0).toFixed(2);p.totalSpan.textContent=`$${s}`}catch(t){p.fullCart.classList.add("is-hidden"),p.emptyCart.classList.remove("is-hidden"),(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,d.spinnerStop)()}}function y(t){return t?.length?(p.emptyCart.classList.add("is-hidden"),p.fullCart.classList.remove("is-hidden"),!1):(p.fullCart.classList.add("is-hidden"),p.emptyCart.classList.remove("is-hidden"),p.quantityTitle.textContent="0",p.quantityHeaderSpan.forEach(t=>t.textContent="0"),window.scroll({top:0,behavior:"smooth"}),!0)}function g(t,e){try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}}function v(t){try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}y(m=v("CART"))||(p.quantityTitle.textContent=`${m.length}`,p.quantityHeaderSpan.forEach(t=>t.textContent=`${m.length}`),h(m),p.deleteAllButton.addEventListener("click",function(){p.itemsList.classList.add("scale-down-center"),setTimeout(()=>{g("CART",[]),y(m=[]),(0,d.spinnerStop)()},500)}),p.itemsList.addEventListener("click",async t=>{if("UL"===t.target.nodeName)return;"delete"===t.target.dataset.action&&function(t){let e=t.target.closest("LI"),n=e.dataset.id,r=v("CART").filter(t=>t.productId!==n);e.classList.add("slide-top"),setTimeout(()=>{e.remove();let t=0;p.allPricesofProducts=document.querySelectorAll(".js-cart-product-price"),p.allAmountOfProducts=document.querySelectorAll(".js-amount-span"),t=r.reduce((t,e,n)=>t+Number(p.allPricesofProducts[n].textContent.replace("$",""))*Number(p.allAmountOfProducts[n].textContent),0),p.quantityTitle.textContent=`${r.length}`,p.quantityHeaderSpan.forEach(t=>t.textContent=`${r.length}`),p.totalSpan.textContent=`$${t.toFixed(2)}`,g("CART",r),y(r)},500)}(t);let e=t.target.dataset.action;("increment"===e||"decrement"===e)&&function(t,e){if(y(v("CART")))return;let n=Number(t.target.closest(".js-border-container").previousElementSibling.lastElementChild.textContent.replace("$","")),r=t.target.closest("SPAN").firstElementChild.nextElementSibling,a=Number(r.textContent),s=t.target.closest("LI").dataset.id;if("decrement"===e){if(1===a)return;a-=1,p.totalSpan.textContent="$"+(Number(p.totalSpan.textContent.replace("$",""))-n).toFixed(2)}"increment"===e&&(a+=1,p.totalSpan.textContent="$"+(Number(p.totalSpan.textContent.replace("$",""))+n).toFixed(2)),r.textContent=a;let i=v("CART"),o=i.findIndex(t=>t.productId===s);i[o].amount=a,g("CART",i)}(t,e)}),p.form.addEventListener("submit",f));let b=document.querySelector(".js-scroll-up-btn");document.addEventListener("scroll",e(o)(()=>{if(window.scrollY>200)return b.classList.add("show");b.classList.remove("show")},500)),b.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})})}();
//# sourceMappingURL=cart.3a25f972.js.map
