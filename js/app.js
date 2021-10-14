// **** VARIABLES! ****  

const qwerty = document.getElementById('qwerty');  
const phrase = document.getElementById('phrase'); 
const startButton = document.querySelector('.start-button'); 
let missed = 0; // to keep track of the number of guesses the player has missed
const phrases = [
	"You shall not pass", 
	"Fly you fools", 
	"My precious", 
	"A wizard is never late", 
	"Even darkness must pass"
];
const overlay = document.getElementById('overlay');
const letters = document.getElementsByClassName('letter');
const lettersSeen = document.getElementsByClassName('show'); 
const ul = document.getElementsByTagName('ul')[0]; 
const heart = document.getElementsByTagName('img');
const title = document.querySelector('.title'); 
let reset = false; 




// **** FUNCTIONS and EVENT LISTENERS! ****

// listen for the start game button to be pressed
startButton.addEventListener('click', () => {
	overlay.style.display = "none"; 
	if (reset === true && missed === 5) {
		resetGame(); 
	} else if (reset === true && missed != 5) {
		resetGame(); 
	}
}); 


// return a random phrase from an array
function getRandomPhraseAsArray(arr) {
	let randomString = arr[Math.floor(Math.random()*arr.length)];
	let splitString = randomString.split(""); 
	return splitString; 
}
getRandomPhraseAsArray(phrases);


// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
	for (var i = 0; i < arr.length; i++) {
		let li = document.createElement('li'); 
		li.textContent = arr[i]; 
		ul.appendChild(li); 
		if (arr[i] != " ") {
			li.className = "letter"; 
		} else {
			li.className = "space"; 
		}
	}
}


const phraseArray = getRandomPhraseAsArray(phrases); 
addPhraseToDisplay(phraseArray); 


// check if a letter is in the phrase 
 function checkLetter(btn) {
 	let match = false; 
 	for (var i = 0; i < letters.length; i++) {
 		
 		if (btn.target.textContent === letters[i].textContent.toLowerCase()) {
 			letters[i].classList.add("show"); 
 			match = true; 
 		}
 	}
 	return match; 
 }


// check if the game has been won or lost
  function checkWin() {
	if (letters.length === lettersSeen.length) {
		overlay.style.display = ""; 
		overlay.className = "win"; 
		title.innerHTML = "<h1>You Win!</h1>";
		startButton.textContent = "Start Again!";
	} 
	else if (missed > 4) {
		overlay.style.display = "";
		overlay.className = "lose";
		title.innerHTML = "<h1>You lose!</h1>";
		startButton.textContent = "Start Again!"; 
		reset = true; 
	} 
}

// listen for the onscreen keyboard to be clicked
 qwerty.addEventListener('click', (event) => {
	let letterFound = checkLetter(event);

if (event.target.tagName === "BUTTON") {
	event.target.classList = "chosen"; 
	event.target.disabled = "true"; 
	if (letterFound === false && missed < 5) {
		heart[missed].setAttribute('src', 'images/lostHeart.png'); 
		missed++; 

	}
}
checkWin();
}); 


// reset the game: hearts, keyboard, phrase
 function resetGame() {
 	if (reset === true) {
	 	missed = 0; 
	 	resetHearts(); 
	 	resetKeyboard(); 
		resetPhrase();
		const phraseArray = getRandomPhraseAsArray(phrases); 
		addPhraseToDisplay(phraseArray); 
 	}	
 }

 function resetKeyboard() {
 	let buttonCheck = document.querySelectorAll('button');
 	for (var i = 0; i < buttonCheck.length; i++) {
 		buttonCheck[i].className = ""; 
 		buttonCheck[i].disabled = false; 
 	}
 }

 function resetPhrase() {
 	const li = document.querySelectorAll(".letter, .space");
      for (let i = 0; i < li.length; i += 1) {
         ul.removeChild(li[i]);
      }
 }

 function resetHearts () {
 	for (var i = 0; i < heart.length; i++) {
 		let newHeart = heart[i]; 
 		newHeart.setAttribute('src', 'images/liveHeart.png'); 
 	}
 }

