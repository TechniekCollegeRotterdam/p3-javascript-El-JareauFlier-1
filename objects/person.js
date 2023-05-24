let output = document.querySelector(".output");

//stap 1
const person = {
    //these are the properties of the object 
    name: "eljareau",
    age: 17,
    birth: '13-05-2005',
    sex: 'male',
    alive: true,
    hobbys: ['art ', 'netflix ', 'gaming ', 'playing the piano'],


    //1. Een method (functie) die de naam moet veranderen.
    //De naam moet je via de parameters kunnen meegeven.
    rename: function () {
        return (this.name = 'flier');
    },

    //2. Een method (functie) die het ‘in leven’ property kan veranderen.


    //3. Een method (functie) die een extra hobby toevoegt aan de array.
    //Een hobby moet je via de parameters kunnen meegeven.

};

console.log(person.rename());



output.innerHTML = `
<p> name: ${person.name}</p>
<p> age: ${person.age}</p>
<p> date of birth: ${person.birth}</p>
<p> sex: ${person.sex}</p>
<p> alive: ${person.alive}</p>
<p> hobby's: ${person.hobbys}</p>
`
