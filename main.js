function addBodyClass() {
    let body = document.querySelector("body");
  
    // Add the "loaded" class to the body element
    body.classList.add("loaded");
  }
  
  setTimeout(addBodyClass, 3000);