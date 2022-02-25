var words = ["Слава Украине", "Жыве Беларусь", "птн пнх",];
var randomWord = words[Math.floor(Math.random() * words.length)];
var finalWord = [];
for (i = 0; i < randomWord.length; i++) {
   finalWord[i] = "_";
}
var remainingLetters = randomWord.length;
console.log(finalWord);
while (remainingLetters > 0) {
   alert(finalWord.join(" ") + " Осталось попыток: " + remainingLetters);
   var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
   if (guess === null) {
      break;
   } else if (guess.length !== 1) {
      if (guess === randomWord) {
         alert("Вы ввели слово: " + guess);
         break;
      } else {
         remainingLetters--;
         alert("Вы ввели слово: " + guess + " но данно слово неверно!! Осталось попыток: " + remainingLetters);

      }
   } else if (guess.length == 1) {


      for (j = 0; j < randomWord.length; j++) {
         if (randomWord[j] === guess) {
            finalWord[j] = guess;
         }
      }
      remainingLetters--;
   } else {
      remainingLetters--;
   }
}
alert("Окончательный результат: " + finalWord.join(" ") + " Осталось попыток: " + remainingLetters);
alert("Отлично! Было загадано слово " + randomWord);

console.log(finalWord);
