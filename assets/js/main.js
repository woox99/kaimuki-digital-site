

// Current year for footer
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Clear forms on page unload
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", () => {
        form.reset();
    });
});

