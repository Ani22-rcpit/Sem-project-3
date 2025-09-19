// Login Form Validation
const loginForm = document.querySelector("form");
const loginEmail = document.querySelector("input[placeholder='Your Email']");
const loginPassword = document.querySelector("input[placeholder='Password']");
const loginBtn = document.querySelector(".btn");

// Show message
function showLoginMessage(msg, type = "error") {
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

// Validation
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!loginEmail.value.trim() || !loginPassword.value.trim()) {
    showLoginMessage("All fields are required!");
    return;
  }

  if (!isValidEmail(loginEmail.value)) {
    showLoginMessage("Enter a valid email address!");
    return;
  }

  if (loginPassword.value.length < 6) {
    showLoginMessage("Password must be at least 6 characters!");
    return;
  }

  showLoginMessage("Login successful!", "success");
  loginForm.reset();
});

// Hover & Glow Effects
const loginInputs = document.querySelectorAll("form input");
loginInputs.forEach(input => {
  input.addEventListener("focus", () => {
    input.style.boxShadow = "0 0 8px #2ecc71";
    input.style.transition = "0.3s";
  });
  input.addEventListener("blur", () => {
    input.style.boxShadow = "none";
  });
});

loginBtn.addEventListener("mouseover", () => {
  loginBtn.style.boxShadow = "0 0 15px #2ecc71";
  loginBtn.style.transition = "0.3s";
});

loginBtn.addEventListener("mouseout", () => {
  loginBtn.style.boxShadow = "none";
});
