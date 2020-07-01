// Assignment Code Beginning
// ****This time, lets start by making the function that will retrieve all the other functions' data*******
// ****Note to Self: This could help plan out my next move??*****

//Global Scope Password
var password = "";

//This is the function that will help plan out what we need, its a function but also a "blueprint"
var passwordGeneration = function() {
  // Call in Global Password here to send out at end
  password = "";

  //Create a function that will ask user for length of password. Note: Must be between 8 and 128 Chara long
  var lengthPassword = passwordLength();

  //Create a function that will determine all inclusions for Character Sets
  var passwordCharaSets = charaInclusions();
};


// Assignment Code Ending
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
