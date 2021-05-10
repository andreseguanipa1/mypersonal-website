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
            <p class="txt-pro">Heroku: <a class="txt-pro" href="${element.linkheroku}" target="_blank">${element.linkherokufront}</a></p>`

        } 

    });

    document.getElementById('projects').innerHTML = projectsHTML;
}

window.onload = async() => {
    const projects = await (await fetch("/projects")).json();
    displayProjects(projects);
    AOS.init();

}
