const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme")) {
  body.className = localStorage.getItem("theme");
  toggleBtn.textContent = body.classList.contains("dark") ? "🌙 Dark" : "☀️ Light";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  // Update button text
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "🌙 Dark";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "☀️ Light";
    localStorage.setItem("theme", "light");
  }
});
