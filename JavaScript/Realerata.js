
const colors = ["black","ff5722","#289B28"];
let colorIndex = 0;

function changeColor() {
    
    const testimonials = document.querySelectorAll('.testimonial p');
    
    testimonials.forEach((text) => {
        
        text.style.color = colors[colorIndex];

        text.style.opacity = 0.9; 
        setTimeout(() => {
            text.style.opacity = 1; 
        }, 500); 
    });

    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeColor, 600);


function clearField(field) {
    field.value = ''; 
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    const nameField = this.querySelector('input[name="name"]');
    const surnameField = this.querySelector('input[name="surname"]');
    const emailField = this.querySelector('input[name="email"]');
    const messageField = this.querySelector('textarea[name="message"]');
    
    const fields = this.querySelectorAll('input[type="text"], input[type="email"], textarea');

    let isEmpty = false;
    let isValidEmail = true;
    let isValidName = true;
    let isValidSurname = true;
    let isValidMessage = true;

    
    fields.forEach(function(field) {
        if (!field.value.trim()) {
            isEmpty = true;
        }
    });

    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailField.value.trim())) {
        isValidEmail = false;
    }

    
    const namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(nameField.value.trim())) {
        isValidName = false;
    }

    
    if (!namePattern.test(surnameField.value.trim())) {
        isValidSurname = false;
    }

    
    if (messageField.value.trim().length <= 50) {
        isValidMessage = false;
    }

    
    let alertMessage = '';
    if (isEmpty) {
        alertMessage += 'Please fill out all fields.\n';
    }
    if (!isValidEmail) {
        alertMessage += 'Please enter a valid email address.\n';
    }
    if (!isValidName) {
        alertMessage += 'Name must only contain letters.\n';
    }
    if (!isValidSurname) {
        alertMessage += 'Surname must only contain letters.\n';
    }
    if (!isValidMessage) {
        alertMessage += 'Message must be more than 50 characters.\n';
    }

    
    if (alertMessage) {
        alert(alertMessage);
        event.preventDefault();
    }
});

document.addEventListener("DOMContentLoaded", function() {
const currentYear = new Date().getFullYear();
        document.getElementById('currentYear').textContent = currentYear;
    });

   

