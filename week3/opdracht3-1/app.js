// variables
let budget = 100
let product = 60
let ifelse = document.getElementById("ifelse")

function saldo() {
    if (product <= budget) {

        ifelse.innerText = "U heeft genoeg geld!";
        ifelse.style.color = "green"

    } else {
        ifelse.innerText = "Helaas, te weinig geldt";
        ifelse.style.color = "red"

    }
}

saldo()