// Define the TypeWriter class to create typewriter effect
class TypeWriter {
  // Constructor method to initialize the TypeWriter object
  constructor(txtElement, words, wait = 3000) {
    this.txtElement = txtElement; // HTML element where typing effect will be displayed
    this.words = words; // Array of words/phrases to type
    this.txt = ''; // Current text being displayed
    this.wordIndex = 0; // Index of the word currently being typed
    this.wait = parseInt(wait, 10); // Delay between typing/deleting each character
    this.isDeleting = false; // Flag to indicate whether deleting phase is active
    this.type(); // Call the type method to start the typing effect
  }

  // Method to handle typing effect
  type() {
    const current = this.wordIndex % this.words.length; // Get the index of the current word
    const fullTxt = this.words[current]; // Get the full text of the current word

    if (this.isDeleting) {
      // If deleting, remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // If typing, add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert the typed text into the HTML element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Set the typing speed
    let typeSpeed = 300;
    if (this.isDeleting) {
      typeSpeed /= 2; // If deleting, typing speed is slower
    }

    // Check if the word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      typeSpeed = this.wait; // If word is complete, pause before deleting
      this.isDeleting = true; // Set deleting phase to true
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false; // If text is fully deleted, move to the next word
      this.wordIndex++; // Increment word index
      typeSpeed = 500; // Pause before typing next word
    }

    // Call the type method recursively after a delay
    setTimeout(() => this.type(), typeSpeed);
  }
}

// Initialize the TypeWriter on DOM load
document.addEventListener('DOMContentLoaded', Init);

// Init function to initialize the TypeWriter object
function Init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // Create a new TypeWriter object
  new TypeWriter(txtElement, words, wait);
}

// Function to update and display the countdown clock
const timeElement = document.getElementById("clock");
const deadline = new Date().getTime() + 1000 * 60 * 60 * 24 * 365; // Current date + 1 year

function updateCountdown() {
  const now = new Date().getTime(); // Get the current time
  const timeDifference = deadline - now; // Calculate the remaining time

  // Calculate years, months, days, hours, minutes, and seconds
  //const years = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor((timeDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Format the countdown string
  const countdownStr = `${months}m ${days}d ${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;

  // Update the countdown display
  timeElement.innerText = countdownStr;

  // Update the countdown every second
  setTimeout(updateCountdown, 1000);
}

// Initial call to update the countdown
updateCountdown();
