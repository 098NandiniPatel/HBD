// Set the countdown date to June 1, 2023, 00:00:00
const countdownDate = new Date('June 15, 2023 16:03:00').getTime();

// Update the countdown every 1 second
const countdown = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time
  const distance = countdownDate - now;

  // Check if the countdown has ended
  if (distance <= 0) {
    clearInterval(countdown);
    document.getElementById('timer').style.display = 'none';
    document.getElementById('login').style.display = 'block';
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the remaining time
  document.getElementById('countdown').textContent = `${days}day ${hours}hr ${minutes}min ${seconds}sec`;
}, 1000);

// Login function
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the username and password are correct
  if (username === 'username' && password === 'password') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('birthday-card').style.display = 'block';
    location.href="main.html"
    return false; // Prevent form submission
  } else {
    alert('Invalid username or password');
    return false; // Prevent form submission
  }
}
