

// Current year for footer
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Clear forms on page unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
    form.reset();
    }
};