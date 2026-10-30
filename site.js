const WA='2349033355536';
const pages=[['/','Home','home'],['/services','Services','services'],['/eduportal','EduPortal','edu'],['/twine','Twine','twine'],['/about','About & Contact','about']];
const cur=document.body.dataset.page;
document.body.insertAdjacentHTML('afterbegin',`<header><div class="wrap"><a class="logo" href="/">UNIVERSAL<span>.</span> SYSTEM SUPPORT</a><nav id="nav">${pages.map(p=>`<a href="${p[0]}" class="${p[2]===cur?'on':''}">${p[1]}</a>`).join('')}</nav><button class="burger" aria-label="Menu" onclick="document.getElementById('nav').classList.toggle('open')">☰</button></div></header>`);
document.body.insertAdjacentHTML('beforeend',`<footer><div class="wrap"><div class="fg"><div><h4>Universal System Support</h4><p>Digital entrepreneurship, business analysis and software solutions that help businesses scale.</p></div><div><h4>Explore</h4>${pages.map(p=>`<a href="${p[0]}">${p[1]}</a>`).join('')}</div><div><h4>Connect</h4><a href="https://wa.me/${WA}" target="_blank">WhatsApp +234 903 335 5536</a><a href="mailto:universals.support@gmail.com">universals.support@gmail.com</a><a href="https://x.com/smogonline" target="_blank">X / Twitter</a><a href="https://www.linkedin.com/in/oluwasegun-adeyemo-978332287" target="_blank">LinkedIn</a></div></div><p>© 2026 Universal System Support. All rights reserved.</p></div></footer>`);
document.querySelectorAll('form[data-wa]').forEach(f=>f.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(f);
  const lines=[...d.entries()].filter(x=>x[1]).map(x=>`${x[0]}: ${x[1]}`).join('\n');
  window.open(`https://wa.me/${WA}?text=${encodeURIComponent(f.dataset.wa+'\n\n'+lines)}`,'_blank');
}));
