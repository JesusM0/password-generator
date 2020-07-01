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

//This is the function that will prompt for **password length**
var passwordLength = function() {
  //First, lets ask the user for the length of the password using a prompt
  var lengthPass = prompt("Enter Desired Length of New Password. Must Be Between 8 and 128 Characters Long.");

  //Next, lets validate the user input(Whether user entered invalid length or entered nothing at all)
  if (lengthPass < 8 || lengthPass > 128 || lengthPass === "") {
    alert("Invalid Length Entry. Length Must Be Between 8 and 128 Characters Long.")
    return passwordLength;
  }

  //This turns string into number. Note:refer to documentation if im still confused later. Thanks for showing me this
  lengthPass = Math.floor(Number(lengthPass));

  //This will send data from this function to layout function!
  return lengthPass;
}
passwordLength();


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
