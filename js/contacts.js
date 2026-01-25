// Client-side form validation for Contact Form 7
// Since this is a static version of the site, there is no backend PHP
// Therefore validation and success messages are handled entirely with JavaScript
const contactForm = document.querySelector('div#formContacts form');
const nameInput = contactForm.querySelector('input[name="your-name"]');
const emailInput = contactForm.querySelector('input[name="your-email"]');
const emailRegex = /.+@.+\..+/;
const subjectInput = contactForm.querySelector('input[name="your-subject"]');
const messageInput = contactForm.querySelector('textarea[name="your-message"]');
const checkboxPrivacy = contactForm.querySelector('input[name="privacy"]');
const confirmMsg = document.querySelector('div#confirmMsg');
const errorMessages = contactForm.querySelectorAll('div.errMsg');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    if (nameInput.value.trim() === '') {
        document.querySelector('div.errMsg:nth-of-type(1)').style.display = 'block';
    }
    if (!emailRegex.test(emailInput.value.trim())) {
        document.querySelector('div.errMsg:nth-of-type(2)').style.display = 'block';
    }
    if (subjectInput.value.trim() === '') {
        document.querySelector('div.errMsg:nth-of-type(3)').style.display = 'block';
    }

    // If all fields are valid, submit the form
    if (nameInput.value.trim() !== '' && emailRegex.test(emailInput.value.trim()) && subjectInput.value.trim() !== '') {
        // Show confirmation message
        confirmMsg.style.display = 'flex';
        confirmMsg.style.flexDirection = 'column';
        confirmMsg.style.gap = '12px';

        // Clear form fields
        nameInput.value = '';
        emailInput.value = '';
        subjectInput.value = '';
        messageInput.value = '';
        checkboxPrivacy.checked = false;

        // Hide error messages
        errorMessages.forEach(msg => {
            msg.style.display = 'none';
        });
    }
});