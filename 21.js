function pickWord() {
   var words = ["Слава Украине!", "Жыве беларусь", "Птн пнх",];
   return words[Math.floor(Math.random() * words.length)];
}
function setupFinalWord(randomWord) {
   for (i = 0; i < randomWord.length; i++) {
      finalWord[i] = "_";
   }
   return;
}
function showFunctionProgress(finalWord) {
   alert(`Загаданное слово: ${finalWord.join(" ")}. 
   \nОсталось отгадать ${remainingLetters} букв. 
   \nОсталось ${attempts} попыток .`);
}
function getGuess() {
   return prompt("Угадайте букву или нажмите \"Отмена\" для выхода из игры.");
}
function updateGameState(guess, randomWord, finalWord) {
   for (j = 0; j < randomWord.length; j++) {
      if (randomWord[j].toLowerCase() === guess.toLowerCase()) {
         if (finalWord[j] === "_") {
            finalWord[j] = guess;
            remainingLetters--;
         } else {
            alert(`Вы уже угадали букву: ${guess}`);
            return;
         }
      }
   }
   attempts--;
}
function showFinalResult() {
   alert(`Ваш окончательный результат: ${finalWord.join(" ")}.\nОсталось отгадать ${remainingLetters} букв.\nБыло загадано слово: ${randomWord}`);
}
var randomWord = pickWord();
var remainingLetters = randomWord.length;
var attempts = randomWord.length + 2;
var finalWord = [];
setupFinalWord(randomWord);
console.log(finalWord);
alert(`Добро пожаловать в игру Виселица!
\nВам будет предложено угадать абсолютно случайное слово.
\nНеобходимо, как в поле чудес, угадать слово.
\nЗа каждую неверно отгаданную букву колличество попыток будет уменьшаться.`);
while (remainingLetters > 0) {
   showFunctionProgress(finalWord);
   var guess = getGuess();
   console.log(guess);
   if (guess === null) {
      break;
   } else if (guess === "") {
      alert(`Пожалуйста, введите хоть что-то!`);
   } else if (guess.length > 1) {
      if (guess.toLowerCase() === randomWord.toLowerCase()) {
         alert(`Вы ввели слово: ${guess.toLowerCase()} и это правильный ответ.
         \nПоздравяем!`);
         break;
      } else {
         attempts--;
         alert(`Вы ввели слово: ${guess}, но оно неверно!
         \nОсталось ${attempts} попыток.
         \nОсталось отгадать ${remainingLetters} букв.`);
      }
   } else if (guess.length == 1) {
      var correctGuesses = updateGameState(guess, randomWord, finalWord);
      console.log(finalWord);
   }
   if (attempts == false) {
      alert(`Увы, но вы исчерпали все свои попытки.`);
      break;
   }
}
showFinalResult(finalWord, remainingLetters, randomWord);
