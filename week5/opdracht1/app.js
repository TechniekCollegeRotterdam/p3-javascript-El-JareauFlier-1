let nav = document.getElementById('navbar')

window.addEventListener("mousemove", function(e){
    if( e.clientX == 0 ){
        nav.classList.add('sidebar')
    }    
})

window.addEventListener("mouseout", function(e){
    if( e.clientX > 0 ){
        nav.classList.remove('sidebar')
    }    
})

