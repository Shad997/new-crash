// Function to generate random "Cote" between 3.5X and 4.6X
function generateCote() {
  return (Math.random() * (4.6 - 3.5) + 3.5).toFixed(2) + "X";
}

// Function to generate random "Assurance" between 1.8X and 2.4X
function generateAssurance() {
  return (Math.random() * (2.4 - 1.8) + 1.8).toFixed(2) + "X";
}

// Function to generate random time interval between 2 and 3 minutes
function generateTimeInterval() {
  return Math.floor(Math.random() * (3 - 2 + 1)) + 2; // 2 or 3 minutes
}

// Function to format time according to user's local time zone
function formatTime(date) {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

// Function to generate and display the next signal
function generateSignal() {
  const currentTime = new Date();
  const interval = generateTimeInterval();
  currentTime.setMinutes(currentTime.getMinutes() + interval);

  const cote = generateCote();
  const assurance = generateAssurance();

  document.getElementById("time").textContent = formatTime(currentTime);
  document.getElementById("cote").textContent = cote + "+";
  document.getElementById("assurance").textContent = assurance;
}

// Automatically update signal every 2-3 minutes
function startAutoUpdate() {
  generateSignal(); // Initial signal
  setInterval(generateSignal, generateTimeInterval() * 60000); // Auto-update
}

// Start auto-update when the page loads
window.onload = startAutoUpdate;