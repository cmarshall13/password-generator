//Function to get Password Length
function getPasswordLength () {
  let lengthOfPassword = prompt("How long would you like your password to be? Note: Must be between 8 & 128 characters.");
  while (lengthOfPassword < 8 || lengthOfPassword > 128 || lengthOfPassword === null) {
    alert("You did not choose a valid length. Please select a number between 8 & 128.")
    lengthOfPassword = prompt("How long would you like your password to be? Note: Must be between 8 & 128 characters.");
  }
  return lengthOfPassword;
};

//Function to confirm character types
function specialRequests () {
  let useLower = confirm("Would you like to use lowercase letters in your password?");
  let useUpper = confirm("Would you like to use UPPERCASE letters in your password?");
  let useNum = confirm("Would you like to use numbers in your password?");
  let useSymbol = confirm("Would you like to use special characters in your password?");

  let confirmChar = new Array(useLower, useUpper, useNum, useSymbol);
  let falseChar = confirmChar.every(confirmElement => !confirmElement);
  if (falseChar) {
    alert("You did not choose any valid characters, please try again!")
    specialRequests();
  }
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numeric = '0123456789';
const symbols = `!@#$%^&*()+={}[]<>/?'`;

let passwordRange = '';
if (useLower) {
  passwordRange += lowerCase;
}
if (useUpper){
  passwordRange += upperCase;
}
if (useNum) {
  passwordRange += numeric;
}
if (useSymbol) {
  passwordRange += symbols;
}
return passwordRange;

};


//Function to generate a random password
function generatePassword () {
  let chosenLength = getPasswordLength();
  let characterTypes = specialRequests();

  let generatedPassword = '';
  for (i=0; i < chosenLength; i++){
    generatedPassword += characterTypes.charAt(Math.floor(Math.random() * characterTypes.length));
  }
  return generatedPassword;


}



// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);