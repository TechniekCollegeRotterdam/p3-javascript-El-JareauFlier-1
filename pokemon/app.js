let output = document.querySelector('.pokemons');
let out = '';

fetch('./pokemons.json')
    .then((response) => response.json())
    .then((pokemons) => {

        for (let pokemon of pokemons) {
            out += `
            <div class="card">
            <img src=" ${pokemon.img}"></img>
            <h1> ${pokemon.name}</h1>
            </div>`
        }

        output.innerHTML = out;
    });