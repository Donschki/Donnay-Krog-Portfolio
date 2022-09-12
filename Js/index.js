
//////////////////////////SIDE_BAR_TOGGLE

let hamburger = document.querySelector (".hamburgerMenu");
let sideBar = document.querySelector (".sideBar");
hamburger.addEventListener("click", () => {
    sideBar.classList.toggle("change");
});

//////////////////////////SIDE_BAR_TOGGLE

const toggle = document.getElementById('toggle');

document.onclick = function(e){
 if(e.target.id !== 'sidebar' && e.target.id !== 'toggle') {
    toggle.classList.remove('active');
    sideBar.classList.remove('active');
 }
}

toggle.onclick = function () {
    toggle.classList.toggle('active')
    sideBar.classList.toggle('active')
}


///////////////////////////TOGGLE_LIGHT_MODE_BUTTON

function toggleButton () {
var light = document.body;
    light.classList.toggle("lightMode");
    
}

