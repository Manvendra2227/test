// Example JavaScript to handle form submissions (add your logic here)

document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Handle registration logic here
    console.log('User registered:', { username, email, password });
    alert('Registration successful!');
});

document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Handle login logic here
    console.log('User logged in:', { username, password });
    alert('Login successful!');
});

document.getElementById('admin-login-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;

    // Handle admin login logic here
    console.log('Admin logged in:', { username, password });
    alert('Admin Login successful!');
});
