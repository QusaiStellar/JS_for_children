var words = ["богдан", "этосамое", "какего",];
var randomWord = words[Math.floor(Math.random() * words.length)];
var finalWord = [];
for (i = 0; i < randomWord.length; i++) {
   finalWord[i] = "_";
}
var remainingLetters = randomWord.length;
var attempts = randomWord.length;
guessTheLetter: while (remainingLetters > 0) {
   alert(`${finalWord.join(" ")} Осталось букв: ${remainingLetters}. Осталось попыток ${attempts}`);
   var guess = prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
   if (guess === null) {
      break;
   } else if (guess === "") {
      alert(`Пожалуйста, введите хоть что-то!`);
   } else if (guess.length > 1) {
      if (guess.toLowerCase() === randomWord.toLowerCase()) {
         alert(`Вы ввели слово: ${guess.toLowerCase()} и это правильный ответ. Поздравяем!`);
         break;
      } else {
         attempts--;
         alert(`Вы ввели слово: ${guess} но оно неверно!! Осталось попыток: ${attempts}. Осталось букв: ${remainingLetters}`);
      }
   } else if (guess.length == 1) {
      for (j = 0; j < randomWord.length; j++) {
         if (randomWord[j].toLowerCase() === guess.toLowerCase()) {
            if (finalWord[j] === "_") {
               finalWord[j] = guess;
               remainingLetters--;
            } else {
               alert(`Вы уже угадали букву: ${guess}`);
               continue guessTheLetter;
            }
         }
      }
      attempts--;
   }
   if (attempts == false) {
      alert(`Увы, но вы исчерпали все свои попытки.`);
      break;
   }
   console.log(guess);
}

alert(`Окончательный результат: ${finalWord.toLowerCase().join(" ")}. Осталось букв: ${remainingLetters}`);
alert(`Отлично! Было загадано слово ${randomWord}`);

console.log(finalWord);
