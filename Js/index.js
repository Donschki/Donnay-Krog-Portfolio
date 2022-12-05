
//////////////////////////SIDE_BAR_TOGGLE

let hamburger = document.querySelector (".hamburgerMenu");
let sideBar = document.querySelector (".sideBar");

//                          TOGGLE SIDE BAR

hamburger.addEventListener("click", () => {
    sideBar.classList.toggle("change");
    body.click.toggle("change");
    
});

//                          CLICK TO REMOVE SIDE BAR


document.querySelector('.one').addEventListener('click', () => {
  sideBar.classList.remove('change');
});

document.querySelector('.two').addEventListener('click', () => {
  sideBar.classList.remove('change');
});


//                           TOGGLE_LIGHT_MODE_BUTTON

function toggleButton () {
var light = document.body;
    light.classList.toggle("lightMode");
    
}

//                            SMOOTH SCROLL WORK ON ALL BROWSERS      ////////

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

