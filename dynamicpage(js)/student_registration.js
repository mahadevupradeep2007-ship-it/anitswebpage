const registrationForm = document.querySelector("form");
registrationForm.addEventListener("submit", function (e) {

    e.preventDefault();
    alert("Student registered successfully");
    registrationForm.reset();
});
