(function(){
  const toggle = document.querySelector('[data-action="toggle-translation"]');
  if(toggle){
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('hide-translation');
    });
  }
  // Smooth scroll for anchor links in sidebar
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length>1 && document.querySelector(id)){
        e.preventDefault();
        document.querySelector(id).scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
})();