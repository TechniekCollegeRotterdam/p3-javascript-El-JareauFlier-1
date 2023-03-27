let output = document.getElementById('output');
let input = document.getElementById('input');

let shop = [];

let add_product = document.getElementById('btn');
add_product.addEventListener("click", function () {
 
    let product = input.value;
    shop.push(product);

    output.innerText = shop;
    input.value = "";

});