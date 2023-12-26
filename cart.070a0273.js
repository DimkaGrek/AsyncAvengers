function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequired7c6=a);var s=a.register;s("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return n},set:function(t){return n=t},enumerable:!0,configurable:!0});var n,r=new Map;n=function(t,e){for(var n=0;n<e.length-1;n+=2)r.set(e[n],{baseUrl:t,path:e[n+1]})}}),s("kBiqv",function(t,e){t.exports=new URL("icons.b5315233.svg",import.meta.url).toString()}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.070a0273.js","hm5VY","icons.b5315233.svg","1kkTF","cart.fb314f43.css","eBb1I","index.78bb341e.js","1kkTF","cart.fb314f43.css","14klr","index.runtime.360d4df5.js"]'));var i=a("9OeKo");a("bUb57");var o=a("8O1yB"),c=a("6M5dt"),l=a("kBiqv");a("epHO8");var d=a("04jNI"),u=a("bfxWz");const p={itemsList:document.querySelector(".js-items-list"),fullCart:document.querySelector(".js-container"),emptyCart:document.querySelector(".js-empty-cart"),quantityHeaderSpan:document.querySelectorAll(".js-cart-quantity"),quantityTitle:document.querySelector(".js-quantity-span"),deleteAllButton:document.querySelector(".js-delete-all-btn"),totalSpan:document.querySelector(".js-total-price"),form:document.querySelector(".js-form-checkout")};let m=[];async function f(t){t.preventDefault(),(0,d.spinnerPlay)();let e="";new FormData(t.target).forEach(t=>{e=t});let n={};n.products=b("CART"),n.email=e;try{await (0,c.default).createOrder(n),(0,u.openModalSuccess)(),g("CART",[]),m=[],p.form.reset(),h(m)}catch(t){400===t.response.status?(0,u.openModalError)("Incorrect email","The email must be in format: johnsmith125@gmail.com"):(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,d.spinnerStop)()}}async function y(e){(0,d.spinnerPlay)();try{if(!m)return;let n=0,r=e.map(async t=>await (0,c.default).getProductById(t.productId)),a=await Promise.all(r);n=a.reduce((t,e)=>t+e.price,0);let s=a.map(({name:n,category:r,size:a,img:s,price:i,_id:o,is10PercentOff:c},d)=>`<li class="item-list" data-id="${o}">
            <div class="cart-product-img-container">
              <img
                class="cart-product-img"
                src="${s}"
                alt="product"
                width="64"
                height="64"
              />
       ${function(e){let n=`<svg class="cart-product-discount-icon" width="35" height="35">
          <use href="${t(l)}#icon-discount"></use>
        </svg> `;return e?n:""}(c)}
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
                        <use href="${t(l)}#icon-minus" data-action="decrement"></use>
                      </svg></button
                    ><span class="js-amount-span">${e[d].amount}</span>
                    <button
                      class="quantity-span-btn"
                      type="button"
                      data-action="increment" aria-label="increase by one item"
                    >
                      <svg class="cart-icon-plus" width="14" height="14" data-action="increment">
                        <use href="${t(l)}#icon-plus" data-action="increment"></use>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <button class="delete-btn" type="button" data-action="delete" aria-label="button delete item">
              <svg class="cart-icon-delete" width="10" height="10" data-action="delete">
                <use href="${t(l)}#icon-close" class="icon" data-action="delete"></use>
              </svg>
            </button>
          </li>`).join("");p.itemsList.innerHTML=s,p.quantityTitle.textContent=`${a.length}`,p.totalSpan.textContent=`$${n.toFixed(2)}`,p.quantityHeaderSpan.forEach(t=>t.textContent=`${a.length}`),new o.default(p.itemsList,{autoHide:!1})}catch(t){p.fullCart.classList.add("is-hidden"),p.emptyCart.classList.remove("is-hidden"),(0,u.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,d.spinnerStop)()}}function h(t){return t?.length?(p.emptyCart.classList.add("is-hidden"),p.fullCart.classList.remove("is-hidden"),!1):(p.fullCart.classList.add("is-hidden"),p.emptyCart.classList.remove("is-hidden"),p.quantityHeaderSpan.forEach(t=>t.textContent="0"),!0)}function g(t,e){try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}}function b(t){try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}h(m=b("CART"))||(y(m),p.deleteAllButton.addEventListener("click",function(){p.itemsList.classList.add("scale-down-center"),setTimeout(()=>{g("CART",[]),h(m=[]),(0,d.spinnerStop)()},500)}),p.itemsList.addEventListener("click",async t=>{if("UL"===t.target.nodeName)return;"delete"===t.target.dataset.action&&function(t){let e=t.target.closest("LI"),n=e.dataset.id,r=b("CART").filter(t=>t.productId!==n);e.classList.add("slide-top"),setTimeout(()=>{e.remove();let t=0;p.allPricesofProducts=document.querySelectorAll(".js-cart-product-price"),p.allAmountOfProducts=document.querySelectorAll(".js-amount-span"),t=r.reduce((t,e,n)=>t+Number(p.allPricesofProducts[n].textContent.replace("$",""))*Number(p.allAmountOfProducts[n].textContent),0),p.quantityTitle.textContent=`${r.length}`,p.quantityHeaderSpan.forEach(t=>t.textContent=`${r.length}`),p.totalSpan.textContent=`$${t.toFixed(2)}`,g("CART",r),h(r)},500)}(t);let e=t.target.dataset.action;("increment"===e||"decrement"===e)&&function(t,e){let n=Number(t.target.closest(".js-border-container").previousElementSibling.lastElementChild.textContent.replace("$","")),r=t.target.closest("SPAN").firstElementChild.nextElementSibling,a=Number(r.textContent),s=t.target.closest("LI").dataset.id;if("decrement"===e){if(1===a)return;a-=1,p.totalSpan.textContent="$"+(Number(p.totalSpan.textContent.replace("$",""))-n).toFixed(2)}"increment"===e&&(a+=1,p.totalSpan.textContent="$"+(Number(p.totalSpan.textContent.replace("$",""))+n).toFixed(2)),r.textContent=a;let i=b("CART"),o=i.findIndex(t=>t.productId===s);i[o].amount=a,g("CART",i)}(t,e)}),p.form.addEventListener("submit",f));const v=document.querySelector(".js-scroll-up-btn");document.addEventListener("scroll",t(i)(()=>{if(window.scrollY>200)return v.classList.add("show");v.classList.remove("show")},500)),v.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})});
//# sourceMappingURL=cart.070a0273.js.map
