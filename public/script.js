(async () => {
  document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.text();
      document.getElementById('response').innerText = result;
    } catch (error) {
      document.getElementById('response').innerText = 'Registration failed. Please try again.';
      console.error('Error:', error);
    }
  });
})();
