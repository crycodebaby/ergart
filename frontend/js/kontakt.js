document.querySelector("form").addEventListener("submit", function (e) {
    const recaptchaResponse = grecaptcha.getResponse();
    if (!recaptchaResponse) {
        alert("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
        e.preventDefault();
    }
});
