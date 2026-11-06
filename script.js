const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.textContent=open?'×':'☰';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const tabs=document.querySelectorAll('[data-tab]'),panels=document.querySelectorAll('[data-panel]');
function showTab(name){tabs.forEach(t=>t.classList.toggle('active',t.dataset.tab===name));panels.forEach(p=>p.classList.toggle('hidden',p.dataset.panel!==name));}
tabs.forEach(t=>t.addEventListener('click',()=>showTab(t.dataset.tab)));
document.querySelectorAll('[data-open]').forEach(a=>a.addEventListener('click',()=>showTab(a.dataset.open)));
document.getElementById('why').addEventListener('click',()=>{const p=document.getElementById('explain');p.classList.toggle('hidden');document.getElementById('why').textContent=p.classList.contains('hidden')?'Why number every box? ＋':'Why number every box? −';});
