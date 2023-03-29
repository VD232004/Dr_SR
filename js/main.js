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


// Send Subscriber Emails to Google sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycby5LDUy_xNXm0uPqZvZoRWzoSSxTIbDzLNP5LrWo9vMQl8WeL3aMaJbl9S728Ug2xEHOQ/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById('msg');
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = 'Thank You for Subscribing!';
          setTimeout(() => {
            msg.innerHTML = ' ';
          }, 3000);
          form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})


// Form reset after submiting
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}