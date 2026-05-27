import { renderDashboard } from './dashboard.js';
const nav=document.getElementById('navbar');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>20));
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry,i)=>{
    if(entry.isIntersecting){
      const el=entry.target;
      const siblings=Array.from(el.parentNode.children).filter(c=>c.classList.contains('animate'));
      const delay=siblings.indexOf(el)*90;
      setTimeout(()=>el.classList.add('animated'),delay);
      observer.unobserve(el);
    }
  });
},{threshold:.12});
document.querySelectorAll('.animate').forEach(el=>observer.observe(el));
document.querySelectorAll('.step').forEach(s=>{
  s.addEventListener('click',()=>{
    document.querySelectorAll('.step').forEach(x=>x.classList.remove('active'));
    s.classList.add('active');
  });
});
document.querySelectorAll('.cohort-card').forEach(c=>{
  c.addEventListener('click',()=>{
    document.querySelectorAll('.cohort-card').forEach(x=>x.classList.remove('active'));
    c.classList.add('active');
  });
});
function showRole(role){
  document.querySelectorAll('.role-desc-block').forEach(b=>b.classList.remove('active'));
  document.querySelectorAll('.rtab').forEach(t=>t.classList.remove('active'));
  const block=document.getElementById('role-'+role);
  if(block)block.classList.add('active');
  event.target.classList.add('active');
}
import { observeCards } from './dashboard.js';