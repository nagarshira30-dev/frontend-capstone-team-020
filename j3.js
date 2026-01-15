console.log("JS מחובר");

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("registerBtn");  // הכפתור
  const passwordInput = document.getElementById("password"); // השדה
  const message = document.getElementById("message");  // ההודעה

  btn.addEventListener("click", function () {
    const password = passwordInput.value;

    if (password.length < 8) {
      message.textContent = "password is too short";
      message.className = "error";
    } else {
      message.textContent = "you have signed up!";
      message.className = "success";
    }
  });
});
