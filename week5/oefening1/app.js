let button = document.getElementById('btn')
let block = document.getElementById('block')

//opdracht 2
button.addEventListener('click', function(){
    block.classList.add('highlight')
})

//opdracht 3
block.addEventListener('mouseover', function(){
    block.classList.add('highlight')
})

//opdracht 4
block.addEventListener('mouseleave', function(){
    block.classList.remove('highlight')
})