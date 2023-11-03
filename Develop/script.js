// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); // button ID is #generate

// Write password to the #password input
function writePassword() {
  //declare variables to be used to write password
  var charTypesUpperIsTrue;
  var charTypesLowerIsTrue;
  var charTypesNumIsTrue;
  var charTypesSpecialIsTrue;
  var passwordLength;


  // Choose length of password between 8-128 characters
while(true){
  passwordLength = window.prompt("Enter desired password length, between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);
  if (passwordLength >= 8 && passwordLength <= 128){
    break;
  } else {
    alert("Invalid input. Please enter a number between 8 and 128.");

  }
}
  // Confirm character types - lower, upper, num and/or special
  while (typeof charTypesUpperIsTrue === 'undefined'){
    let charTypesUpper = window.prompt("Do you want to include UPPER CASE characters? Yes/No");
    charTypesUper = charTypesUpper.toLowerCase();
      if (charTypesUpper === "yes" || charTypesUpper === "Yes"){
      charTypesUpperIsTrue = true;
    } else if (charTypesUpper === "no" || charTypesUpper === "No"){
      charTypesUpperIsTrue = false;
    } else {
      alert("Invalid input. Please enter Yes or No.");
    }
  }

  while(typeof charTypesLowerIsTrue === 'undefined'){
    let charTypesLower = window.prompt("Do you want to include LOWER CASE letters? Yes/No");
    charTypesLower = charTypesLower.toLowerCase();
      if (charTypesLower === "yes" || charTypesLower === "Yes"){
        charTypesLowerIsTrue = true;
      } else if(charTypesLower === "no" || charTypesLower === "No"){
        charTypesLowerIsTrue = false;
      } else {
        alert("Invalid input. Please enter Yes or No.");
      }
  }

  while(typeof charTypesNumIsTrue === 'undefined'){
    let charTypesNum = window.prompt("Do you want to include NUMBERS? Yes/No");
    charTypesNum = charTypesNum.toLowerCase();
      if (charTypesNum === "yes" || charTypesNum === "Yes"){
        charTypesNumIsTrue = true;
      } else if(charTypesNum === "no" || charTypesNum === "No"){
        charTypesNumIsTrue = false;
      } else {
        alert("Invalid input. Please enter Yes or No.");
      }
  }
  // let charTypesSpecial = window.prompt("Do you want to include special characters? Yes/No");
  while(typeof charTypesSpecialIsTrue === 'undefined'){
    let charTypesSpecial = window.prompt("Do you want to include SPECIAL CHARACTERS? Yes/No");
    charTypesSpecial = charTypesSpecial.toLowerCase();
      if (charTypesSpecial === "yes" || charTypesSpecial === "Yes"){
        charTypesSpecialIsTrue = true;
      } else if(charTypesSpecial === "no" || charTypesSpecial === "No"){
        charTypesSpecialIsTrue = false;
      } else {
        alert("Invalid input. Please enter Yes or No.");
      }
  }

  console.log(passwordLength + charTypesUpperIsTrue + charTypesLowerIsTrue + charTypesNumIsTrue + charTypesSpecialIsTrue);
  
  
  //define available characters for password
  // var password = generatePassword();
  var password = '';
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "1234567890";
  var specialChars = "!@#$%^&*()";
  var availChars = '';
  //define which character sets were specified by user & put them into var availChars
  if (charTypesUpperIsTrue) availChars += upperCase;
  if (charTypesLowerIsTrue) availChars += lowerCase;
  if (charTypesNumIsTrue) availChars += numbers;
  if (charTypesSpecialIsTrue) availChars += specialChars;

console.log(availChars);

// generates the password based on input criteria
  for (let i = 0; i <= passwordLength; i++){
    var randomGen = Math.floor(Math.random() * availChars.length);
    password += availChars[randomGen];

    console.log(password);
  }


  var passwordText = document.querySelector("#password"); // #password displays output in the textbox

  passwordText.value = password; //changes placeholder text for password and returns the new password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);