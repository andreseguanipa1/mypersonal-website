function displayProjects(projects) {

    let projectsHTML = '';

    projects.forEach(element => {

        if(element.linkheroku === null){
            projectsHTML +=
                `<br>
                <h4 class="txt-pro">${element.name}</h4>
                <p class="txt-pro">${element.description}</p>
                <p class="txt-pro">GitHub: <a class="txt-pro" href="${element.linkgit}" target="_blank">${element.linkgitfront}</a></p>`

        } else{
            projectsHTML +=
            `<br>
            <h4 class="txt-pro">${element.name}</h4>
            <p class="txt-pro">${element.description}</p>
            <p class="txt-pro">GitHub: <a class="txt-pro" href="${element.linkgit}" target="_blank">${element.linkgitfront}</a></p>
            <p class="txt-pro">Link: <a class="txt-pro" href="${element.linkheroku}" target="_blank">${element.linkherokufront}</a></p>`

        } 

    });

    document.getElementById('projects').innerHTML = projectsHTML;
}

//////////////////////////////////////////////////////////////////////////////////////// Al cargar la pagina...

window.onload = async() => {
    const projects = await (await fetch("/projects")).json();
    displayProjects(projects);
    AOS.init();

}

//////////////////////////////////////////////////////////////////////////////////////// Slide

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    dots:false,          //false, si se quieren quitar los puntos en la parte de abajo
    autoplay:true,      //true, si se quiere que el slide pase automaticamente
    autoplayTimeout: 2000,
    responsive:{
        0:{
            items:1
        },
        450:{
            items:2,
        },
        830:{
            items:3
        },
        1000:{
            items:4
        },
        1200:{
            items:5
        },
        1550:{
            items:6,
        }
    }
})

//////////////////////////////////////////////////////////////////////////////////////// Card


const cards = document.querySelectorAll('.card');

function transition() {
  if (this.classList.contains('activo')) {
    this.classList.remove('activo')
  } else {
    this.classList.add('activo');
  }
}

cards.forEach(card => card.addEventListener('click', transition));
 

