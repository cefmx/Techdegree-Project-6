/* --- VARIABLES --- */
// Get the element with the id of qwerty and save it to a variable.
const qwerty = document.getElementById("qwerty");

// Get the element with the id of phrase and save it to a variable.
const phrase = document.getElementById("phrase");

// Get the element with a class of btn__reset and save it to a variable
const btnReset = document.getElementsByClassName("btn__reset")

/* Create a missed variable, initialized to 0, that you’ll use later to keep track of the
number of guesses the player has missed (remember, if the player guesses
wrong 5 times, they lose the game) */
let missed = 0;


/* --- ARRAYS --- */
// Create an array named phrases
let phrases = [
    'This is phrase one',
    'This is phrase two',
    'This is another phrase',
    'Oh and another',
    'And the last phrase',
]



// Attach an event listener to the “Start Game” button to hide the start screen overlay.
btnReset.addEventListener("click", () => {
    overlay.style.display = 'none';
});


// Function to get a random phrase
const getRandomPhraseAsArray = arr => {
    return arr[Math.floor(Math.random() * phrases.length)].split('');
  };
  