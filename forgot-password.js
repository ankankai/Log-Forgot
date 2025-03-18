document.getElementById('resetForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');
    const resetBtn = document.getElementById('resetBtn');
    
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.style.display = 'block';
      return;
    } else {
      emailError.style.display = 'none';
    }
    
    // Simulate sending reset link
    resetBtn.textContent = 'Sending...';
    resetBtn.disabled = true;
    
    setTimeout(() => {
      successMessage.style.display = 'block';
      resetBtn.textContent = 'Send reset link';
      resetBtn.disabled = false;
      document.getElementById('email').value = '';
    }, 1500);
  }); 