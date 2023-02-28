const inputs = document.querySelectorAll('input');
      
// Loop through all input elements and attach the event listener
inputs.forEach((input) => {
  input.addEventListener('focus', () => {
    input.classList.add('focused');
  });
});
function checkPasswordMatch() {
    var password = document.getElementById("password");
    var confirm_password = document.getElementById("confirm-password");
    var mismatch = document.getElementById("password-mismatch");
  
    if (password.value != confirm_password.value) {
      confirm_password.setCustomValidity("Passwords do not match!");
      mismatch.style.display = "block";
    } else {
      confirm_password.setCustomValidity("");
      mismatch.style.display = "none";
    }
  }