<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    // Redirect to index if already logged in
    if (session.getAttribute("name") != null) {
        response.sendRedirect("index.jsp");
        return;
    }
%>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Join HerConnect — Free Registration</title>
  <meta name="description" content="Create your free HerConnect account and join thousands of women rising together." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
  <style>
    .strength-bar {
      height: 4px;
      border-radius: 2px;
      background: var(--blue-soft);
      margin-top: 8px;
      overflow: hidden;
    }

    .strength-fill {
      height: 100%;
      width: 0;
      border-radius: 2px;
      transition: width 0.4s ease, background 0.4s ease;
    }

    .strength-label {
      font-size: 11px;
      color: var(--white-60);
      margin-top: 4px;
    }
  </style>
</head>

<body>
  <div class="auth-page">
    <div class="auth-card" style="max-width:500px;">
      <div class="auth-logo">
        <a href="index.jsp" class="logo-link">
          <img src="assets/herconnect.png" alt="HerConnect" class="logo-img" />
        </a>
      </div>
      <h1 class="auth-title">Join HerConnect</h1>
      <p class="auth-sub">Free forever. No credit card required.</p>

      <!-- Premium Error Banner -->
      <div id="error-message" style="display:none; margin-bottom:15px; color:#E74C3C; font-size:13px; text-align:center; background:rgba(231,76,60,0.1); padding:8px 12px; border-radius:8px; border:1px solid rgba(231,76,60,0.2);"></div>

      <form id="register-form">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div class="form-group">
            <label for="reg-first">First Name</label>
            <input type="text" id="reg-first" name="firstName" placeholder="Amara" required />
          </div>
          <div class="form-group">
            <label for="reg-last">Last Name</label>
            <input type="text" id="reg-last" name="lastName" placeholder="Kwezi" required />
          </div>
        </div>
        <div class="form-group">
          <label for="reg-email">Email Address</label>
          <input type="email" id="reg-email" name="email" placeholder="you@example.com" required />
        </div>
        <div class="form-group">
          <label for="reg-role">I am a…</label>
          <select id="reg-role" name="role">
            <option>Entrepreneur / Founder</option>
            <option>Professional</option>
            <option>Creative</option>
            <option>Student</option>
            <option>Mentor / Coach</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="reg-password">Password</label>
          <input type="password" id="reg-password" name="password" placeholder="••••••••" required />
          <div class="strength-bar">
            <div class="strength-fill" id="strength-fill"></div>
          </div>
          <div class="strength-label" id="strength-label">Enter a password</div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg form-submit" id="reg-submit">Create My Account</button>
      </form>
      <div class="auth-footer" style="margin-top:16px;">
        Already a member? <a href="login.jsp">Sign in</a>
      </div>
      <p style="text-align:center;font-size:11px;color:var(--white-60);margin-top:16px;">By joining you agree to our <a
          href="#" style="color:var(--blue-light);">Terms</a> & <a href="#" style="color:var(--blue-light);">Privacy
          Policy</a></p>
    </div>
  </div>
  <script>
    const pwd = document.getElementById('reg-password');
    const fill = document.getElementById('strength-fill');
    const label = document.getElementById('strength-label');
    pwd.addEventListener('input', () => {
      const v = pwd.value;
      let score = 0;
      if (v.length >= 8) score++;
      if (/[A-Z]/.test(v)) score++;
      if (/[0-9]/.test(v)) score++;
      if (/[^A-Za-z0-9]/.test(v)) score++;
      const map = ['', 'Weak', 'Fair', 'Good', 'Strong'];
      const colors = ['', '#E74C3C', '#E67E22', '#F1C40F', '#2563EB'];
      fill.style.width = (score * 25) + '%';
      fill.style.background = colors[score];
      label.textContent = score ? map[score] : 'Enter a password';
    });

    document.getElementById('register-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('reg-submit');
      const errBox = document.getElementById('error-message');
      errBox.style.display = 'none';
      
      btn.textContent = 'Creating account…';
      btn.disabled = true;

      const firstName = document.getElementById('reg-first').value;
      const lastName = document.getElementById('reg-last').value;
      const email = document.getElementById('reg-email').value;
      const role = document.getElementById('reg-role').value;
      const password = document.getElementById('reg-password').value;

      try {
        const response = await fetch('register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({ firstName, lastName, email, role, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
          window.location.href = 'index.jsp';
        } else {
          errBox.textContent = data.message || 'Registration failed. Please try again.';
          errBox.style.display = 'block';
          btn.textContent = 'Create My Account';
          btn.disabled = false;
        }
      } catch (err) {
        console.error(err);
        errBox.textContent = 'An unexpected error occurred. Please try again.';
        errBox.style.display = 'block';
        btn.textContent = 'Create My Account';
        btn.disabled = false;
      }
    });
  </script>
</body>

</html>
