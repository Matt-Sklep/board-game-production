//Auto-sizing Header
const nav = document.querySelector('#nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
//Color-changing Button
function colorChange() {
    var elements = document.getElementsByClassName('colorchange');
    console.log(elements);
    for (var i = 0; i < elements.length; i++) {
        console.log(elements[i].className.split(' '));
        if (elements[i].className.split(' ').includes('green')) {
            elements[i].className = 'colorchange'
        } else {
            elements[i].className += ' green'
        }
    }
}
//Slideshow Timer
var i = 0;
var images = [];
var time = 5000;

images[0] = 'images/slideshow/finish0.png';
images[1] = 'images/slideshow/finish1.png';
images[2] = 'images/slideshow/finish2.png';
images[3] = 'images/slideshow/finish3.png';

function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg();
//User Prompt Name
function getName() {
    let name = prompt("Hi there! Please tell me your name!");
    if (name != "") {
        document.getElementById("inputName").innerHTML =
            "- " + name;
    } else {
        document.getElementById("inputName").innerHTML =
            "- The coolest cat around";
    }
}

window.onload = getName();
//User Prompt Number
var getNum = prompt("Hey, no reason, but please let me know your favorite number between 1 and 10.");
while (true) {
    if (isNaN(getNum)) {
        alert("That's not a number, please try again.");
    } else if (getNum < 0 || getNum > 10) {
        alert("I asked between 1 and 10, please try again.");
    } else {
        document.getElementById("inputNum").innerHTML =
            getNum + "/" + getNum;
        for (var i = 0; i < getNum; i++) {
            var img = document.createElement("img");
            img.src = 'images/star.png';
            var src = document.getElementById("starBox");
            src.appendChild(img);
        }
        break;
    }
    var getNum = prompt("Please tell me your favorite number between 1 and 10.");
}

window.onload = getNum;