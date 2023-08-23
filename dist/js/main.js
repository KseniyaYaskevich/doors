(()=>{"use strict";const e=e=>{let t=e.querySelectorAll('a[href], area[href], input:not([disabled]), \n  select:not([disabled]), textarea:not([disabled]), button:not([disabled]), \n  iframe, object, embed, [tabindex="0"], [contenteditable]');t=Array.prototype.slice.call(t);const c=t[0],a=t[t.length-1];c.focus(),e.addEventListener("keydown",(e=>{9===e.keyCode&&(e.shiftKey?document.activeElement===c&&(e.preventDefault(),a.focus()):document.activeElement===a&&(e.preventDefault(),c.focus()))}),{once:!0})},t=(e,t)=>localStorage.setItem(e,JSON.stringify(t)),c=e=>JSON.parse(localStorage.getItem(e))||[],a=()=>{const e=document.querySelectorAll(".cart__list"),t=document.querySelectorAll("#cart-counter"),a=c("cart");let s=0;e.forEach((e=>e.innerHTML="")),a.forEach((t=>{s+=t.count,e.forEach((e=>{e.append((e=>{const t=e.photo.replace(".jpg","_small.jpg"),c=(parseInt(e.price.split(" ").join(""))*e.count+"").replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 "),a=document.createElement("li");return a.classList.add("cart__item"),a.setAttribute("data-id",e.id),a.insertAdjacentHTML("beforeend",`\n    <img class="cart__image" src="${t}" width="56" height="60" alt="Фото двери ${e.title}">\n    <div class="cart__body">\n        <h3 class="cart__title text text--medium">${e.title}</h3>\n        <p class="cart__subtitle caption caption--medium">${e.subtitle}</p>\n    </div>\n    <div class="cart__inner">\n        <p class="cart__price text text--medium" data-price="${e.price}">${c} ₽</p>\n        <div class="cart__counter">\n            <button class="button cart__change cart__change--decrease">-</button>\n            <p class="cart__amount">${e.count}</p>\n            <button class="button cart__change cart__change--increase">+</button>\n        </div>\n    </div>\n  `),a})(t))}))})),t.forEach((e=>e.textContent=s)),(()=>{const e=document.querySelectorAll(".cart__sum"),t=document.querySelector("#cart").querySelectorAll(".cart__item");let c=0;t.forEach((e=>{const t=e.querySelector(".cart__price"),a=parseInt(t.firstChild.textContent.split(" ").join(""));c+=a}));const a=(c+"").replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g,"$1 ");e.forEach((e=>e.textContent=`Сумма заказа: ${a} ₽`))})()};(()=>{const t=document.querySelector(".page-body"),c=t.querySelector(".header"),a=c.querySelector(".tabs"),s=c.querySelectorAll(".tabs-nav__item"),r=c.querySelector(".tabs-content"),o=c.querySelectorAll(".tabs-content__item"),n=c.clientHeight+a.clientHeight;let i;a.addEventListener("click",(a=>{if(a.target.closest(".tabs-nav__item")){const l=a.target.closest(".tabs-nav__item");s.forEach(((a,s)=>{a===l?(a.classList.toggle("tabs-nav__item--active"),o[s].classList.toggle("tabs-content__item--active"),a.classList.contains("tabs-nav__item--active")?(t.classList.add("page-body--lock"),r.classList.add("tabs-content--visible"),r.style.height=`calc(100vh - ${n}px)`,i=document.activeElement,e(c)):(t.classList.remove("page-body--lock"),r.classList.remove("tabs-content--visible"),r.style.height="0px",i.focus())):(a.classList.remove("tabs-nav__item--active"),o[s].classList.remove("tabs-content__item--active"))}))}}))})(),(()=>{const t=document.querySelector(".page-body"),c=document.querySelectorAll(".request-call"),a=t.querySelector(".popup-call"),s=a.querySelector(".popup-dialog");let r;const o=e=>{e.target.closest(".contacts__button")&&t.classList.remove("page-body--lock"),a.classList.remove("popup--visible"),s.classList.remove("popup-dialog--visible"),r.focus()},n=c=>{t.classList.add("page-body--lock"),a.classList.add("popup--visible"),s.classList.add("popup-dialog--visible"),r=document.activeElement,e(a),a.addEventListener("click",(e=>{(e.target.closest(".popup__close")||e.target.classList.contains("popup"))&&o(c)})),a.addEventListener("keydown",(e=>{27!==e.keyCode&&"Escape"!==e.key&&"Esc"!==e.key||o(c)}))};c.forEach((e=>e.addEventListener("click",n)))})(),(()=>{const e=document.querySelectorAll("input[name=phone]"),t=e=>{const t="+7 (___) ___-__-__",c=t.replace(/\D/g,"");let a=e.target.value.replace(/\D/g,""),s=0;c.length>=a.length&&(a=c),e.target.value=t.replace(/./g,(e=>/[_\d]/.test(e)&&s<a.length?a.charAt(s++):s>=a.length?"":e)),((e,t)=>{if(t.focus(),t.setSelectionRange)t.setSelectionRange(e,e);else if(t.createTextRange){const c=t.createTextRange();c.collapse(!0),c.moveEnd("character",e),c.moveStart("character",e),c.select()}})(e.target.value.length,e.target)};e.forEach((e=>{e.addEventListener("focus",(()=>{e.value="+7 "})),e.addEventListener("input",t,!1)}))})(),(()=>{const e=document.querySelector(".popup-call"),t=e.querySelector(".popup__form"),c=t.querySelectorAll("input"),a=e.querySelector(".form__checkbox-input"),s=e.querySelector(".form__button");try{t.addEventListener("submit",(e=>{e.preventDefault(),(e=>{const t=new FormData(e),a={};t.forEach(((e,t)=>{a[t]=e})),(e=>{let t=!0;return e.forEach((e=>{"phone"===e.getAttribute("name")&&(e.value.match(/\+7\s?[(]{0,1}[0-9]{3}[)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}/)?e.classList.remove("form__input--error"):(e.classList.add("form__input--error"),t=!1)),"name"===e.getAttribute("name")&&(e.value.match(/^[а-яёa-z]+$/gi)?e.classList.remove("form__input--error"):(e.classList.add("form__input--error"),t=!1)),"checkbox"===e.getAttribute("name")&&(e.checked?e.classList.remove("form__input--error"):(e.classList.add("form__input--error"),t=!1))})),t})(c)&&(async e=>{try{const t=await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});return await t.json()}catch(e){console.log(e.message)}})(a).then((e=>{console.log(e),c.forEach((e=>{e.value="",e.classList.remove("form__input--error")}))})).catch((e=>{console.log(e.message)}))})(t)})),t.addEventListener("input",(e=>{e.preventDefault(),c.forEach((e=>{e.classList.contains("form__input--error")&&e.classList.remove("form__input--error")}))}))}catch(e){console.log(e.message)}a.addEventListener("click",(()=>{a.checked?s.removeAttribute("disabled"):s.setAttribute("disabled",!0)}))})(),(()=>{const e=document.querySelector(".page-body"),t=e.querySelector(".header"),c=e.querySelector(".categories"),a=c.querySelectorAll(".categories-nav__item"),s=c.querySelectorAll(".categories-content__item"),r=c=>{c.target.closest(".header--active")&&(c.target.closest(".categories")||(e.classList.remove("page-body--lock"),t.classList.remove("header--active"),a.forEach(((e,t)=>{e.classList.remove("categories-nav__item--active"),s[t].classList.remove("categories-content__item--active")}))))};c.addEventListener("click",(c=>{if(c.target.closest(".categories-nav__item")){const o=c.target.closest(".categories-nav__item");a.forEach(((c,a)=>{c===o?(c.classList.toggle("categories-nav__item--active"),s[a].classList.toggle("categories-content__item--active"),c.classList.contains("categories-nav__item--active")?(e.classList.add("page-body--lock"),t.classList.add("header--active"),window.addEventListener("click",r,!0)):(e.classList.remove("page-body--lock"),t.classList.remove("header--active"))):(c.classList.remove("categories-nav__item--active"),s[a].classList.remove("categories-content__item--active"))}))}}))})(),(()=>{const e=document.querySelector(".cards__list");(async e=>{const t=await fetch("db/cards.json");return await t.json()})().then((t=>{t.forEach((t=>{e.append((e=>{const t=document.createElement("li");return t.classList.add("cards__item","card"),t.setAttribute("data-id",e.code),t.insertAdjacentHTML("beforeend",`\n            <div class="card__header">\n                <p class="card__hit">Хит продаж</p>\n                <div>\n                    <button class="button"><img src="images/compare.svg" alt=""></button>\n                    <button class="button"><img src="images/heart.svg" alt=""></button>\n                </div>\n            </div>\n            <img class="card__img" src="images/${e.photo}.jpg" alt="${e.type} ${e.name}">\n            <div class="card__body">\n                <p class="card__stock text text--medium">${e.stock?"В наличии":"Нет в наличии"}\n                    <span class="card__code">Арт.: ${e.code}</span>\n                </p>\n                <h3 class="card__title title title--medium">${e.name}</h3>\n                <p class="card__subtitle">${e.type}</p>\n                <div class="card__button-wrapper">\n                    <button class="button card__button-add">\n                        <svg class="card__icon" width="24" height="24">\n                            <use xlink:href="images/sprite.svg#card"></use>\n                        </svg>\n                    </button>\n                    <p class="card__prices">\n                        <span class="card__discount title title--medium">${e.discount}<span> ₽</span></span>\n                        <span class="card__price">${e.price}<span> ₽</span></span>\n                    </p>\n                </div>\n                <a class="card__link text text--medium" href="#!">Купить в один клик</a>\n            </div>\n        `),t})(t))}))})).catch((e=>console.log(e)))})(),document.querySelector(".cards__list").addEventListener("click",(e=>{if(e.target.closest(".card__button-add")){const s=e.target.closest(".card"),r=s.getAttribute("data-id"),o=c("cart");let n=!1;for(let e=0;e<o.length;e++){if(o[e].id===r){o[e].count++,t("cart",o),a(),n=!0;break}n=!1}if(!n){const e={photo:s.querySelector(".card__img").src,title:s.querySelector(".card__title").textContent,subtitle:s.querySelector(".card__subtitle").textContent,price:s.querySelector(".card__discount").firstChild.textContent,id:s.getAttribute("data-id"),count:1};o.push(e),t("cart",o),a()}}})),(()=>{const e=document.querySelectorAll(".cart__list"),s=e=>{const s=c("cart");if(e.target.closest(".cart__change")){const c=e.target.closest(".cart__item"),r=c.getAttribute("data-id");if(e.target.closest(".cart__change--decrease"))for(let e=0;e<s.length;e++)s[e].id===r&&(s[e].count<=1?(c.remove(),s.splice(e,1),t("cart",s)):(s[e].count--,t("cart",s)));if(e.target.closest(".cart__change--increase"))for(let e=0;e<s.length;e++)s[e].id===r&&(s[e].count++,t("cart",s));a()}};e.forEach((e=>e.addEventListener("click",s)))})(),a()})();