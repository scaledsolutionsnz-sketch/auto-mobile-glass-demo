(() => {
 const rail=document.querySelector('.hero-review-rail'); if(!rail)return;
 const items=[...rail.querySelectorAll('.hero-review-item')],pause=rail.querySelector('.review-pause');
 let index=0,paused=matchMedia('(prefers-reduced-motion: reduce)').matches,hover=false,focus=false;
 function sync(){pause.textContent=paused?'Play':'Pause';items.forEach((item,i)=>item.setAttribute('aria-hidden',String(i!==index)));}
 pause.addEventListener('click',()=>{paused=!paused;sync()});
 rail.addEventListener('mouseenter',()=>hover=true);rail.addEventListener('mouseleave',()=>hover=false);
 rail.addEventListener('focusin',()=>focus=true);rail.addEventListener('focusout',e=>focus=rail.contains(e.relatedTarget));
 setInterval(()=>{if(paused||hover||focus||document.hidden)return;items[index].classList.remove('is-active');index=(index+1)%items.length;items[index].classList.add('is-active');sync()},7000);sync();
})();
