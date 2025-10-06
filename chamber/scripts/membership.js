const memberships = [
    {
        membership: "Gold",
        price: "$6,000",
        benefits: {
            all: "All Chamber members receive: Visibility & Name Recognition, Referrals & Recommendations, Marketing & Promotion, Networking & Events, Professional & Leadership Development, Business Operation Resources, Community Engagement Resources, Legislative Advocacy, and Sponsored Insurance Plan. Below are benefits for this membership level:",
            gala: 6,
            econ: 6,
            crossroads: "$30 Discount",
            leadership: "$300 Discount",
            recognition: "Yes",
            multiBusinessMembership: "Unlimited",
            paidDues: 2,
            governors: "Yes"
        }
    },
    {
        membership: "Silver",
        price: "$3,000",
        benefits: {
            all: "All Chamber members receive: Visibility & Name Recognition, Referrals & Recommendations, Marketing & Promotion, Networking & Events, Professional & Leadership Development, Business Operation Resources, Community Engagement Resources, Legislative Advocacy, and Sponsored Insurance Plan. Below are benefits for this membership level:",
            gala: 4,
            econ: 4,
            crossroads: "$20 Discount",
            leadership: "$200 Discount",
            recognition: "Yes",
            multiBusinessMembership: "Up to 15",
            paidDues: 1,
            governors: "Yes"
        }
    },
    {
        membership: "Bronze",
        price: "$1,075",
        benefits: {
            all: "All Chamber members receive: Visibility & Name Recognition, Referrals & Recommendations, Marketing & Promotion, Networking & Events, Professional & Leadership Development, Business Operation Resources, Community Engagement Resources, Legislative Advocacy, and Sponsored Insurance Plan. Below are benefits for this membership level:",
            gala: 2,
            econ: 2,
            crossroads: "$10 Discount",
            leadership: "$100 Discount",
            recognition: "Yes",
            multiBusinessMembership: "Up to 5",
            paidDues: 0,
            governors: "No"
        }
    },
    {
        membership: "Non-Profit",
        price: "$275",
        benefits: {
            all: "All Chamber members receive: Visibility & Name Recognition, Referrals & Recommendations, Marketing & Promotion, Networking & Events, Professional & Leadership Development, Business Operation Resources, Community Engagement Resources, Legislative Advocacy, and Sponsored Insurance Plan. Below are benefits for this membership level:",
            gala: 0,
            econ: 0,
            crossroads: "N/A",
            leadership: "N/A",
            recognition: "No",
            multiBusinessMembership: "N/A",
            paidDues: 0,
            governors: "No"
        }
    }
];

const allMemberships = document.querySelector('#memberships');

const displayMemberships = (memberships) => {
    allMemberships.innerHTML = "";
    memberships.forEach((member) => {
        let card = document.createElement('div');
        let membershipLevel = document.createElement('h3');
        let learnMore = document.createElement('input');

        membershipLevel.innerHTML = `${member.membership} Membership Level`;

        card.className = "member";

        card.appendChild(membershipLevel);

        learnMore.type = 'submit';
        learnMore.value = 'Learn More';

        learnMore.addEventListener('click', () => {
            displayMembershipDetails(member);
        });

        card.appendChild(learnMore);

        allMemberships.appendChild(card);
    });
}

displayMemberships(memberships);

function displayMembershipDetails(member) {
    const modal = document.querySelector('#membership-details');

    modal.innerHTML = '';
    modal.innerHTML = `
        <button id="closeModal">&#10006;</button>
        <h2>${member.membership} Membership Level</h2>
        <p>Price: ${member.price}</p>
        <p>Annual Gala Tickets: ${member.benefits.gala}</p>
        <p>Economic Forecase Tickets: ${member.benefits.econ}</p>
        <p>Crossroads Tickets: ${member.benefits.crossroads}</p>
        <p>Leadership Northern Utah Tuition: ${member.benefits.leadership}</p>
        <p>Partner Recognition on Website: ${member.benefits.recognition}</p>
        <p>Multi-Business Membership: ${member.benefits.multiBusinessMembership}</p>
        <p>Paid Committee Dues: ${member.benefits.paidDues}</p>
        <p>Board of Governors Position: ${member.benefits.governors}</p>`;

    modal.showModal();

    const closeModal = document.querySelector('#closeModal');

    closeModal.addEventListener('click', () => {
        modal.close();
    });
}