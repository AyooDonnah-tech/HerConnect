
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
  