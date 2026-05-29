// LOGIN.JS - Links frontend to backend API
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const messageBox = document.getElementById('messageBox');

    // Clear previous messages
    if (messageBox) {
        messageBox.style.display = 'none';
        messageBox.textContent = '';
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Logging in...';
    }

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ email, password })
        });
        
        let data;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            throw new Error(`Server returned non-JSON response (${response.status} ${response.statusText}). Is the backend running?`);
        }
        
        if (data.success) {
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("user", JSON.stringify({ name: data.name, email: data.email }));
            localStorage.setItem("currentUser", data.name);
            window.location.href = 'index.html'; // redirect to dashboard
        } else {
            if (messageBox) {
                messageBox.textContent = data.message || 'Invalid credentials. Please try again.';
                messageBox.className = 'message error';
                messageBox.style.display = 'block';
            } else {
                alert(data.message || 'Invalid credentials. Please try again.');
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Login';
            }
        }
    } catch (err) {
        console.error(err);
        const errorMsg = err.message || `Could not connect to the backend server. Please ensure the API is running at ${API_BASE_URL}.`;
        if (messageBox) {
            messageBox.textContent = errorMsg;
            messageBox.className = 'message error';
            messageBox.style.display = 'block';
        } else {
            alert(errorMsg);
        }
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Login';
        }
    }
});