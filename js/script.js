// Get references to the login link, login modal, and close button
var loginLink = document.getElementById("loginButton");
var loginModal = document.getElementById("loginModal");
var closeModalButton = document.getElementById("closeModal");

// Function to show the login pop-up
loginLink.addEventListener("click", function () {
    loginModal.style.display = "block";
});

// Function to close the login pop-up
closeModalButton.addEventListener("click", function () {
    loginModal.style.display = "none";
});

// Close the modal if the user clicks outside of it
window.addEventListener("click", function (event) {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});

// Close the modal when the user presses the "Esc" key
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        loginModal.style.display = "none";
    }
});
