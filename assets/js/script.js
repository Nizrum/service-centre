let modal = document.querySelector('.modal');
let buttons = document.querySelectorAll('.button');
let cards = document.querySelectorAll('.card');
let body = document.querySelector('body');
let sendButton = document.querySelector('.pop-up__button');
let form = document.querySelector('.pop-up');

function formSubmit() {
    sendButton.setAttribute("disabled", "true");
}

buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
});

cards.forEach(function (button) {
    button.addEventListener('click', function () {
        modal.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });
});

modal.addEventListener('click', function (event) {
    if (!event.target.closest('.pop-up')) {
        modal.classList.toggle("active");
        body.classList.toggle("no-scroll");
    }
});

var cleave = new Cleave(".pop-up__phone", {
  phone: true,
  phoneRegionCode: "ru",
});