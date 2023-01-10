// Array of special characters to be included in password
var specialCharacters = [
  '@','%','+','\\','/',"'", '!', '#','$','^','?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y','z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  var Q1 = Number(prompt("Please choose the lenght of your password, between 10-64 characters."));
        if (!enter) {
        alert("This needs a value");
      } else if (enter < 8 || enter > 128) {
        enter = parseInt(prompt("You must choose between 8 and 128"));
      }  else if (isNaN(number)) {
          parseInt(prompt("It is not a number. Please enter a number from 1 to 100", ""));
      }


  Q2 = prompt("Would you like to use lowercase letters?");
 
  Q3 = prompt("Would you like to use upperrcase letters?");

  Q4 = prompt("Would you like to use numbers in your password?");

  Q5 = prompt("Would you like to use special characters in your password?");
  
  
}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);