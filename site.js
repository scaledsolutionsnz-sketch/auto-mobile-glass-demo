const m=document.querySelector('.menu'),n=document.querySelector('.navlinks');if(m&&n)m.onclick=()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o);n.style.display=o?'grid':''};
