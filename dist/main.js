(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}const t=function(){const t=document.createElement("div");t.classList.add("home"),t.classList.add("main-item"),t.appendChild(function(){const t=document.createElement("div");return t.classList.add("welcome"),t.appendChild(e("Welcome to Dad Bod Grill!!!")),t.appendChild(e("Best grill in town!")),t.appendChild(function(){const e=document.createElement("img");return e.classList.add("welcomePic"),e.src="images/dad-bod-couple.jpg",e}()),t.appendChild(e("Everyone is welcome here, especially men who want to get pregnant!")),t}()),document.querySelector(".main").appendChild(t)};function n(e,t,n){const d=document.createElement("div");d.classList.add("menu-item"),d.appendChild(function(e){const t=document.createElement("img");return t.classList.add("menu-item-img"),t.src=e,t}(n));const o=document.createElement("p");o.classList.add("menu-item-name"),o.textContent=e;const a=document.createElement("p");return a.classList.add("menu-item-description"),a.textContent=t,d.appendChild(o),d.appendChild(a),d}function d(){const e=document.createElement("div");e.classList.add("header");const d=document.createElement("h1");return d.textContent="Dad bod grill",e.appendChild(d),e.appendChild(function(){const e=document.createElement("div");e.classList.add("navbar");const d=document.createElement("button");d.setAttribute("id","homeButton"),d.classList.add("navButton"),d.textContent="Home",d.addEventListener("click",(()=>{o(),t()}));const a=document.createElement("button");a.setAttribute("id","menuButton"),a.classList.add("navButton"),a.textContent="Menu",a.addEventListener("click",(()=>{o(),function(){const e=document.createElement("div");e.classList.add("menu"),e.classList.add("main-item"),e.appendChild(n("Pulled pork","Low and slow pulled pork, smoked with local apple wood","images/pulledpork.png")),e.appendChild(n("Pulled pork","Low and slow pulled pork, smoked with local apple wood","images/pulledpork.png")),e.appendChild(n("Pulled pork","Low and slow pulled pork, smoked with local apple wood","images/pulledpork.png")),e.appendChild(n("Pulled pork","Low and slow pulled pork, smoked with local apple wood","images/pulledpork.png")),e.appendChild(n("Pulled pork","Low and slow pulled pork, smoked with local apple wood","images/pulledpork.png")),document.querySelector(".main").appendChild(e)}()}));const c=document.createElement("button");return c.setAttribute("id","contactButton"),c.classList.add("navButton"),c.textContent="Contact",c.addEventListener("click",(()=>{o(),function(){const e=document.createElement("div");e.classList.add("contact"),e.classList.add("main-item"),e.appendChild(function(e,t,n){const d=document.createElement("div");d.classList.add("contact-wrapper");const o=document.createElement("div");o.classList.add("phone-info");const a=document.createElement("img");a.classList.add("icon"),a.src="images/phone.svg";const c=document.createElement("p");c.classList.add("phone"),c.textContent="123 323 345",o.appendChild(a),o.appendChild(c);const l=document.createElement("div");l.classList.add("address-info");const s=document.createElement("img");s.classList.add("icon"),s.src="images/home.svg";const i=document.createElement("p");return i.classList.add("address"),i.textContent="Suur-Karja 8, Tallinn",l.appendChild(s),l.appendChild(i),d.appendChild(o),d.appendChild(l),d.appendChild(function(e){const t=document.createElement("img");return t.classList.add("contact-img"),t.src=e,t}("images/address.png")),d}()),document.querySelector(".main").appendChild(e)}()})),e.appendChild(d),e.appendChild(a),e.appendChild(c),e}()),e}function o(){const e=document.querySelector(".main"),t=document.querySelector(".main-item");e.removeChild(t)}!function(){const e=document.querySelector("#content");e.appendChild(d()),e.appendChild(function(){const e=document.createElement("div");return e.classList.add("main"),e}()),t(),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=document.createElement("p");return t.textContent="Marko Kask 2023",e.appendChild(t),e}())}()})();