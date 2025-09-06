// Store the selected elements that we are going to use
const navButton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

// Toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navBar.classList.toggle('show');
});

var links = navBar.getElementsByClassName("link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("current");
        current[0].className = current[0].className.replace(" current", "");
        this.className += " current";
    });
}