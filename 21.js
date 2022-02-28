function pickWord() {
   var words = ["Слава Украине!", "Жыве беларусь", "Птн пнх",];
   return words[Math.floor(Math.random() * words.length)];
}
var randomWord = pickWord();
console.log(randomWord);

function setupFinalWord(randomWord) {
   for (i = 0; i < randomWord.length; i++) {
      setupFinalWord[i] = "_";
   }
   return;
}
function showFunctionProgress(finalWord) {
   alert(`${finalWord.join(" ")} Осталось букв: ${remainingLetters}. Осталось попыток ${attempts}`);
}
function getGuess() {
   prompt("Угадайте букву или нажмите Отмена для выхода из игры.");
}
function updateGameState(guess, randomWord, finalWord) {
   for (j = 0; j < randomWord.length; j++) {
      if (randomWord[j].toLowerCase() === guess.toLowerCase()) {
         if (finalWord[j] === "_") {
            finalWord[j] = guess;
            remainingLetters--;
         } else {
            alert(`Вы уже угадали букву: ${guess}`);
            continue;
         }
      }
   }
   attempts--;
}

console.log(randomWord);
var finalWord = setupFinalWord(randomWord);
var remainingLetters = randomWord.length;
var attempts = randomWord.length;
guessTheLetter: while (remainingLetters > 0) {
   showFunctionProgress(finalWord);
   var guess = getGuess();
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
      var correctGuesses = updateGameState(guess, word, finalWord);
   }
   if (attempts == false) {
      alert(`Увы, но вы исчерпали все свои попытки.`);
      alert(`Окончательный результат: ${finalWord.toLowerCase().join(" ")}. Осталось букв: ${remainingLetters}`);
      alert(`Отлично! Было загадано слово ${randomWord}`);
      break;
   }
   console.log(guess);
}

alert(`Окончательный результат: ${finalWord.toLowerCase().join(" ")}. Осталось букв: ${remainingLetters}`);
alert(`Отлично! Было загадано слово ${randomWord}`);

console.log(finalWord);
