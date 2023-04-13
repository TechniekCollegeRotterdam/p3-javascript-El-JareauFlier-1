//gets the inputfields from the html
let fullName = document.querySelector('#fullName');
let phoneNumber = document.querySelector('#phoneNumber');
let email = document.querySelector('#email');

//gets the containers from the html
let signInContainer = document.querySelector('.sign-in-container');
let signUpContainer = document.querySelector('.sign-up-container');
let panelInput = document.querySelector('.overlay-panel');

//gets the button id from the html
let button = document.getElementById('signUp');

//click function
button.addEventListener("click", function (e) {

    e.preventDefault()

    //Shows the check img and hides the form.
    signInContainer.style.display = 'flex';
    signUpContainer.style.display = 'none';
    
    //Creates a new element 
    let title = document.createElement("h1");
    let text1 = document.createElement("p");
    let text2 = document.createElement("p");

    //1- puts the inputs value in an innertext.
    title.innerText = 'welkom ' + fullName.value;
    text1.innerText = 'U heeft een bevestiging ontvangen op:\n' + email.value;
    text2.innerText = 'Ter verificatie sturen wij een bericht naar:\n'+  + phoneNumber.value;
    
    //2- replaces the current text with the new ones.
    panelInput.replaceChildren(title, text1, text2);
});

