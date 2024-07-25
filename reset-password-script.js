// JavaScript for reset password page functionality
document.getElementById("resetPasswordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    
    // Perform password reset actions here
    // For example, send a password reset email to the user

    // Display a confirmation message to the user
    alert("A password reset email has been sent to your email address.");

    // Optionally, navigate the user back to the home page or login page
    window.location.href = "index.html";
});
