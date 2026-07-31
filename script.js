const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.primary-nav');
menuButton?.addEventListener('click',()=>{const isOpen=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(isOpen));});
document.querySelectorAll('.primary-nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const revealTargets=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});revealTargets.forEach(item=>observer.observe(item));}else{revealTargets.forEach(item=>item.classList.add('visible'));}
