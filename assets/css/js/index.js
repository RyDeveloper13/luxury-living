document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear the email input and phone number input
    

    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;

    localStorage.setItem('userEmail', email);
    localStorage.setItem('userNumber', number);
// Hide the email and number fields
document.getElementById('email').style.display = 'none';
document.getElementById('number').style.display = 'none';
document.getElementById('email-input').style.display = 'none';
document.getElementById('number-input').style.display = 'none';
document.getElementById('button-out').style.display = 'none';
document.getElementById('sign-up').style.display = 'none';


// Display success message
const successMessage = document.getElementById('successMessage');
successMessage.textContent = 'Success!';

const thankMessage = document.getElementById('thankMessage');
thankMessage.textContent = 'Thank you for signing up to luxery living were glad to have you on board! '

});

