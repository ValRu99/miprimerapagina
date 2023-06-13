// NAVBAR

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})


// BODY


function showAlert() {
    alert('Hola, esta es una alerta desde JavaSrcript');
}

const form = document.getElementById('myForm');


function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email);
}

function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (validateEmail(email)) {
        alert('Correo electrónico enviado correctamente.');
    } else {
        alert('Por favor ingrese un correo electrónico válido.');
    }
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    validateForm();
});

