window.onload = begin 

body = document.body
loaded = document.getElementsByClassName
function begin(){
    setTimeout(function(){
        body.addClass('loaded');
        h1.css('color','#222222');
    }, 3000);
}