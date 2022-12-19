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