// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

/// You will need 4 ifs to label each variable that the user may want. 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Need Variable for Special Characters ALL OF THESE WILL BE IN AN ARRAY
//All of these will go into an Object that will be called in a separate function
var specialCharacters = "!@#$%^&*()"

// Variable for Numbers 
var numberCharacters = "1234567890"

//Variable for Lower and Upper case
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = lowerCase.toUpperCase();


//function for Amount of Characters 
function userPasswordOptions() {
  var askLength= prompt("How Long do you want your password to be?")
  //Need an If else block
  if (isNaN (askLength)=== true) {
    alert("Need a Number between 8 and 128!");
    return;
  } 
  //Need to check if number is less than 8 and greater than 128
  if (askLength<8 && askLength>128) {
    alert("Need a number between 8 and 128!");
    return;
  }
  // Google Confirm Message,  
}