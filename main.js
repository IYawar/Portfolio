
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

function whenInViewport(elementId, className) {
  // Select the element with the specified identifier
  const element = document.querySelector(elementId);
  console.log(element)
  // Get the current scroll position and the size of the viewport
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = scroll + window.innerHeight - 150;

  // Get the position and size of the element
  const bounds = element.getBoundingClientRect();
  const top = bounds.top + scroll;

  // Check if the element is within the viewport
  if (top < boundsTop) {
    element.classList.add(className);
  }
}
window.addEventListener('scroll', function() {
  whenInViewport('#about', 'slide-right');
  whenInViewport('#projects', 'slide-right');
  whenInViewport('#contact', 'slide-right');
});
 
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