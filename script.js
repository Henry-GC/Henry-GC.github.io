//Funcion de SMOTH SCROLL
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Funcion de FADE APPEAR
function fadeAppear(entries,observer){
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            // observer.unobserve(entry.target);
        }else{
            entry.target.style.opacity = "0";
        }
    })
}
const opp = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
}
const observer = new IntersectionObserver(fadeAppear, opp);
const fades = document.querySelectorAll(".fades");
fades.forEach(fade => observer.observe(fade));

//Boton de MODO NOCHE
const modeSwitch = document.getElementById('modeSwitch');
modeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
    const fly = document.getElementById('firefly');
    if (fly.style.display === 'block') {
        fly.style.display = 'none';
    } else {
        setTimeout(() => {
            fly.style.display = 'block';
        }, 300);
    }
});

// Funciones del FORMULARIO
const formulario = document.getElementById('formulario');
formulario.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && formulario.name.value && formulario.email.value && formulario.comments.value) {
        event.preventDefault();
        formulario.submit();
    }
  });
formulario.addEventListener('submit', function(event) {
  if (!formulario.name.value || !formulario.email.value || !formulario.comments.value) {
    event.preventDefault();
    alert('Por favor completa todos los campos obligatorios.');
  }
});

