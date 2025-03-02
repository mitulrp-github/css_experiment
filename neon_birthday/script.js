window.onload = function() {
  const userNameElement = document.getElementById('userName');
  const birthdayMessageElement = document.getElementById('birthdayMessage');
  const fromLineElement = document.getElementById('fromLine');
  
  // User's name, you can change it here dynamically
  const userName = "mitulrp-github"; // Change this name as needed
  
  // Display the main birthday message after the typing animation
  setTimeout(function() {
      userNameElement.textContent = `Happy Birthday, ${userName}`;
  }, 2000); // Wait 5 seconds after typing for the name to appear
  
  // Display "From: AK" line after the user's name
  setTimeout(function() {
      fromLineElement.textContent = "From: Mitul";
  }, 5000); // Display "From: Mitul" after the user's name appears

  // Start the typing effect for "Happy Birthday"
  setTimeout(function() {
      birthdayMessageElement.style.opacity = 1; // Start revealing the message
  }, 1000); // Delay to match the start of typing animation
};
