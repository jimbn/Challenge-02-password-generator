// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// Generate a random length for specified minimum and maximum length
var randomLength = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var generatePassword = function() {
  var passwordMin = prompt("What is the MINIMUM length of the password (PLEASE ONLY USE NUMERALS)?");
  passwordMin = parseInt(passwordMin);

  var passwordMax = prompt("What is the MAXIMUM length of the password (PLEASE ONLY USE NUMERALS)?");  
  passwordMax = parseInt(passwordMax);

  // var cLowercase = window.confirm("Have password contain LOWERCASE?");
  // var cUppercase = window.confirm("Have password contain UPPERCASE?");
  // var cNumbers = window.confirm("Have password contain NUMBERS?");
  // var cSpecialCharacters = window.confirm("Have password contain SPECIAL CHARACTERS?");

  var cLowercase = characters.lowercase.join("");
  var cUppercase = characters.uppercase.join("");
  var cNumbers = characters.numbers.join("");
  var cSpecialCharacters = characters.specialCharacters.join("");

  var passwordLength = randomLength (passwordMin, passwordMax);
  let pCharacters = cLowercase += cUppercase += cNumbers += cSpecialCharacters;

  let gPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    gPassword += pCharacters.charAt (
      Math.floor(Math.random()*pCharacters.length)
    );
  }
  return gPassword

};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};




var characters = {
  lowercase: ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", '"', "|", ",", ".", "<", ">", '/', "?"],
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);