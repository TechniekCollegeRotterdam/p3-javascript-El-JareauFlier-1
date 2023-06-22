const adminContainer = document.querySelector('.adminContainer');
const registrationForm = document.querySelector('.registration-form');
const registrationURL = `http://localhost:3000/registration`

fetch(`${registrationURL}`)
    .then((response) => response.json())
    .then((registrations) => {
        let out = `  <tr>
        <th>iD</th>
        <th>full name</th>
        <th>residence</th>
        <th>phone number</th>
        <th>email</th>
        <th>delete</th>
    </tr>`;
        for (let registration of registrations) {
            out += `
            <tr>
                <td><h3> ${registration.id}</h3></td>
                <td><h3> ${registration.firstname} ${registration.lastname}</h3></td>
                <td><p> ${registration.residence}</p></td>
                <td><p> ${registration.phoneNumber}</p></td>
                <td><p> ${registration.email}</p></td>
                <td><button data-id="${registration.id}" data-action="delete">Delete</button></td>
            </tr>
        `;
        }
        adminContainer.innerHTML = out;
    });

//click button form the index.html
registrationForm.addEventListener('submit', () => {
    const firstnameInput = registrationForm.querySelector('#firstname').value;
    const lastnameInput = registrationForm.querySelector('#lastname').value;
    const residenceInput = registrationForm.querySelector('#residence').value;
    const phonenumberInput = registrationForm.querySelector('#phonenumber').value;
    const emailInput = registrationForm.querySelector('#email').value;


    //krijg toegang van jouw database om met post weer data in jouw db toe te voegen
    fetch(`${registrationURL}`, {
        //Met ‘POST’ plaats je de gegevens in je database. 
        method: 'POST',
        //JSON.stringify() pakt de data die je meegeeft en verandert het in data die JSON kan lezen
        body: JSON.stringify({
            firstname: firstnameInput,
            lastname: lastnameInput,
            residence: residenceInput,
            phonenumber: phonenumberInput,
            email: emailInput,

        }),

        headers: {
            'Content-Type': 'application/json',
        },
    });
    alert("thank you for registering");

});