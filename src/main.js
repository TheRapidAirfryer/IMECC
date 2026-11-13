(function(){
  var btn=document.getElementById('menu-btn'),nav=document.getElementById('nav');
  btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o);});
  nav.addEventListener('click',function(e){if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false');}});
  document.getElementById('year').textContent=new Date().getFullYear();
  var form=document.getElementById('contact-form'),hint=document.getElementById('f-hint');
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var n=form.nombre.value.trim(),m=form.mensaje.value.trim();
    if(!n||!m){hint.textContent='Escriba su nombre y una breve descripción del proyecto.';hint.style.color='var(--red)';return;}
    var t='Hola IMECC, soy '+n+(form.telefono.value.trim()?' (tel. '+form.telefono.value.trim()+')':'')+'.\nServicio: '+form.servicio.value+'\n'+m;
    var url='https://wa.me/50488366201?text='+encodeURIComponent(t);
    var w=window.open(url,'_blank','noopener');
    if(!w){hint.innerHTML='Abra este enlace para enviar su mensaje: <a href="'+url+'" target="_blank" rel="noopener">enviar por WhatsApp</a>.';}
    else{hint.textContent='Se abrió WhatsApp con su mensaje. Solo falta presionar enviar.';}
    hint.style.color='';
  });
})();
