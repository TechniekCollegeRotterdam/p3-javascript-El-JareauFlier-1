//opdracht 1
let winkelmand = ['bananen' , 'whiskey' , 'chips' , 'bonen' , 'aardappelen'];

let opdr1 = document.getElementById('opdr1');
opdr1.innerText = 'opdracht 1: ' +'er zitten ' + winkelmand.length + ' in uw winkelmand';

//opdracht 2
let opdr2 = document.getElementById('opdr2');
opdr2.innerText = 'opdracht 2: ' + 'uw producten zijn: ' + winkelmand;;

//opdracht 3
let opdr3 = document.getElementById('opdr3');
opdr3.innerText = 'opdracht 3: ' + winkelmand[3] + ', staat op de vierde plek in uw winkelmand';

//opdracht 4
let opdr4 = document.getElementById('opdr4');
winkelmand[1] = 'bier'
opdr4.innerText = 'opdracht 4: ' + winkelmand;

//opdracht 5

let product_toevoegen = document.getElementById('btn');
product_toevoegen.addEventListener("click", function () {
    winkelmand.push('koek');
    opdr5.innerText ='opdracht 5: ' + winkelmand;
});
 
//opdracht 6, voor deze opdracht comment opdracht 1 de laatste 4 producten en zet opdracht 4 in een comment
let opdr6 = document.getElementById('opdr6');
if(winkelmand.length > 1){
    opdr6.innerText ='opdracht 6: ' + winkelmand;
}
else{
    opdr6.innerText ='opdracht 6: ' + 'u heeft niet genoeg producten om te tonen';

}

//opdracht 7
let opdr7 = document.getElementById('opdr7');
if(winkelmand[4] == 'drop'){
    opdr6.innerText = winkelmand;
}
else{
    opdr7.innerText = 'opdracht 7: ' + 'u heeft geen drop';

}

//opdracht 8
document.getElementById("opdr8").innerHTML ='opdracht 8: ' + winkelmand.join("  ");

//opdracht 9
let opdr9 = document.getElementById('opdr9');
document.getElementById("opdr9").innerHTML = winkelmand;

document.getElementById("opdr9").innerHTML = 'opdracht 9: ' + winkelmand.splice(2);


//opdracht 10 , zet opdracht 9 als een comment
document.getElementById("opdr10");
winkelmand.sort();

opdr10.innerText = 'opdracht 10: ' + winkelmand;


