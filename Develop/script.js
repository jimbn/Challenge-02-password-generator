// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
// Generate a random length for specified minimum and maximum length
var randomLength = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

// Arrays of different type of characters can be used
var characters = {
  lowercase: ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase: ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  specialCharacters: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", '"', "|", ",", ".", "<", ">", '/', "?"],
};

var validation = function(num) {
  if (Number.isInteger(parseInt(num)) === false) {
    return false;
  } else{
    return true;
  }
}

var validMin = function() {
  var minPrompt = prompt("What is the MINIMUM length of the password (PLEASE ONLY USE NUMERALS)?");
    var isValid = validation (minPrompt);
    if (isValid) {
      return parseInt(minPrompt);
    } else {
      return false;
    }
}

var validMax = function () {
  var maxPrompt = prompt("What is the MAXIMUM length of the password (PLEASE ONLY USE NUMERALS)?");  
    var isValid = validation (maxPrompt);
    if (isValid) {
    return parseInt(maxPrompt);
    } else {
    return false;
  }
}

var generatePassword = function() {
  
  var passMin = validMin ();
    if (passMin === false) {
      alert("Please only input valid NUMERALS!")
      validMin();
    } 
  
  var passMax = validMax ();
    if (passMax === false) {
      alert("Please only input valid NUMERALS!")
      validMax();
    }   


  // Questionaire to see check of character specification
  var cLowercase = window.confirm("Have password contain LOWERCASE?"); 
  var cUppercase = window.confirm("Have password contain UPPERCASE?");
  var cNumbers = window.confirm("Have password contain NUMBERS?");
  var cSpecialCharacters = window.confirm("Have password contain SPECIAL CHARACTERS?");

  // Pull from above to generate random passcode
  var passwordLength = randomLength (passMin, passMax);

  // Set strings of possible characters based on questionaire.
  let pCharacters = ""
    if (cLowercase) pCharacters = pCharacters.concat(characters.lowercase.join(""));
    if (cUppercase) pCharacters = pCharacters.concat(characters.uppercase.join(""));
    if (cNumbers) pCharacters = pCharacters.concat(characters.numbers.join(""));
    if (cSpecialCharacters) pCharacters = pCharacters.concat(characters.specialCharacters.join(""));

  let gPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    gPassword += pCharacters.charAt (
      Math.floor(Math.random()*pCharacters.length)
    );
  }

  return gPassword;

};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


