const homeCards = [
    {
        title: "Project",
        description: "See all our projects, including current and past projects.",
        pageUrl: "projects.html",
        imageUrl: ""
    },
    {
        title: "Reviews",
        description: "See reviews from our clients and our work ethics from previous managers.",
        pageUrl: "#",
        imageUrl: ""
    },
    {
        title: "Contact",
        description: "Have questions, or just want to send your compliments, click here to go to our Contact Page!",
        pageUrl: "contact.html",
        imageUrl: ""
    }
];

const cards = document.querySelector('#home-cards');

const displayCards = (homeCards) => {
    homeCards.forEach((homeCard) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let description = document.createElement('p');

        title.textContent = `${homeCard.title}`;
        description.textContent = `${homeCard.description}`;

        card.innerHTML = `<a href=${homeCard.pageUrl} aria-label=${homeCard.title}></a>`;

        card.appendChild(title);
        card.appendChild(description);

        cards.appendChild(card);
    });
}

displayCards(homeCards);