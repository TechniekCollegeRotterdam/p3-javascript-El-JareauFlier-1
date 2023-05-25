let title = document.querySelector('.title')
let output = document.querySelector('.reminders');
let button = document.querySelector('.btn')
let out = '';

fetch('./reminders.json')
    .then((response) => response.json())
    .then((reminders) => {

        for (let reminder of reminders) {
            out += `
            <div class="card">
            <img src=" ${reminder.img}"></img>
            <div class="container">
            <h1> ${reminder.name}</h1>
            <p> ${reminder.age} years old</p>
            </div>
            </div>`
        }

        output.innerHTML = out;
        title.innerHTML = reminders.length + ' birthdays today';
    });



button.addEventListener('click', function () {
    output.innerHTML = '';
});