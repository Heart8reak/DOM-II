// Your code goes here

// ########################
// ##################
// Logo Effect 
// #################
// ########################


const companyLogo = document.querySelector('.logo-heading');

companyLogo.addEventListener("mouseover", function (event) {
    event.target.style.color = "green";
    event.target.style.transform = "skew(180deg, 180deg)";
    event.target.style.transition = "all 1.5s";


    setTimeout(function () {
        // event.target.style.color = "red"
        // event.target.style.transform = "skew(180deg, 180deg)";
        event.target.style.transform = "";
    }, 2000);
}, false);


// ########################
// ##################
// Keydown 
// #################
// ########################

const input = document.querySelector('input');
const log = document.getElementById('log');

input.addEventListener('keydown', logkey);

function logkey(e) {
    log.textContent += ` ${e.code}`;
}


// ########################
// ##################
// Wheel 
// #################
// ########################

function zoom(event) {
    event.preventDefault();

    scale += event.deltaY * -0.01;

    scale = Math.min(Math.max(.125, scale), 4);

    el.style.transform = `scale(${scale})`;
};

let scale = 1;
const el = document.querySelector('aside');
// el.addEventListener('wheel', zoom);
el.onwheel = zoom;


// ########################
// ##################
// Drag / Drop 
// #################
// ########################

var dragged;

document.addEventListener('drag', function (event) {

}, false);

document.addEventListener("dragstart", function (event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function (event) {
    event.target.style.opacity = "";
});

document.addEventListener("dragover", function (event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function (event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "pink";
    }
}, false);

document.addEventListener("dragleave", function (event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }
}, false);

document.addEventListener("drop", function (event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
    }
}, false);


// ########################
// ##################
// Load
// #################
// ########################

const logger = document.querySelector('.event-log-contents');
const reload = document.querySelector('#reload');


reload.addEventListener('click', () => {
    logger.textContent = '';
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});

window.addEventListener('load', (event) => {
    logger.textContent - logger.textContent + 'load\n';
});

document.addEventListener('readystatechange', (event) => {
    logger.textContent = logger.textContent + `readystate: ${document.readyState}\n`;
});

document.addEventListener('DOMContentLoaded', (event) => {
    logger.textContent = logger.textContent + `DOMContentLoaded\n;`
});


// ########################
// ##################
// Focus
// #################
// ########################


const password = document.querySelector('input[type="password"]');

password.addEventListener('focus', (event) => {
    event.target.style.background = 'pink';
});

password.addEventListener('blur', (event) => {
    event.target.style.background = '';
});


// ########################
// ##################
// Resize
// #################
// ########################


const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
    heightOutput.textContent = window.innerHeight;
    widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;


// ########################
// ##################
// Scroll
// #################
// ########################

let last_known_scroll_position = 0;
let ticking = false;

function doSomething(scroll_pos) {

}

window.addEventListener('scroll', function (e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });

        ticking = true;
    }
});


// ########################
// ##################
// dblclick
// #################
// ########################


const card = document.querySelector('aside');

card.addEventListener('dblclick', function (e) {
    card.classList.toggle('large');
})



// ########################
// ##################
// mouseleave
// #################
// ########################


let test = document.querySelector('nav');

test.addEventListener('mouseenter', function (event) {
    event.target.style.color = 'red';

    setTimeout(function () {
        event.target.style.color = '';
    }, 500);
}, false);


test.addEventListener('mouseover', function (event) {
    event.target.style.color = 'red';

    setTimeout(function () {
        event.target.style.color = '';
    }, 500);
}, false);


// ########################
// ##################
// scroll
// #################
// ########################


