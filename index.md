<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>CuraCare Clinic</title>
  <link rel="stylesheet" href="style.css" />
  <script src="script.js" defer></script>
</head>
<body>

  <!-- Header -->
  <header class="main-header">
    <div class="header-content">
      <img src="doc banner.jpg" alt="Clinic Logo" class="logo" />
      <h1 class="clinic-name">CuraCare Clinic</h1>
    </div>
    <nav class="nav-links">
      <a href="#" onclick="showSection('services')">Services</a>
      <a href="#" onclick="showSection('doctor')">Doctor</a>
      <a href="#" onclick="showSection('about')">About</a>
      <a href="#" onclick="showSection('contact')">Contact</a>
      <a href="#" onclick="showSection('telemedicine')">Telemedicine</a>
      <a href="#" onclick="showSection('login-section')">Admin Login</a>
    </nav>
  </header>

  <!-- Sections -->

  <!-- Hero Section -->
  <section class="hero page-section" id="hero">
    <div class="hero-text">
      <h2>Your Health, Our <br><span>Priority</span></h2>
    </div>
    <img src="doc 2.jpg" alt="Clinic Banner" />
    <img src="doc 4.jpg"alt="Clinic Banner"/>
    <img src="doc 5.jpg"alt="Clinic Banner"/>
  </section>

  <!-- Login Section -->
  <section id="login-section" class="page-section">
    <h2>Login</h2>
    <form onsubmit="login(event)">
      <input type="text" id="username" placeholder="Username" required />
      <input type="password" id="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </section>

  <!-- Profile Section -->
  <section id="profile-section" class="page-section">
    <h2>Welcome, Admin</h2>
    <p>Consultation Messages:</p>
    <div id="consult-data">
      <p>Loading...</p>
    </div>
    <button onclick="logout()">Logout</button>
  </section>

  <!-- Services Section -->
  <section class="services page-section" id="services">
    <h2>Our General Health Services</h2>
    <p>We care about your well-being. Explore our range of basic health checkups available for all ages.</p>
    <div class="service-boxes">
    
  

      <div class="service-card">
        <img src="general.jpg" alt="General Checkup">
        <h3>General Checkup</h3>
        <p>Routine checkups including BP, sugar, weight, and overall vitals.</p>
      </div>
      <div class="service-card">
        <img src="wllnes.jpg" alt="Mental Wellness" />
        <h3>Mental Wellness</h3>
        <p>Counseling and support for anxiety, stress, sleep issues, and overall mental well-being.</p>
      </div>
      <div class="service-card">
        <img src="diett.jpg" alt="Diet & Nutrition" />
        <h3>Diet & Nutrition</h3>
        <p>Personalized diet plans and lifestyle guidance for weight control, diabetes, pregnancy, and fitness goals.</p>
      </div>
      <div class="service-card">
        <img src="child.jpg" alt="Child Checkup">
        <h3>Child Checkup</h3>
        <p>Pediatric services including growth monitoring and vaccinations.</p>
      </div>
      <div class="service-card">
        <img src="women.jpg" alt="Women's Health">
        <h3>Women’s Health</h3>
        <p>Wellness checkups, gynec support, and PCOD/PCOS consultation.</p>
      </div>
      <div class="service-card">
        <img src="skin.jpg" alt="Skin Care" />
        <h3>Skin & Dermatology</h3>
        <p>Diagnosis and treatment of common skin conditions, infections, and allergies.</p>
      </div>
    </div>
  </section>

  <!-- Telemedicine Section -->
  <section id="telemedicine" class="telemedicine page-section">
    <div class="container">
      <h2>Telemedicine Services</h2>
      <p>Access expert medical care from home.</p>
      <ul>
        <li>✔️ Book appointments online</li>
        <li>✔️ Secure video consultations</li>
        <li>✔️ Digital prescriptions</li>
        <li>✔️ Follow-up care anytime, anywhere</li>
      </ul>
      <a href="#" class="btn" onclick="showSection('consultation')">Start Your Online Consultation</a>
    </div>
  </section>

  <!-- Consultation Section -->
  <section id="consultation" class="consultation page-section">
    <h2>Online Consultation Form</h2>
    <form id="consultForm">
      <input type="text" id="name" placeholder="Your Full Name" required>
      <input type="email" id="email" placeholder="Email Address" required>
      <input type="text" id="phone" placeholder="Phone Number" required>
      <textarea id="message" placeholder="Describe your symptoms..." required></textarea>
      <button type="submit">Submit Consultation</button>
    </form>
    <div id="consultSuccess" class="success-message" style="display:none;">
      ✅ Your request is important to us.
    </div>
  </section>

  <!-- Doctor Section -->
  <section class="doctor page-section" id="doctor">
    <h2>Meet Our Expert</h2>
    <div class="doctor-profile">
      <img src="manoj.jpg" alt="Dr. Manoj M U">
      <div class="doctor-details">
        <h3>Dr. Manoj M U</h3>
        <p>MBBS, General Medicine</p>
        <p>Trusted general physician with a patient-first approach.</p>
        <p>A seasoned general physician who prioritizes compassionate, individualized care.</p>
       <p>Skilled in holistic diagnosis and innovative treatment strategies for diverse health concerns.</p>

      </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="boxed-section page-section">
    <h3>🏥 About Our Clinic</h3>
    <div class="boxed-content">
      <p>CuraCare Clinic is a compassionate medical center focused on personalized care for all ages
        CuraCare Clinic is a compassionate medical center focused on personalized care for all ages.
We combine modern medicine with a human touch, ensuring every patient feels heard and supported.
From preventive checkups to long-term treatment plans, we tailor care to individual needs.
Our team is committed to timely, ethical, and evidence-based healthcare.
At CuraCare, your well-being isn't just our goal — it's our promise.


    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="boxed-section page-section">
    <h3>📍 Contact Us</h3>
    <div class="boxed-content">
      <p><strong>Phone:</strong> 8088030711</p>
      <p><strong>Email:</strong> Manuindia7@gmail.com</p>
      <p><strong>Address:</strong> Maruti Nagar, Nelamangala, Bengaluru – 562123</p>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    <p>&copy; 2025 CuraCare Clinic. All rights reserved.</p>
  </footer>
</body>
</html>
