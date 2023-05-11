let output = document.querySelector(".output");

// //this is an object
// const car = {
//     //these are the properties of the object 
//     name: "flat",
//     model: "500",
//     weight: "850kg",
//     color: "white",
//     repairs: ['wheels', "koppeling", "riem"],
//     //methods
//     start: function(){
//         return "ik ben gestart";
//     },
//     drive: function(){
//         return 'im driving';
//     },
//     brake: function(){
//         return 'i brake';
//     },
//     stop: function(){
//         return 'i stop';
//     },
// };

// output.innerHTML = `
// <p> De naam van de auto is ${car.name}</p>
// <p> ${car.drive()}</p>
// `

const book = {
    //these are the properties of the object 
    title: "This is me",
    author: 'eljareau',
    publisher: 'flierhouse',
    year: 3000,
    sale: 312301,
    price: ' 39,99',
}

output.innerHTML = `
<p> Title: ${book.title}</p>
<p> author: ${book.author}</p>
<p> publisher: ${book.publisher}</p>
<p> year: ${book.year}</p>
<p> sales: ${book.sale}</p>
<p> price: ${book.price}</p>
`