const buttons = document.querySelectorAll('#sectorsSectionHome .sectorBox');
const modals = document.querySelectorAll('.modalSector');
const overlay = document.querySelector('#modalOverlay');

// Every button click opens the corresponding modal
buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        overlay.style.display = 'block';
        modals.forEach(mod => mod.classList.remove('show'));
        modals[index].classList.add('show');
        btn.setAttribute('aria-expanded', 'true');
        modals[index].setAttribute('aria-hidden', 'false');
    });
});

// Clicking the 'x' button closes the modal
document.querySelectorAll('#sectorsSectionHome .modalClose').forEach((closeBtn, index) => {
    closeBtn.addEventListener('click', () => {
        buttons[index].focus();
        modals[index].classList.remove('show');
        modals[index].setAttribute('aria-hidden', 'true');
        buttons[index].setAttribute('aria-expanded', 'false');
        overlay.style.display = 'none';
    });
});

// Close the modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
        modals.forEach((mod, index) => {
            mod.classList.remove('show');
            mod.setAttribute('aria-hidden', 'true');
            buttons[index].setAttribute('aria-expanded', 'false');
        });
    }
});