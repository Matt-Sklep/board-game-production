const nav = document.querySelector('#nav')
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

function colorChange(){
    var elements = document.getElementsByClassName('colorchange');
    console.log(elements);
    for (var i = 0; i < elements.length; i++){
        console.log(elements[i].className.split(' '));
        if (elements[i].className.split(' ').includes('green')) {
            elements[i].className = 'colorchange'
        } else {
            elements[i].className += ' green'
        }
    }
}

var i = 0;
var images =[];
var time = 5000;

images[0] = 'images/slideshow/finish0.png';
images[1] = 'images/slideshow/finish1.png';
images[2] = 'images/slideshow/finish2.png';
images[3] = 'images/slideshow/finish3.png';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

