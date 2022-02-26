
var krinj = function () {
   var randomNameCalling = function (randomNC) {
      return randomNC[Math.floor(Math.random() * randomNC.length)];
   }
   var bodyPart = ["голова", "рука", "нос", "нога", "член"];
   var adjective = ["дерацкое", "неуклюжее", "некрасивое", "некачественное", "стремное"];
   var animalBodyPart = ["клюв", "лапа", "хвост", "пузо", "ухо"];
   var animal = ["Гадюка Орлова", "Донской белопёрый пескарь", "Зебровая древесница", "Карликовый ленивец", "Краснокрыл Ренивона", "Реликтовая гадюка"];
   var finishNameCalling = ["У тебя",
      randomNameCalling(bodyPart),
      "ещё более",
      randomNameCalling(adjective) +
      ", чем",
      randomNameCalling(animalBodyPart),
      "у",
      randomNameCalling(animal) +
      ".",
   ].join(" ");
   return finishNameCalling;
}
console.log(krinj());
