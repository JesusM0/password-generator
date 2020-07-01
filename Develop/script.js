// Assignment Code

// This variable will store our password which will be a string
var password = "";

//Next, Create a series of functions for password length, char types included, and validation

//First prompt user of length of password?
var passLength = function() {
  var passwordLength = prompt("Type the length of the desired password. Minimum limit is 8 character, maximum is 128.");

  //Checks if user entered less than or more than minimum or maximum allowed
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Length Must Be Between 8 and 128 Characters Long!")
    return passLength();
  }
}


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
