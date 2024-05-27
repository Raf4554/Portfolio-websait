// MENU SHOW FUNCTION
const toggleNavMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);
    toggle?.addEventListener('click' , () => nav?.classList.toggle('show'));
}
toggleNavMenu('nav-toggle', 'nav-menu');



// Remove Menu Mobile
document.getElementById('nav-menu').addEventListener("click", ({target}) => {
    const link = target.closest('.nav-link');
    if (link) {
        document.querySelector('.nav-link.active')?.classList.remove('active');
        link.classList.toggle('active', top <= 50 && bottom >= 50);
    }
});

// Smooth Scrolling
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click" , function(event) {
        event.preventDefault();
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior:"smooth",
            block:"start"
        })
    })
}



// Server
function emailSend() {
    let userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let messageBody = "Name" + userName + "<br/> email" + email + "<br/> Message" + message;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "p.rafayel11@gmail.com",
        Password : "fevg ofyp mzyo iiml",
        To : 'ero.rafi.poxosyan.09@gmail.com',
        From : "p.rafayel11@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
        message => {
            if(message=='OK') {
                swal("Good job!", "You have sent a message!", "success");
            } else {
                alert(message)
            }
        }
    )
  }



 
  








