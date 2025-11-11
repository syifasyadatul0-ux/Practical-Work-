/* Validates user input and checks login credentials */
function handleLogin(event) {
  event.preventDefault();

  // Get input values
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Help message elements
  const usernameHelp = document.getElementById('usernameHelp');
  const passwordHelp = document.getElementById('passwordHelp');

  // Hide previous messages
  usernameHelp.classList.add('d-none');
  passwordHelp.classList.add('d-none');

  // Empty field validation
  if (username === '' || password === '') {
    if (username === '') {
      usernameHelp.textContent = 'Username is required';
      usernameHelp.classList.remove('d-none');
    }
    if (password === '') {
      passwordHelp.textContent = 'Password is required';
      passwordHelp.classList.remove('d-none');
    }
    return false;
  }

  // Demo credentials check
  if (username === 'testing123' && password === '1234567890') {
    // Redirect to home page if valid
    window.location.href = 'home.html';
  } else {
    // Invalid login
    passwordHelp.textContent = 'Invalid username or password';
    passwordHelp.classList.remove('d-none');
  }

  return false;
}

/* Validates booking form fields and displays summary popup */
function handleBooking(e) {
  e.preventDefault();

  // Collect form values
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const date = document.getElementById('travelDate').value;
  const guests = Number(document.getElementById('numGuests').value);
  const destination = document.getElementById('destination').value;

  // Field checks
  if (name.length < 3) {
    alert('Please enter your full name (min 3 characters).');
    return false;
  }
  if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
    alert('Please enter a valid email address.');
    return false;
  }
  if (!date) {
    alert('Please choose a travel date.');
    return false;
  }
  if (guests < 1) {
    alert('Number of guests must be at least 1.');
    return false;
  }

  // Show booking summary in popup
  const summary = `Name: ${name}\nEmail: ${email}\nDestination: ${destination}\nDate: ${date}\nGuests: ${guests}`;
  document.getElementById('popupText').innerText = summary;
  document.getElementById('confirmPopup').style.display = 'flex';
  return false;
}

/* Closes the confirmation overlay */
function closePopup() {
  document.getElementById('confirmPopup').style.display = 'none';
}
