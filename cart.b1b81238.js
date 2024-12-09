function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=e.parcelRequired7c6;null==a&&((a=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return n[t]=a,e.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){r[t]=e},e.parcelRequired7c6=a);var s=a.register;s("kyEFX",function(t,e){Object.defineProperty(t.exports,"register",{get:function(){return n},set:function(t){return n=t},enumerable:!0,configurable:!0});var n,r=new Map;n=function(t,e){for(var n=0;n<e.length-1;n+=2)r.set(e[n],{baseUrl:t,path:e[n+1]})}}),s("kBiqv",function(t,e){t.exports=new URL("icons.b5315233.svg",import.meta.url).toString()}),a("kyEFX").register(new URL("",import.meta.url).toString(),JSON.parse('["d3pfZ","cart.b1b81238.js","hm5VY","icons.b5315233.svg","3w4ql","index.7b3032e3.js","95c9t","index.runtime.ac937765.js"]'));var o=a("9OeKo");a("bUb57");var i=a("6M5dt"),c=a("kBiqv");a("epHO8");var l=a("04jNI"),d=a("bfxWz");const u={itemsList:document.querySelector(".js-items-list"),fullCart:document.querySelector(".js-container"),emptyCart:document.querySelector(".js-empty-cart"),quantityHeaderSpan:document.querySelectorAll(".js-cart-quantity"),quantityTitle:document.querySelector(".js-quantity-span"),deleteAllButton:document.querySelector(".js-delete-all-btn"),totalSpan:document.querySelector(".js-total-price"),form:document.querySelector(".js-form-checkout")};let p=[];async function m(t){if(t.preventDefault(),h(g("CART")))return;(0,l.spinnerPlay)();let e="";new FormData(t.target).forEach(t=>{e=t});let n={};n.products=g("CART"),n.email=e;try{await (0,i.default).createOrder(n),(0,d.openModalSuccess)(),y("CART",[]),p=[],u.form.reset(),h(p)}catch(t){400===t.response.status?(0,d.openModalError)("Incorrect email","The email must be in format: johnsmith125@gmail.com"):(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,l.spinnerStop)()}}async function f(e){(0,l.spinnerPlay)();try{if(!p)return;let n=e.map(async t=>await (0,i.default).getProductById(t.productId)),r=await Promise.all(n),a=r.map(({name:n,category:r,size:a,img:s,price:o,_id:i,is10PercentOff:l},d)=>`<li class="item-list" data-id="${i}">
            <div class="cart-product-img-container">
              <img
                class="cart-product-img"
                src="${s}"
                alt="product"
                width="64"
                height="64"
              />
       ${function(e){let n=`<svg class="cart-product-discount-icon" width="35" height="35">
          <use href="${t(c)}#icon-discount"></use>
        </svg> `;return e?n:""}(l)}
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
              <p class="cart-product-price js-cart-product-price">$${o}</p>
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
                        <use href="${t(c)}#icon-minus" data-action="decrement"></use>
                      </svg></button
                    ><span class="js-amount-span">${e[d].amount}</span>
                    <button
                      class="quantity-span-btn"
                      type="button"
                      data-action="increment" aria-label="increase by one item"
                    >
                      <svg class="cart-icon-plus" width="14" height="14" data-action="increment">
                        <use href="${t(c)}#icon-plus" data-action="increment"></use>
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>

            <button class="delete-btn" type="button" data-action="delete" aria-label="button delete item">
              <svg class="cart-icon-delete" width="10" height="10" data-action="delete">
                <use href="${t(c)}#icon-close" class="icon" data-action="delete"></use>
              </svg>
            </button>
          </li>`).join("");u.itemsList.innerHTML=a;let s=e.reduce((t,e)=>{let n=r.find(t=>t._id===e.productId);return n?t+n.price*e.amount:t},0).toFixed(2);u.totalSpan.textContent=`$${s}`}catch(t){u.fullCart.classList.add("is-hidden"),u.emptyCart.classList.remove("is-hidden"),(0,d.openModalError)("Server Issue","We're sorry, but it seems there's an issue with our server. Please try again later.")}finally{(0,l.spinnerStop)()}}function h(t){return t?.length?(u.emptyCart.classList.add("is-hidden"),u.fullCart.classList.remove("is-hidden"),!1):(u.fullCart.classList.add("is-hidden"),u.emptyCart.classList.remove("is-hidden"),u.quantityTitle.textContent="0",u.quantityHeaderSpan.forEach(t=>t.textContent="0"),window.scroll({top:0,behavior:"smooth"}),!0)}function y(t,e){try{let n=JSON.stringify(e);localStorage.setItem(t,n)}catch(t){console.error("Set state error: ",t.message)}}function g(t){try{let e=localStorage.getItem(t);return null===e?void 0:JSON.parse(e)}catch(t){console.error("Get state error: ",t.message)}}h(p=g("CART"))||(u.quantityTitle.textContent=`${p.length}`,u.quantityHeaderSpan.forEach(t=>t.textContent=`${p.length}`),f(p),u.deleteAllButton.addEventListener("click",function(){u.itemsList.classList.add("scale-down-center"),setTimeout(()=>{y("CART",[]),h(p=[]),(0,l.spinnerStop)()},500)}),u.itemsList.addEventListener("click",async t=>{if("UL"===t.target.nodeName)return;"delete"===t.target.dataset.action&&function(t){let e=t.target.closest("LI"),n=e.dataset.id,r=g("CART").filter(t=>t.productId!==n);e.classList.add("slide-top"),setTimeout(()=>{e.remove();let t=0;u.allPricesofProducts=document.querySelectorAll(".js-cart-product-price"),u.allAmountOfProducts=document.querySelectorAll(".js-amount-span"),t=r.reduce((t,e,n)=>t+Number(u.allPricesofProducts[n].textContent.replace("$",""))*Number(u.allAmountOfProducts[n].textContent),0),u.quantityTitle.textContent=`${r.length}`,u.quantityHeaderSpan.forEach(t=>t.textContent=`${r.length}`),u.totalSpan.textContent=`$${t.toFixed(2)}`,y("CART",r),h(r)},500)}(t);let e=t.target.dataset.action;("increment"===e||"decrement"===e)&&function(t,e){if(h(g("CART")))return;let n=Number(t.target.closest(".js-border-container").previousElementSibling.lastElementChild.textContent.replace("$","")),r=t.target.closest("SPAN").firstElementChild.nextElementSibling,a=Number(r.textContent),s=t.target.closest("LI").dataset.id;if("decrement"===e){if(1===a)return;a-=1,u.totalSpan.textContent="$"+(Number(u.totalSpan.textContent.replace("$",""))-n).toFixed(2)}"increment"===e&&(a+=1,u.totalSpan.textContent="$"+(Number(u.totalSpan.textContent.replace("$",""))+n).toFixed(2)),r.textContent=a;let o=g("CART"),i=o.findIndex(t=>t.productId===s);o[i].amount=a,y("CART",o)}(t,e)}),u.form.addEventListener("submit",m));const b=document.querySelector(".js-scroll-up-btn");document.addEventListener("scroll",t(o)(()=>{if(window.scrollY>200)return b.classList.add("show");b.classList.remove("show")},500)),b.addEventListener("click",()=>{window.scroll({top:0,behavior:"smooth"})});
//# sourceMappingURL=cart.b1b81238.js.map
