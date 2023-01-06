// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var characterRange = [];
var passwordArray = [];
var requiredLength = 0;
var currentLength = 0;

// Function for getting a random element from an array
function getRandom(arr) {
  var character = arr[Math.floor(Math.random()* arr.length)];
  passwordArray.push(character);
}

// Function to shuffle array (ref: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Function to generate password using user input
function generatePassword() {

characterRange = [];
passwordArray = [];
currentLength = 0;

requiredLength = prompt("how long would you like your password to be? Please enter a number between 10 and 64")

while (isNaN(requiredLength) || requiredLength < 6 || requiredLength > 64) {
  requiredLength = prompt("your input is incorrect, please enter a NUMBER between 10 and 64");
}

var addLowerCase = prompt("do you want to include lower case characters in your password? Yes or No").toUpperCase();
  while (addLowerCase !== "YES" && addLowerCase !== "NO") {
    addLowerCase = prompt("your input is incorrect, please enter a yes or no").toUpperCase();
    }    
    if (addLowerCase === "YES") {
      characterRange = characterRange.concat(lowerCasedCharacters);
      getRandom(lowerCasedCharacters);
      currentLength++;
    }

var addUpperCase = prompt("do you want to include upper case characters in your password? Yes or No").toUpperCase();
  while (addLowerCase !== "YES" && addLowerCase !== "NO") {
    addUpperCase = prompt("your input is incorrect, please enter a yes or no").toUpperCase();
    }
    if (addUpperCase === "YES") {
      characterRange = characterRange.concat(upperCasedCharacters);
      getRandom(upperCasedCharacters);
      currentLength++;
    }
        
var addNumeric = prompt("do you want to include numeric characters in your password? Yes or No").toUpperCase();
  while (addNumeric !== "YES" && addNumeric !== "NO") {
    addNumeric = prompt("your input is incorrect, please enter a yes or no").toUpperCase();
    }    
    if (addNumeric === "YES") {
      characterRange = characterRange.concat(numericCharacters);
      getRandom(numericCharacters);
      currentLength++;
    }
var addSpecial = prompt("do you want to include special characters in your password? Yes or No").toUpperCase();
  while (addSpecial !== "YES" && addSpecial !== "NO") {
    addSpecial = prompt("your input is incorrect, please enter a yes or no").toUpperCase();
    }    
    if (addSpecial === "YES") {
      characterRange = characterRange.concat(specialCharacters);
      getRandom(specialCharacters);
      currentLength++;
    }

if (addLowerCase === "NO" && addUpperCase === "NO" && addNumeric === "NO" && addSpecial === "NO") {
  alert('You have no selected any characters for your password, please try again');
}

while (currentLength < requiredLength) {
  getRandom(characterRange);
  currentLength++;
}
  
shuffle(passwordArray);

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = passwordArray.join("");
} 

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
