let inputField = document.getElementById("inputField");
let button = document.getElementById("addToDo");
let container = document.getElementById("toDoContainer");

button.addEventListener("click", function(){

    //maak een p element aan met createElement
   let paragraph = document.createElement("p");

   //de waarde van de inputfield
   paragraph.innerText = inputField.value;

   //paragraph word toegevoegd aan de container
   container.appendChild(paragraph);

    //input word dan leeggemaakt
   inputField.value = '';

})

