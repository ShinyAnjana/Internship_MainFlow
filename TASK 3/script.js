const form = document.getElementById('user-form');

form.addEventListener('submit', (event) => {
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  // Basic validation with improved security
  if (username.trim() === '') {
    alert('Please enter a username.');
    event.preventDefault();
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    alert('Please enter a valid email address.');
    event.preventDefault();
  } else {
    // Sanitize user input before using it (explained below)
    const sanitizedUsername = sanitizeInput(username);
    const sanitizedEmail = sanitizeInput(email);

    // Now use sanitizedUsername and sanitizedEmail for further processing
  }
});

function sanitizeInput(input) {
  // Escape special characters using a library like DOMPurify
  const sanitized = DOMPurify.sanitize(input);
  return sanitized;
}
