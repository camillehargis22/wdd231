const cards = document.querySelector('#cards');
const members = document.querySelector('#members');

async function getCompanyData() {
    const response = await fetch('./data/member.json');
    const data = await response.json();
    displayCompanies(data.companies);
}

async function showListView() {
    const response = await fetch('./data/member.json');
    const data = await response.json();
    displayListView(data.companies);
}

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

gridBtn.addEventListener('click', () => {
    cards.innerHTML = '';
    members.innerHTML = '';
    getCompanyData();
});

listBtn.addEventListener('click', () => {
    cards.innerHTML = '';
    members.innerHTML = '';
    showListView();
});

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
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

        cards.appendChild(card);
    });
}

const displayListView = (companies) => {
    companies.forEach((company) => {
        let member = document.createElement('section');

        let name = document.createElement('h2');

        name.textContent = `${company.name}`;

        member.appendChild(name);

        members.appendChild(member);
    });
}