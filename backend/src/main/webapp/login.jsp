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
  <title>Sign In — HerConnect</title>
  <meta name="description" content="Sign in to your HerConnect account and reconnect with your community." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap"
    rel="stylesheet" />
  <link rel="stylesheet" href="css/style.css" />
</head>

<body>
  <div class="auth-page">
    <div class="auth-card">
      <div class="auth-logo">
        <a href="index.jsp" class="logo-link">
          <img src="assets/herconnect.png" alt="HerConnect" class="logo-img" />
        </a>
      </div>
      <h1 class="auth-title">Welcome Back</h1>
      <p class="auth-sub">Sign in to continue your journey</p>
      
      <!-- Premium Error Banner -->
      <div id="error-message" style="display:none; margin-bottom:15px; color:#E74C3C; font-size:13px; text-align:center; background:rgba(231,76,60,0.1); padding:8px 12px; border-radius:8px; border:1px solid rgba(231,76,60,0.2);"></div>

      <form id="login-form">
        <div class="form-group">
          <label for="login-email">Email Address</label>
          <input type="email" id="login-email" name="email" placeholder="you@example.com" required />
        </div>
        <div class="form-group">
          <label for="login-password">Password</label>
          <input type="password" id="login-password" name="password" placeholder="••••••••" required />
        </div>
        <div style="text-align:right;margin-bottom:20px;">
          <a href="#" style="font-size:13px;color:var(--blue-light);">Forgot password?</a>
        </div>
        <button type="submit" class="btn btn-primary btn-lg form-submit" id="login-submit">Sign In</button>
      </form>
      <div class="auth-divider"><span>or</span></div>
      <div class="auth-footer">
        Don't have an account? <a href="register.jsp">Join free</a>
      </div>
    </div>
  </div>
  <script>
    document.getElementById('login-form').addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = document.getElementById('login-submit');
      const errBox = document.getElementById('error-message');
      
      errBox.style.display = 'none';
      btn.textContent = 'Signing in…';
      btn.disabled = true;

      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;

      try {
        const response = await fetch('login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams({ email, password })
        });
        
        const data = await response.json();
        
        if (data.success) {
          window.location.href = 'index.jsp';
        } else {
          errBox.textContent = data.message || 'Invalid credentials. Please try again.';
          errBox.style.display = 'block';
          btn.textContent = 'Sign In';
          btn.disabled = false;
        }
      } catch (err) {
        console.error(err);
        errBox.textContent = 'An unexpected error occurred. Please try again later.';
        errBox.style.display = 'block';
        btn.textContent = 'Sign In';
        btn.disabled = false;
      }
    });
  </script>
</body>

</html>
