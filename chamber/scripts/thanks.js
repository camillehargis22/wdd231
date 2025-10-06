const params = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML =
    `<p>Name: ${params.first} ${params.last}</p>
    <p>Email: ${params.email}</p>
    <p>Phone: ${params.phone}</p>
    <p>Organization Name: ${params.organization}</p>
    <p>Timestamp: ${params.timestamp}</p>`;