var words = ["Слава Украине!", "Жыве беларусь", "Птн пнх",];
var randomWord = words[Math.floor(Math.random() * words.length)];
var finalWord = [];
for (i = 0; i < randomWord.length; i++) {
   finalWord[i] = "_";
}
var remainingLetters = randomWord.length;
while (remainingLetters > 0) {
   alert(`${finalWord.join(" ")} Осталось букв: ${remainingLetters}`);
   var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
   if (guess === null) {
   } else if (guess.length !== 1) {
      if (guess.toLowerCase() === randomWord.toLowerCase()) {
         alert(`Вы ввели слово: ${guess.toLowerCase()} и это правильный ответ. Поздравяем!`);
         break;
      } else {
         remainingLetters--;
         alert(`Вы ввели слово: ${guess} но оно неверно!! Осталось букв: ${remainingLetters}`);
      }
   } else if (guess.length == 1) {
      for (j = 0; j < randomWord.length; j++) {
         if (randomWord[j].toLowerCase() === guess.toLowerCase()) {
            finalWord[j] = guess;
            remainingLetters--;
         }
      }
   } else {
      remainingLetters--;
   }
}

alert(`Окончательный результат: ${finalWord.toLowerCase().join(" ")} Осталось букв: ${remainingLetters}`);
alert(`Отлично! Было загадано слово ${randomWord}`);

console.log(finalWord);
