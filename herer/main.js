
function addBodyClass() {
    let body = document.querySelector("body");
    body.classList.add("loaded");
  }
  
  function addWelcome() {
    let welcome = document.getElementById("welcome")
    welcome.classList.add("text-blur-out");
  }
  setTimeout(addWelcome, 1800);
  setTimeout(addBodyClass, 3000);

function whenInViewport(elementId, className) {
  const element = document.querySelector(elementId);
  const scroll = window.scrollY || window.pageYOffset;
  const boundsTop = scroll + window.innerHeight - 150;
  const bounds = element.getBoundingClientRect();
  const top = bounds.top + scroll;
  
  if (top < boundsTop) {
    element.classList.add(className);
  }
}
window.addEventListener('scroll', function() {
  whenInViewport('#about', 'slide-right');
  whenInViewport('#projects', 'slide-right');
  whenInViewport('#contact', 'slide-right');
});
 
function handleScroll() {
  let navbar = document.getElementById("navbar");
  let sticky = navbar.offsetTop;

  if (window.scrollY + window.innerHeight >= window.innerHeight * 2) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
}

window.addEventListener("scroll", handleScroll);
const mediaQuery = window.matchMedia("(max-width: 500px)");

function handleMediaQueryChange(mediaQuery) {
  const element = document.getElementById("navbar");
  if (mediaQuery.matches) element.style.display = "none";
  else element.style.display = "flex"
  
}

mediaQuery.addListener(handleMediaQueryChange);

handleMediaQueryChange(mediaQuery);
