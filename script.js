


var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var specialCharacters = ['@','%', '+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];
var upperCasedCharacters = ['A','B','C',
  'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];






function passwordOptions() {
  
  var length = parseInt(
    prompt("How many characters would you like your password to contain?")
  );

  if (isNaN(length) === true) {
    alert("No password for you");
    return;
  }
  if (length < 8) {
    alert("Password length must be at least 8 characters");
    return;
  }
  if (length > 128) {
    alert("Password length must less than 129 characters");
    return;
  }

  var hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters."
  );

  var hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters."
  );

  var hasLowerCasedCharacters = confirm(
    'Click OK to confirm including lowercase characters.'
  );

  var hasUpperCasedCharacters = confirm(
    'Click OK to confirm including uppercase characters.'
  );

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;
}




// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

