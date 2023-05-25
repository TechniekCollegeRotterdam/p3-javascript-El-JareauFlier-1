let output = document.querySelector('.countries');
let out = '';

fetch('https://restcountries.com/v3.1/all/')
    .then((response) => response.json())
    .then((data) => {

        for (let d of data) {

            console.log(d.name)
            out += `
            <div class="card">
            <img src=" ${d.flags.png}"></img>
            <h1> ${d.name.common}</h1>
            </div>`
        }
        console.log(data)

        output.innerHTML = out;
    });