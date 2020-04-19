let btn  = document.querySelector('.button');
let list = document.querySelector('#lanka');

btn.addEventListener('click', function() {
    process();
        
    });

function process() {
    if(list.style.display == 'none') {
        list.style.display = 'inline';
    }else {
        list.style.display = 'none';
    }
}

function allButtons() {
    let blg     = document.querySelector('.blg');
    let cont    = document.querySelector('.contact');
    let stry    = document.querySelector('.story');
    let butn    = document.querySelector('.other');
    let modal   = document.querySelector('.main-modal');
    let clos    = document.querySelector('.close');
    
    cont.onclick = () => {
        modal.style.display = 'block';
    };
    blg.onclick = () => {
        modal.style.display = 'block';
    };
    stry.onclick = () => {
        modal.style.display = 'block';
    };
    
    butn.onclick = function() {
        modal.style.display = 'block';
    };
    
    clos.onclick = function() {
        modal.style.display = 'none';
    };
    
    window.onclick = (event) => {
        if(event.target == modal){
            modal.style.display = 'none';
        }
    };
}
allButtons();