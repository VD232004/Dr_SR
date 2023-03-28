// Get the button - Go To Top
let mybutton = document.getElementById("go-to-top-btn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



// default stay one palce after clicking on any undefined link
const links1 = document.getElementById('links1');
const links2 = document.getElementById('links2');
const links3 = document.getElementById('links3');
links1.addEventListener('click', linkFunc); 
links2.addEventListener('click', linkFunc); 
links3.addEventListener('click', linkFunc); 
function linkFunc(e){
  e.preventDefault();
}