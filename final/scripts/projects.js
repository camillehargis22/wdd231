const completedBtn = document.querySelector('#completedProjects');
const currentBtn = document.querySelector('#currentProjects');
const futureBtn = document.querySelector('#futureProjects');
const cards = document.querySelector('#projectCards');
let data;

completedBtn.addEventListener("click", () => {
    getCompletedProjectsData();
});

currentBtn.addEventListener("click", () => {
    getCurrentProjectsData();
});

futureBtn.addEventListener("click", () => {
    getFutureProjectsData();
});

async function getCompletedProjectsData() {
    const response = await fetch('./data/projects.json');
    data = await response.json();
    let completedProjects = data.projects.filter(project => project.progress == "Completed");
    displayProjects(completedProjects);
}

async function getCurrentProjectsData() {
    const response = await fetch('./data/projects.json');
    const data = await response.json();
    let currentProjects = data.projects.filter(project => project.progress == "Current");
    displayProjects(currentProjects);
}

async function getFutureProjectsData() {
    const response = await fetch('./data/projects.json');
    const data = await response.json();
    let futureProjects = data.projects.filter(project => project.progress == "Future");
    displayProjects(futureProjects);
}

const displayProjects = (projects) => {
    cards.innerHTML = "";
    projects.forEach((project) => {
        let card = document.createElement('section');
        let title = document.createElement('h3');
        let img = document.createElement('img');
        let partialDescription = document.createElement('p');
        let learnMore = document.createElement('input');

        title.textContent = `${project.project}`;
        img.setAttribute('src', project.imageUrl);
        img.setAttribute('alt', `Image of ${project.project}`);
        img.setAttribute('loading', 'lazy');
        partialDescription.textContent = `${project.partialDescription}`;
        learnMore.type = 'submit';
        learnMore.value = 'Learn More';

        learnMore.addEventListener('click', () => {
            displayProjectDetails(project);
        });

        card.appendChild(title);
        card.appendChild(img);
        card.appendChild(partialDescription);
        card.appendChild(learnMore);

        cards.appendChild(card);
    });
}

function displayProjectDetails(project) {
    const modal = document.querySelector('#project-details');

    modal.innerHTML = "";
    modal.innerHTML = `
        <button id="closeModal">&#10006;</button>
        <h3>${project.project}</h3>
        <p>${project.description}</p>`;

    modal.showModal();

    const closeModal = document.querySelector('#closeModal');

    closeModal.addEventListener('click', () => {
        modal.close();
    });
}

getCompletedProjectsData();