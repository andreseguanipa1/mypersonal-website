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
    nav:false,
    dots:false,          //false, si se quieren quitar los puntos en la parte de abajo
    autoplay:true,      //true, si se quiere que el slide pase automaticamente
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        }
    }
})

window.addEventListener('load', function(){
    new Splide('#splideExperience', {
        type   : 'loop',
        pauseOnFocus: false,
        perPage: 6,
        autoplay: true,
        interval: 3000,
        cover: true,
        lazyLoad: "sequential",
        height: 230,
        with: 250,
        breakpoints: {

            500: {
                perPage: 1,
                height: 300,
            },

            620: {
                perPage: 1,
                height: 370,
            },

            755: {
                perPage: 2,
                height: 270,
            },


            920: {
                perPage: 3,
                height: 250,
            },

            1200: {perPage: 4},
            1380: {perPage: 5},
            1550: {perPage: 6},
        }

      }).mount();
});

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
 

