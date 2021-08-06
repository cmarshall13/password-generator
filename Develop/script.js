var useNum = []

var useCap = ['A','B','C','D','E','F','G','H','I','J','K','L',
'M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

var specChar = ["!","#","$","%","&","'","(",",",")","*","+","-",".",
"/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","U+005C"]

//Function to generate a random password
function generatePassword () {
var useNum = confirm("Would you like to use Numbers in your password?");
if (useNum) {
  var useCap = confirm("Would you like to use Capitol letters in your password?");

}
if (useCap) {
  var specChar = confirm ("Would you like to use any Special characters in your password?");

}
if (specChar) {
  var passLength = prompt ("How long would you like your password to be?");

}

console.log("useNums: " + useNums);



console.log("useCap: " + useCap);

console.log("specChar: " + specChar);

console.log ("passlength: " + passLength);




}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

