const cards = document.querySelector('#cards');

async function getBusinesses() {
    try {
        const response = await fetch('./data/data.json');
        if (response.ok) {
            data = await response.json();
            displayBusinesses(data.businesses);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

const displayBusinesses = (businesses) => {
    businesses.forEach((business) => {
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let figure = document.createElement('figure');
        let img = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let learnMore = document.createElement('input');

        title.textContent = `${business.name}`;
        img.setAttribute('src', business.imageUrl);
        img.setAttribute('alt', `Image of ${business.name}`);
        img.setAttribute('loading', 'lazy');
        address.textContent = `Address: ${business.address}`;
        description.textContent = `${business.description}`;
        learnMore.type = 'submit';
        learnMore.value = 'Learn More';

        learnMore.addEventListener('click', () => {
            displayBusinessDetails(business);
        });

        figure.appendChild(img);

        card.appendChild(title);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learnMore);

        cards.append(card);
    });
}

function displayBusinessDetails(business) {
    const modal = document.querySelector('#card-details');

    modal.innerHTML = "";
    modal.innerHTML = `
        <button id="closeModal">&#10006;</button>
        <h2>${business.name}</h2>
        <address>Address: ${business.address}</address>
        <address>Phone: ${business.phone}</address>
        <p>${business.description}</p>
        <p>Website: <a href=${business.website}>${business.website}</a></p>`;

    modal.showModal();

    const closeModal = document.querySelector('#closeModal');
    closeModal.addEventListener('click', () => {
        modal.close();
    });
}

getBusinesses();





window.onload = function() {
    const messageArea = document.querySelector('#message-area');
    const lastVisitKey = 'lastVisitDate';
    const now = new Date();

    // check if last visit exists
    const lastVisitStr = this.localStorage.getItem(lastVisitKey);

    if (lastVisitStr) {
        const lastVisit = new Date(lastVisitStr);

        const millisecondsDifference = now.getTime() - lastVisit.getTime();
        const dayssDifference = Math.floor(millisecondsDifference / (1000 * 60 * 60 * 24));

        if (dayssDifference === 0) {
            messageArea.textContent = "Back so soon! Awesome!";
        }
        else if (dayssDifference === 1) {
            messageArea.textContent = `You last visited ${dayssDifference} day ago.`;
        }
        else {
            messageArea.textContent = `You last visited ${dayssDifference} days ago.`;
        }
    }
    else {
        // first time
        messageArea.textContent = "Welcome! Let us know if you have any questions.";
    }
}