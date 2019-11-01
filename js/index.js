// Your code goes here
const companyLogo = document.querySelector('.logo-heading');

companyLogo.addEventListener("mouseover", function (event) {
    event.target.style.color = "green";
    event.target.style.transform = "skew(180deg, 180deg)";
    event.target.style.transition = "all 1.5s";


    setTimeout(function () {
        event.target.style.color = "red"
        event.target.style.transform = "auto";
    }, 500);
}, false);