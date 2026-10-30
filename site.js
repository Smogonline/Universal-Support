const WA='2349033355536';
const pages=[['/','Home','home'],['/services','Services','services'],['/eduportal','EduPortal','edu'],['/twine','Twine','twine'],['/about','About & Contact','about']];
const cur=document.body.dataset.page;
let cart=[];try{cart=JSON.parse(localStorage.getItem('uss_cart')||'[]')}catch(e){}
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap"><a class="logo" href="/">UNIVERSAL<span>.</span> SYSTEM SUPPORT</a><nav id="nav">${pages.map(p=>`<a href="${p[0]}" class="${p[2]===cur?'on':''}">${p[1]}</a>`).join('')}</nav><div class="hr"><button class="cartb" aria-label="Cart" onclick="toggleCart()">🛒<b id="cc">0</b></button><button class="burger" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button></div></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div class="fg"><div><h4>Universal System Support</h4><p>Digital entrepreneurship, business analysis and software solutions that help businesses scale.</p></div><div><h4>Explore</h4>${pages.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('')}</div><div><h4>Connect</h4><a href="https://wa.me/${WA}" target="_blank">WhatsApp +234 903 335 5536</a><a href="mailto:universals.support@gmail.com">universals.support@gmail.com</a><a href="https://x.com/smogonline" target="_blank">X / Twitter</a><a href="https://www.linkedin.com/in/oluwasegun-adeyemo-978332287" target="_blank">LinkedIn</a></div></div><p>© 2026 Universal System Support. All rights reserved.</p></div></footer>
<div class="ov" id="ov" onclick="toggleCart()"></div>
<aside class="cart" id="cart"><div class="chd"><h3>🛒 Your Cart</h3><button class="cx" onclick="toggleCart()" aria-label="Close">✕</button></div><div class="cbody" id="cbody"></div><div class="cfoot" id="cfoot"><div class="ct"><span>Total</span><strong id="ctot">₦0</strong></div><button class="btn g" style="width:100%" onclick="orderCart()">Order via WhatsApp</button><button class="btn o" style="width:100%;margin-top:8px" onclick="clearCart()">Clear Cart</button></div></aside>`);
function save(){try{localStorage.setItem('uss_cart',JSON.stringify(cart))}catch(e){}}
function toggleCart(){document.getElementById('cart').classList.toggle('on');document.getElementById('ov').classList.toggle('on')}
function add(id,n,p){const i=cart.find(x=>x.id===id);if(i)i.q++;else cart.push({id,n,p,q:1});save();render();if(!document.getElementById('cart').classList.contains('on'))toggleCart()}
function chg(id,d){const i=cart.find(x=>x.id===id);if(i){i.q=Math.max(1,i.q+d);save();render()}}
function rm(id){cart=cart.filter(x=>x.id!==id);save();render()}
function clearCart(){cart=[];save();render()}
function render(){
  const n=cart.reduce((s,i)=>s+i.q,0),c=document.getElementById('cc');
  c.textContent=n;c.style.display=n?'flex':'none';
  const b=document.getElementById('cbody'),f=document.getElementById('cfoot');
  if(!cart.length){b.innerHTML='<p class="ce">Your cart is empty.<br>Add a package from the Services page.</p>';f.style.display='none';return}
  f.style.display='block';
  b.innerHTML=cart.map(i=>`<div class="ci"><div><strong>${i.n}</strong><div class="cp">₦${(i.p*i.q).toLocaleString()}</div><div class="cq"><button onclick="chg('${i.id}',-1)">−</button><span>${i.q}</span><button onclick="chg('${i.id}',1)">+</button></div></div><button class="cx" onclick="rm('${i.id}')" aria-label="Remove">🗑</button></div>`).join('');
  document.getElementById('ctot').textContent='₦'+cart.reduce((s,i)=>s+i.p*i.q,0).toLocaleString();
}
function orderCart(){
  const t=cart.reduce((s,i)=>s+i.p*i.q,0);
  const m='Hello Universal System Support! I’d like to order:\n'+cart.map(i=>`• ${i.n} x${i.q} = ₦${(i.p*i.q).toLocaleString()}`).join('\n')+`\n\nTotal: ₦${t.toLocaleString()}\n\nPlease confirm details and payment.`;
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(m)}`,'_blank');
}
document.addEventListener('click',e=>{const b=e.target.closest('[data-add]');if(!b)return;const a=b.dataset.add.split('|');add(a[0],a[1],+a[2])});
render();
document.querySelectorAll('form[data-wa]').forEach(f=>f.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(f);
  const lines=[...d.entries()].filter(x=>x[1]).map(x=>`${x[0]}: ${x[1]}`).join('\n');
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(f.dataset.wa+'\n\n'+lines)}`,'_blank');
}));
