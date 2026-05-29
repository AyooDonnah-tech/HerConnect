// REGISTER.JS - Links frontend to backend API
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitBtn = e.target.querySelector('button');
    const messageBox = document.getElementById('messageBox');
    const formInputs = e.target.querySelectorAll('input');

    // Clear previous messages
    if (messageBox) {
        messageBox.style.display = 'none';
        messageBox.textContent = '';
    }

    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Creating account...';
    }

    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({ name, email, password })
        });
        
        let data;
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            throw new Error(`Server returned non-JSON response (${response.status} ${response.statusText}). Is the backend running?`);
        }
        
        if (data.success) {
            if (messageBox) {
                messageBox.textContent = 'Account created successfully! Redirecting you to login...';
                messageBox.className = 'message success';
                messageBox.style.display = 'block';
            } else {
                alert('Account created successfully! Please log in.');
            }

            // Disable all form inputs to prevent further interaction
            formInputs.forEach(input => input.disabled = true);

            if (submitBtn) {
                submitBtn.textContent = 'Account created!';
            }

            // Redirect after 2.5 seconds delay so they can see the success message
            setTimeout(() => {
                window.location.href = 'Login.html'; // redirect to login page
            }, 2500);
        } else {
            if (messageBox) {
                messageBox.textContent = data.message || 'Registration failed. Please try again.';
                messageBox.className = 'message error';
                messageBox.style.display = 'block';
            } else {
                alert(data.message || 'Registration failed. Please try again.');
            }
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Create account';
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
            submitBtn.textContent = 'Create account';
        }
    }
});