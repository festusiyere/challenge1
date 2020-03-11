let close  = document.querySelector("#close");
let open  = document.querySelector("#hamburger");
let body = document.querySelector("body");

close.addEventListener(
    'click', () => {
        body.classList.toggle('open');
    }
)

open.addEventListener(
    'click', () => {
        body.classList.toggle('open');
    }
)