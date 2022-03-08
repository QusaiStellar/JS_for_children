var canvasHuman = document.getElementById('human');
var ctxHuman = canvasHuman.getContext('2d');
function drawHuman(x, y) {
   ctxHuman.fillStyle = "Black";
   ctxHuman.strokeStyle = "Black";
   ctxHuman.lineWidth = 5;
   ctxHuman.strokeRect(50 + x, 0 + y, 20, 20);
   ctxHuman.beginPath();
   ctxHuman.moveTo(60 + x, 20 + y);
   ctxHuman.lineTo(60 + x, 80 + y); //тело
   ctxHuman.moveTo(60 + x, 40 + y);
   ctxHuman.lineTo(40 + x, 30 + y); //левая рука
   ctxHuman.moveTo(60 + x, 40 + y);
   ctxHuman.lineTo(80 + x, 30 + y); //права рука
   ctxHuman.moveTo(60 + x, 80 + y);
   ctxHuman.lineTo(30 + x, 120 + y); //левая нога
   ctxHuman.moveTo(60 + x, 80 + y);
   ctxHuman.lineTo(90 + x, 120 + y); //правая нога
   ctxHuman.stroke();
}
drawHuman(100, 100);

var canvasWord = document.getElementById('word');
var ctxWord = canvasWord.getContext('2d');
function drawWord(x, y) {
   ctxHuman.fillStyle = "Black";
   ctxHuman.strokeStyle = "Black";
   ctxHuman.lineWidth = 5;
   ctxHuman.strokeRect(50 + x, 0 + y, 20, 20);
   ctxHuman.beginPath();
   ctxHuman.moveTo(60 + x, 20 + y);
   ctxHuman.lineTo(60 + x, 80 + y); //тело
   ctxHuman.moveTo(60 + x, 40 + y);
   ctxHuman.lineTo(40 + x, 30 + y); //левая рука
   ctxHuman.moveTo(60 + x, 40 + y);
   ctxHuman.lineTo(80 + x, 30 + y); //права рука
   ctxHuman.moveTo(60 + x, 80 + y);
   ctxHuman.lineTo(30 + x, 120 + y); //левая нога
   ctxHuman.moveTo(60 + x, 80 + y);
   ctxHuman.lineTo(90 + x, 120 + y); //правая нога
   ctxHumanctx.stroke();
}



var words = ["богдан", "этосамое", "какего",];
var randomWord = words[Math.floor(Math.random() * words.length)];
var finalWord = [];
for (i = 0; i < randomWord.length; i++) {
   finalWord[i] = "_";
}
var remainingLetters = randomWord.length;
var attempts = randomWord.length;
guessTheLetter: while (remainingLetters > 0) {
   //alert(`${finalWord.join(" ")} Осталось букв: ${remainingLetters}. Осталось попыток ${attempts}`);
   //var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
   if (guess === null) {
      break;
   } else if (guess === "") {
      //alert(`Пожалуйста, введите хоть что-то!`);
   } else if (guess.length > 1) {
      if (guess.toLowerCase() === randomWord.toLowerCase()) {
         //alert(`Вы ввели слово: ${guess.toLowerCase()} и это правильный ответ. Поздравяем!`);
         break;
      } else {
         attempts--;
         //alert(`Вы ввели слово: ${guess} но оно неверно!! Осталось попыток: ${attempts}. Осталось букв: ${remainingLetters}`);
      }
   } else if (guess.length == 1) {
      for (j = 0; j < randomWord.length; j++) {
         if (randomWord[j].toLowerCase() === guess.toLowerCase()) {
            if (finalWord[j] === "_") {
               finalWord[j] = guess;
               remainingLetters--;
            } else {
               //alert(`Вы уже угадали букву: ${guess}`);
               continue guessTheLetter;
            }
         }
      }
      attempts--;
   }
   if (attempts == false) {
      //alert(`Увы, но вы исчерпали все свои попытки.`);
      break;
   }
   console.log(guess);
}
/*========================================================*/
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.lineWidth = 5;
ctx.strokeRect(0, 0, 50, 50);
/*========================================================*/
//alert(`Окончательный результат: ${finalWord.toLowerCase().join(" ")}. Осталось букв: ${remainingLetters}`);
//alert(`Отлично! Было загадано слово ${randomWord}`);
console.log(finalWord);
