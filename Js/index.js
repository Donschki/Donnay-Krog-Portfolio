
//////////////////////////SIDE_BAR_TOGGLE

let hamburger = document.querySelector (".hamburgerMenu");
let sideBar = document.querySelector (".sideBar");
hamburger.addEventListener("click", () => {
    sideBar.classList.toggle("change");
});

///////////////////////////TOGGLE_LIGHT_MODE_BUTTON

function toggleButton () {
var light = document.body;
    light.classList.toggle("lightMode");
    
}