document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms').checked;
    const passwordError = document.getElementById('password-error');
    
    // Reset error display
    passwordError.style.display = 'none';
    
    if (!fullname || !email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      passwordError.style.display = 'block';
      return;
    }
    
    if (!terms) {
      alert('Please agree to the Terms & Conditions');
      return;
    }
    
    // Here you would typically send the data to a server
    console.log('Sign up successful!', { fullname, email });
    alert('Sign up successful!');
    
    // Clear form
    document.getElementById('signupForm').reset();
  });

  // Real-time password validation
  document.getElementById('confirm-password').addEventListener('input', function() {
    const password = document.getElementById('password').value;
    const confirmPassword = this.value;
    const passwordError = document.getElementById('password-error');
    
    if (password && confirmPassword) {
      if (password !== confirmPassword) {
        passwordError.style.display = 'block';
      } else {
        passwordError.style.display = 'none';
      }
    }
  });