let output = document.querySelector(".output");

//stap 1
const product = {
    //these are the properties of the object 
    name: "chocolate",
    img: "./img/chocolate.jpg",
    description: 'lirum ipsum de tonaga lisona trum',
    price: '17,-',
    date: '13-05-2005',

};




output.innerHTML = `
<p> name: ${product.name}</p>
<img> ${product.img}</img>
<p> description: ${product.description}</p>
<p> price: ${product.price}</p>
<p> expiry date ${product.date}</p>
`
