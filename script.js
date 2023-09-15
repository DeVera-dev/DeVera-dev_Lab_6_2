document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        // Reset previous error messages
        clearValidationMessages();

        // Validation logic for each input
        const isFirstNameValid = validateInput('firstName', 'Please enter a valid first name.', 'firstNameError');
        const isMiddleInitialValid = validateInput('middleInitial', 'Please enter a valid middle initial.', 'middleInitialError');
        const isLastNameValid = validateInput('lastName', 'Please enter a valid last name.', 'lastNameError');
        const isEmailValid = validateInput('email', 'Please enter a valid email address.', 'emailError');

        const email = document.getElementById('email').value;
        const isEmailFormatValid = isValidEmail(email);

        if (isFirstNameValid && isMiddleInitialValid && isLastNameValid && isEmailValid && isEmailFormatValid) {
            // Form submitted successfully, show a success message
            alert('Success');

            // Clear the form inputs
            form.reset();
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    }

    // Function to display a validation error message
    function displayValidationError(id, message) {
        const errorElement = document.getElementById(id);
        errorElement.textContent = message;
    }

    // Function to validate and display input validation error
    function validateInput(inputId, errorMessage, errorElementId) {
        const inputElement = document.getElementById(inputId);
        const errorElement = document.getElementById(errorElementId);
        if (!inputElement.value) {
            displayValidationError(errorElementId, errorMessage);
            return false; // Input is not valid
        }
        return true; // Input is valid
    }

    // Function to clear all validation error messages
    function clearValidationMessages() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(element => {
            element.textContent = '';
        });
    }
});
