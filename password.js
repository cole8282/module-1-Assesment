
console.log("Welcome to the password validator tool!");

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


reader.question("What is your password?", function(input) {


  if (input.length >= 10 && input.length <= 20) {
    console.log('Password Succesfull!');
  } else if ((input.length >= 21 && input.length <= 25) || (input.length >= 5 && input.length <= 9)) {
    console.log('Failed but close attempt');
  } else {
    console.log('Password Failed');
  }

})


/*const passwordValidator = function(inputPassword) {
  if (arguments[0] !== undefined) {
     console.log("Welcome to the password validator tool!");
  }

  if (inputPassword.length >= 10) {
    console.log('Password Succesfull!');
  } else {
    console.log('Password Failed!');
  }
};
*/


