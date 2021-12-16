var menu = document.querySelector('.menu');
var navigation = document.querySelector('.navigation');

document.querySelector('.navigation').onclick = function (e) {
    
    menu.classList.toggle('is-active');
    navigation.classList.toggle('is-active');

    e.preventDefault();
}




