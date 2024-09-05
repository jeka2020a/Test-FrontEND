/*
    ANSWER:
    We must use a parent element for check some click on the button.


$("body").on("click", "button.clickable", function() {
    console.log("Button Clicked:", this);
});

// Dynamic addittion a new button
$.get({...}).success(function(res) {
    $("body").append(`<button id="btn_${res.id}" class="clickable">Click Alert!</button>`);
});

*/


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const counterElement = document.getElementById('counter');
const incrementBtn = document.getElementById('incrementBtn');

window.onload = function() {
    const randomNumber = getRandomNumber(1, 100); 
    counterElement.textContent = randomNumber;
};

incrementBtn.addEventListener('click', function() {
    let currentCount = parseInt(counterElement.textContent);
    counterElement.textContent = currentCount + 1;
});