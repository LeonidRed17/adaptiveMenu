
let burgerElem = document.querySelector('.burger');
let menuElem = document.querySelector('.menu');
let control = 0;

burgerElem.addEventListener('click',(function(){
    if(control == 0){
        showMenu();
        control = 1;
    }
    else if(control == 1){
        closeMenu();
        control = 0;
    }
    function showMenu(){
        menuElem.style.animation = 'menuAnimation1 3s forwards';  
    }
    function closeMenu(){
        menuElem.style.animation = 'menuAnimation2 3s forwards';  
    }
}));
 
