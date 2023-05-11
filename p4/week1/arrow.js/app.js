// // function calculate(a, b){
// //     let answer = a * b;
// //     console.log(answer);
// // }

// calculate(5, 15);

// //arrow function
// const calculate = (a, b) => {
//     let answer = a * b;
//     console.log(answer);
// };

// let name = "El-jareau";
// //let text = "mijn naam is " + name;

// //backticks string
// let text = ` mijn naam is: ${name}`;

// console.log(text);

// //document.getElementById("output").innerText = text;


// document.querySelector("#output").innerText = text;


const cars = ['BMV', 'Volvo', 'Mini'];

// for ( let i = 0; i > cars.length; i++){
//     console.log(cars[i]);
// }

for(let car of cars){
    console.log(car);
}