const registrationForm = document.forms['registration-form'];
const loginForm = document.forms['login-form'];

if (registrationForm) {
    registrationForm.addEventListener('submit', validateRegistrationForm);
    registrationForm.addEventListener('reset', resetRegistrationForm);
} else if (loginForm) {
    loginForm.addEventListener('submit', validateLoginForm);
}
else {
    console.error('Unable to find the registration/login forms; no validation will be performed');
}

// Helper function for displaying error messages
function displayError(inputId, message) {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById('error-' + inputId);
    errorElement.textContent = message; 
}

// Function to validate if the form meets requirements for submission
function validateRegistrationForm(event) {
    event.preventDefault(); // Stop the form from submitting to allow for validation checks

    let isFormValid = true; // Flag to track overall form validity

    // Clear previous error messages and invalid field indicators
    document.querySelectorAll('.error-message').forEach(e => e.textContent = '');
    document.querySelectorAll('.error-field').forEach(e => e.classList.remove("error-field"));
    
    // Store username, email, password, and confirm-password fields
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    // Check if username is empty
    if (!username.value) { 
        displayError('username', 'Please enter a username');
        username.classList.add('error-field');
        isFormValid = false;
    }

    // Check if email is empty and validate format
    if (!email.value) {
        displayError('email', 'Please enter an email address');
        email.classList.add('error-field');
        isFormValid = false;
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/.test(email.value)) {
        displayError('email', 'Please enter a valid email address');
        email.classList.add('error-field');
        isFormValid = false;
    }

    // Validate password and confirm password input
    if (!password.value && !confirmPassword.value) {
        displayError('password', 'Please enter a password');
        displayError('confirm-password', 'Please confirm your password');
        password.classList.add('error-field');
        confirmPassword.classList.add('error-field');
        isFormValid = false;
    } else if (!password.value || !confirmPassword.value) {
        displayError('password', 'Please enter a password in both fields');
        displayError('confirm-password', 'Please enter a password in both fields');
        password.classList.add('error-field');
        confirmPassword.classList.add('error-field');
        isFormValid = false;
    } else if (password.value !== confirmPassword.value) {
        displayError('password', 'Passwords do not match');
        displayError('confirm-password', 'Passwords do not match');
        password.classList.add('error-field');
        confirmPassword.classList.add('error-field');
        isFormValid = false;
    }

    // Validate password against password policy
    if (password.value) {
        let errorMessage = '';
        if (password.value.length < 8 || password.length > 30) {
            errorMessage += 'Password must be 8-30 characters long. ';
        }
        if (!/[A-Z]/.test(password.value)) {
            errorMessage += 'Include at least one uppercase letter. ';
        }
        if (!/\d/.test(password.value)) {
            errorMessage += 'Include at least one number. ';
        }
        if (!/[!@#$%^&*]/.test(password.value)) {
            errorMessage += 'Include at least one symbol (!@#$%^&*). ';
        }

        if (errorMessage) {
            displayError('password', errorMessage.trim());
            password.classList.add('error-field');
            isFormValid = false;
        }
    }

    // If the form is valid, then allow the form submission
    if (isFormValid) {
        registrationForm.submit();
    }
}

// Function to clear all errors and reset error styling
function resetRegistrationForm() {
    // Clear all error messages
    document.querySelectorAll('.error-message').forEach(function(element) {
        element.textContent = '';
    });

    // Remove error styling from all fields
    document.querySelectorAll('.error-field').forEach(function(element) {
        element.classList.remove('error-field');
    });
}

function validateLoginForm(event) {
    event.preventDefault(); // Stop the form from submitting to allow for validation checks

    let isFormValid = true; // Flag to track overall form validity

    // Clear previous error messages and invalid field indicators
    document.querySelectorAll('.error-message').forEach(e => e.textContent = '');

    // Store username and password input fields
    const username = loginForm.username;
    const password = loginForm.password;

    // Remove the error-field class from all form fields
    username.classList.remove('error-field');
    password.classList.remove('error-field');

    if (username.value === '') {
        displayError('username-login', 'Please enter a username');
        username.classList.add('error-field');
        isFormValid = false;
    }
    if (password.value === '') {
        displayError('password-login', 'Please enter a password');
        password.classList.add('error-field');
        isFormValid = false;
    } 

    // If the form is valid, then allow the form submission
    if (isFormValid) {
        loginForm.submit();
    }
}