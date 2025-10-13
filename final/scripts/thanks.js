const params = window.location.search;
const comments = new URLSearchParams(params);

document.querySelector('#results').innerHTML = `<p>${comments.get('first')} ${comments.get('last')}<p>
<p>${comments.get('email')}</p>
<p>${comments.get('phone')}</p>
<p>${comments.get('comments')}</p>`;