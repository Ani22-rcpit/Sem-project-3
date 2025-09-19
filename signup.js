// Signup Form Validation
const signupForm = document.querySelector("form");
const nameField = document.querySelector("input[placeholder='Your name']");
const emailField = document.querySelector("input[placeholder='Your Email']");
const passwordField = document.querySelector("input[placeholder='Create Password']");
const confirmPasswordField = document.querySelector("input[placeholder='Repeat password']");
const signupBtn = document.querySelector(".btn");

// Function to show message
function showSignupMessage(msg, type = "error") {
  const box = document.createElement("div");
  box.innerText = msg;
  box.className = `msg ${type}`;
  document.querySelector(".right").prepend(box);

  setTimeout(() => box.remove(), 3000);
}

// Email check
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Form validation
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!nameField.value.trim() || !emailField.value.trim() || !passwordField.value.trim() || !confirmPasswordField.value.trim()) {
    showSignupMessage("All fields are required!");
    return;
  }

  if (!isValidEmail(emailField.value)) {
    showSignupMessage("Invalid email format!");
    return;
  }

  if (passwordField.value.length < 6) {
    showSignupMessage("Password must be at least 6 characters!");
    return;
  }

  if (passwordField.value !== confirmPasswordField.value) {
    showSignupMessage("Passwords do not match!");
    return;
  }

  showSignupMessage("Signup successful!", "success");
  signupForm.reset();
});

// Hover & Glow Effects
const inputs = document.querySelectorAll("form input");
inputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.boxShadow = "0 0 8px #2ecc71";
    input.style.transition = "0.3s";
  });
  input.addEventListener("blur", () => {
    input.style.boxShadow = "none";
  });
});

signupBtn.addEventListener("mouseover", () => {
  signupBtn.style.boxShadow = "0 0 15px #2ecc71";
  signupBtn.style.transition = "0.3s";
});

signupBtn.addEventListener("mouseout", () => {
  signupBtn.style.boxShadow = "none";
});
