function addBodyClass() {
    let body = document.querySelector("body");
    
  
    // Add the "loaded" class to the body element
    body.classList.add("loaded");
  }
  
  function addWelcome() {
    let welcome = document.getElementById("welcome")
    
  
    // Add the "loaded" class to the body element
    welcome.classList.add("text-blur-out");
  }
  setTimeout(addWelcome, 1800);
  setTimeout(addBodyClass, 3000);

window.onscroll = function() {myFunction()};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}