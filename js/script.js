// Variables
// Homepage sectors modals logic
const openModalButtons = document.querySelectorAll('#sectorsSectionHome .sectorBox');
const closeModalButtons = document.querySelectorAll('#sectorsSectionHome .modalClose');
const modals = document.querySelectorAll('.modalSector');
const overlay = document.querySelector('#modalOverlay');

// Make mobile devices recognize touch events
document.addEventListener("touchstart", function() {}, true);

// Every button click opens the corresponding modal
openModalButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        overlay.style.display = 'block';
        modals.forEach(mod => mod.classList.remove('show'));
        modals[index].classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
        modals[index].setAttribute('aria-hidden', 'false');
        closeModalButtons[index].style.visibility = 'visible';
    });
});

// Clicking the 'x' button closes the modal
closeModalButtons.forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
        openModalButtons[index].focus();
        modals[index].classList.remove('show');
        modals[index].setAttribute('aria-hidden', 'true');
        openModalButtons[index].setAttribute('aria-expanded', 'false');
        overlay.style.display = 'none';
        closeBtn.style.visibility = 'hidden';
    });
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
        modals.forEach((mod, index) => {
            mod.classList.remove('show');
            mod.setAttribute('aria-hidden', 'true');
            openModalButtons[index].setAttribute('aria-expanded', 'false');
        });
    }
});

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