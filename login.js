document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Here you would typically send a request to your server
    // For now, we'll just log the credentials
    console.log('Login attempt:', { username, password });
    
    // Show a success message
    alert('Login successful!');
}); 