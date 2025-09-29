const spotlights = document.querySelector('#spotlights');

async function getSpotlights() {
    const response = await fetch('./data/member.json');
    const data = await response.json();
    displaySpotlights(data.companies);
}

const displaySpotlights = (companies) => {
    let rand1 = -1;
    let rand2 = -1;

    while (rand1 === rand2) {
        rand1 = Math.floor(Math.random() * companies.length);
        rand2 = Math.floor(Math.random() * companies.length);
    }

    const spotlightCompanies = [companies[rand1], companies[rand2]];

    spotlightCompanies.forEach((company) => {
        // create elements
        let card = document.createElement('section');

        let name = document.createElement('h2');

        // holds img and info to help use grid to set up
        let imgAndInfo = document.createElement('section');
        imgAndInfo.className = 'imgAndInfo';

        let imageUrl = document.createElement('img');

        let info = document.createElement('div');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let membershipLevel = document.createElement('p');
        let otherInfo = document.createElement('p');

        name.textContent = `${company.name}`;

        imageUrl.setAttribute('src', company.imageUrl);
        imageUrl.setAttribute('alt', `Image of ${company.name}`);
        imageUrl.setAttribute('loading', 'lazy');
        imageUrl.setAttribute('width', '340');
        imageUrl.setAttribute('height', '440');

        address.textContent = `Address: ${company.address}`;
        phone.textContent = `Phone: ${company.phone}`;
        website.textContent = `Website: ${website}`;
        membershipLevel.textContent = `Membership Level: ${company.membershipLevel}`;
        otherInfo.textContent = `${company.otherInfo}`;

        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(website);
        info.appendChild(membershipLevel);
        info.appendChild(otherInfo);

        imgAndInfo.appendChild(imageUrl);
        imgAndInfo.appendChild(info);

        card.appendChild(name);
        card.appendChild(imgAndInfo);

        spotlights.appendChild(card);
    });
}

getSpotlights();