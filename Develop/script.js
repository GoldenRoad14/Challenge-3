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
    // console.log(passwordLength + "yay!")
    break;
  } else {
    // console.log(passwordLength + "oops!");
    alert("Invalid input. Please enter a number between 8 and 128.");

  }
}
  // Confirm character types - lower, upper, num and/or special
  while (typeof charTypesUpperIsTrue === 'undefined'){
    let charTypesUpper = window.prompt("Do you want to include UPPER CASE characters? Yes/No");
    charTypesUper = charTypesUpper.toLowerCase();
      if (charTypesUpper === "yes" || charTypesUpper === "Yes"){
      // console.log(charTypesUpper);
      charTypesUpperIsTrue = true;
    } else if (charTypesUpper === "no" || charTypesUpper === "No"){
      charTypesUpperIsTrue = false;
    } else {
      alert("Invalid input. Please enter Yes or No.");
    }
    // console.log(charTypesUpperIsTrue);
  }

  while(typeof charTypesLowerIsTrue === 'undefined'){
    let charTypesLower = window.prompt("Do you want to include LOWER CASE letters? Yes/No");
    charTypesLower = charTypesLower.toLowerCase();
      if (charTypesLower === "yes" || charTypesLower === "Yes"){
        // console.log(charTypesLower);
        charTypesLowerIsTrue = true;
      } else if(charTypesLower === "no" || charTypesLower === "No"){
        charTypesLowerIsTrue = false;
      } else {
        alert("Invalid input. Please enter Yes or No.");
      }
      // console.log(charTypesLowerIsTrue);
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
      // console.log(charTypesLowerIsTrue);
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
      // console.log(charTypesLowerIsTrue);
  }

  console.log("You entered: " + passwordLength + charTypesUpperIsTrue + charTypesLowerIsTrue + charTypesNumIsTrue + charTypesSpecialIsTrue);
  
  
  
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password"); // #password displays output in the textbox

  // passwordText.value = password; //changes placeholder text for password and returns the new password

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);








// Validate input

// Generate password & write to page