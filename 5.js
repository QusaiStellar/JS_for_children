let myString = "эЙ, кАК деЛа?";
let sliceString = myString.slice(1);
let finishString = myString[0].toUpperCase() + sliceString.toLowerCase();
console.log(finishString);