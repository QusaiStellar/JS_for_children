var canvasHuman = document.getElementById('human');
var ctxHuman = canvasHuman.getContext('2d');
var canvasWord = document.getElementById('word');
var ctxWord = canvasWord.getContext('2d');
var words = ["богдан", "этосамое", "какего",];
var randomWord = words[Math.floor(Math.random() * words.length)];
var finalWord = [];
for (i = 0; i < randomWord.length; i++) {
   finalWord[i] = "_";
};
var remainingLetters = randomWord.length;
var attempts = randomWord.length;
var mistakes = 0;
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

};
function drawWord(x, y) {
   ctxWord.font = "30px Courier";
   ctxWord.fillStyle = "#E6E0DF";
   ctxWord.textAlign = "left";
   ctxWord.textBaseLine = "left";
   ctxWord.fillText(finalWord.join(" "), x, y);
};
function getLetter() {
   let letter = document.getElementById('inp_1').value;
   document.getElementById("inp_1").value = "";
   return letter;
};
$(".remaining-letters").text(remainingLetters);
$(".mistakes").text(mistakes);
drawHuman(100, 100);
drawWord(20, 200);
$("body").keydown(function (event) {
   if (event.keyCode == 13) {
      $(".btn-send").click();
   }
});
function playGame() {
   let letter = getLetter();
   console.log(letter);
   console.log(typeof letter);
   letterRotation: if (mistakes < 6) {
      if (letter === null) {
         return;
      } else if (letter === "") {
         $(".notification").text(`Пожалуйста, введите хоть что-то!`);
      } else if (letter.length > 1) {
         if (letter.toLowerCase() === randomWord.toLowerCase()) {
            for (j = 0; j < randomWord.length; j++) {
               finalWord[j] = randomWord[j];
               drawWord(20, 200);
            }
            $(".notification").text(`Вы ввели слово: ${letter}, и это правильный ответ. Поздравяем!`);
         } else {
            mistakes++;
            $(".notification").text(`Вы ввели слово: ${letter}, но оно неверно!`);
         }
      } else if (letter.length == 1) {
         for (j = 0; j < randomWord.length; j++) {
            if (randomWord[j].toLowerCase() === letter.toLowerCase()) {
               if (finalWord[j] === "_") {
                  finalWord[j] = letter;
                  drawWord(20, 200);
                  remainingLetters--;
                  break letterRotation;
               } else {
                  $(".notification").text(`Вы уже угадали букву: ${letter}`);
                  break letterRotation;
               }
            }
         }
         mistakes++;
      }
      if (mistakes == 6) {
         $(".notification").text(`Вы совершили слишком много ошибок, сожалею :(`);
      }
   }

   $(".remaining-letters").text(remainingLetters);
   $(".mistakes").text(mistakes);
}


