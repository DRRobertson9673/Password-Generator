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

//below defines variables needed in the application
var characterRange = [];
var passwordArray = [];
var requiredLength = 10;
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

//below checks to see if the password is the required length and if not adds a new character and adds 1 to password length
while (currentLength < requiredLength) {
  getRandom(characterRange);
  currentLength++;
}

//below shuffles the password array to add an extra level or randomness due to the first four characters being in the order lower case, upper case, number then special character if teh user chose to use all types
shuffle(passwordArray);

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  // this resets any selections previously made if a password has already been generated
  characterRange = [];
  passwordArray = [];
  currentLength = 0;
  //this next function checks that at least one character type has been selected
  checkSelection();
  //these functions check if each character type has been selected and if they have adds them to the possible character array and adds at least one of each type tp the password
  getLowerCasedValue();
  getUpperCasedValue();
  getNumericValue();
  getSpecialValue();
  //the functions below create the rest of the password
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = passwordArray.join("");
} 

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// here is the code to get the required password length using the slider
var slider = document.getElementById("slider");
var output = document.getElementById("output");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  requiredLength = this.value;
}

// here is the code for each of the toggle boxes. If the box is checked it adds the array of characters to the possible array of characters used in the password
function getLowerCasedValue() {
  var isChecked = document.getElementById("lowerCasedSwitch").checked;
  if(isChecked){
    characterRange = characterRange.concat(lowerCasedCharacters);
    getRandom(lowerCasedCharacters);
    currentLength++;
  }
}
function getUpperCasedValue() {
  var isChecked = document.getElementById("upperCasedSwitch").checked;
  if(isChecked){
    characterRange = characterRange.concat(upperCasedCharacters);
    getRandom(upperCasedCharacters);
    currentLength++;
  }
}
function getNumericValue() {
  var isChecked = document.getElementById("numericSwitch").checked;
  if(isChecked){
    characterRange = characterRange.concat(numericCharacters);
    getRandom(numericCharacters);
    currentLength++;
  }
}
function getSpecialValue() {
  var isChecked = document.getElementById("specialSwitch").checked;
  if(isChecked){
    characterRange = characterRange.concat(specialCharacters);
    getRandom(specialCharacters);
    currentLength++;
  }
}

// this is the fucntion that checks that at least one character type is selected. If not it alerts the user
function checkSelection() {
  if (document.getElementById("lowerCasedSwitch").checked === false && document.getElementById("upperCasedSwitch").checked === false && document.getElementById("numericSwitch").checked === false && document.getElementById("specialSwitch").checked === false) {
  alert('Please select at least one character type');
  }
}