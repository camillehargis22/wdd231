const form = document.querySelector("#form");
const titleInput = document.getElementsByName("organization-title");

const regExp = /^[a-zA-Z -]{7,}$/;

function testInfo(titleInput) {
    const ok = regExp.exec(titleInput.value);
    output = ok ? setTimeout(() => { window.location.href = 'thanks.html'; }, 2000) : alert('Organization Title can only contain letters, spaces and hyphens and must be at least 7 characters.');
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    testInfo(titleInput);
});