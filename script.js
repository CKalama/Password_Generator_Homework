// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
 
}

/// You will need 4 ifs to label each variable that the user may want. 

var lowercaseBank = "abcdefghijklmnopqrstuvwxyz";
var uppercaseBank = lowercaseBank.toUpperCase();
var specialCharactersBank = "!@#$%^&*()";
var numberBank = "1234567890";



// Need Variable for Special Characters ALL OF THESE WILL BE IN AN ARRAY
//All of these will go into an Object that will be called in a separate function

function generatePassword() {
  var password = " ";
  var passwordBank = " ";

 var howMany = prompt("Hello! How many Characters would you like your password to be? (8-128)");

 //console.log(howMany);

//Checking if they inserted a number 8 through 128 and if its a number in general.


if (parseInt(howMany) < 8 || parseInt(howMany) > 128 || howMany === NaN) {
  alert("Error: Need a NUMBER between 1 and 128");
  generatePassword();
} else {

  //Asking user which of selected options they would like 

  var lowercase = confirm("Would you like lowercase letters?");
  var uppercase = confirm("Would you like uppercase letters?");
  var numerics = confirm ("Would you like numerical data?");
  var specialChars = confirm ("would you like any special characters?");

  if(lowercase || uppercase || numerics || specialChars) {
    if (lowercase) passwordBank += lowercaseBank;  // passwordBank = passwordBank + lowercaseBank;
    if (uppercase) passwordBank += uppercaseBank;
    if (numerics) passwordBank += numberBank;
    if (specialChars) passwordBank += specialCharactersBank;

    //Confirming that password is generated. However, it is not adhering to the numeric count the user is clicking and just generating as many characters are in the bank. 
    //console.log("Here is our answer!!!", passwordBank);

    for (let i = 0; i<howMany; i++) {  
      var generateRandomNumber = Math.floor(Math.random() * passwordBank.length );
      password += passwordBank[generateRandomNumber];
    }
  }
  console.log(password);
  return password;
  
  } 
  
}
// generatePassword();
// writePassword();



// Variable for Numbers 


//Variable for Lower and Upper case


//function for Amount of Characters 
// function userPasswordOptions() {
//   var askLength= prompt("How Long do you want your password to be?")
//   //Need an If else block
//   if (isNaN (askLength)=== true) {
//     alert("Need a Number between 8 and 128!");
//     return;
//   } 
//   //Need to check if number is less than 8 and greater than 128
//   if (askLength<8 && askLength>128) {
//     alert("Need a number between 8 and 128!");
//     return;
//   }
//   // Google Confirm Message,  
// }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);