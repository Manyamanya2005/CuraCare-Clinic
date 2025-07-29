// Toggle Sections
function showSection(id) {
  const sections = document.querySelectorAll('.page-section');
  sections.forEach(section => section.style.display = 'none');

  const target = document.getElementById(id);
  if (target) {
    target.style.display = 'block';
  }

  // Special case: when hero is shown as home
  if (id === 'hero') {
    document.getElementById('welcomeMsg').style.display = 'block';
  } else {
    document.getElementById('welcomeMsg').style.display = 'none';
  }

  // Hide consultation form unless explicitly shown
  if (id !== 'consultation-section') {
    document.getElementById('consultFormContainer').style.display = 'none';
  }
}

// Login System
function login(event) {
  event.preventDefault();
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "admin" && pass === "admin123") {
    showSection('profile-section');
  } else {
    alert("Invalid credentials");
  }
}

// Logout
function logout() {
  showSection('login-section');
}

// Start Consultation (Show Form)
function startConsultation() {
  showSection('consultation-section');
  document.getElementById('consultFormContainer').style.display = 'block';
}

// DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  const consultForm = document.getElementById("consultForm");
  const successMsg = document.getElementById("consultSuccess");

  if (consultForm) {
    consultForm.addEventListener("submit", function (e) {
      e.preventDefault();
      successMsg.style.display = "block";
      consultForm.reset();
    });
  }

  // Show default welcome/hero
  showSection('hero');
});
