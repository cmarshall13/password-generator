//Function to generate a random password
function generatePassword (lower, upper, number, symbol, many) {
  const many = prompt ('How long would you like your password to be? Please choose a number between 8 and 128 ');
  console.log(many);
    if (many <8){
      alert('Please choose a number between 8 and 128');
      prompt ("How long would you like your password to be? Please choose a number between 8 and 128");
    };
  const numbers = confirm('Would you like to use numbers in your password?');
  console.log (numbers);
  if (numbers) {
      }
  const uppercase = confirm('Would you like to include UPPERCASE letters in your password?');
  console.log(uppercase);
  if (uppercase) {

  }
  const lowercase = confirm('Would you like to use lowercase letters in your password?');
  console.log(lowercase);
  if (lowercase) {

  }
  const symbols = confirm('Would you like to use symbols in your password?');
  console.log(symbols);
  if (symbols) {
    
  }

  let password = "";

  const typesCount = lower + upper + number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}]
    for (let i = 0; i < length; i += typesCount)  {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0];

      generatePassword += randomFunc[funcName] ();
    });
    
  
  }
  return password;


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



const randomFunction = {
  lower: getRandomLower,
  upper: getRandomCap,
  number: getRandomNum,
  symbol: getRandomSymb
};

function getRandomLower () {

  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
  console.log(getRandomLower());
}

function getRandomCap () {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
  console.log(getRandomCap());
}

function getRandomNum () {
  return String.fromCharCode(Math.floor(Math.random() *10) + 48);
  console.log(getRandomNum());
}

function getRandomSymb () {
  const symbols = '!@#$%^&*(){}[]=<>?,.'
  return symbols[Math.floor(Math.random() * symbols.length)];
}

