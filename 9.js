var nameCalling = ["дурачок", "лох", "пидр", "нелюдь", "говнецо", "придурок"];
var bodyPart = ["голова", "рука", "нос", "нога", "член"];
var adjective = ["дерацкое", "неуклюжее", "некрасивое", "некачественное", "стремное"];
var animalBodyPart = ["клюв", "лапа", "хвост", "пузо", "ухо"];
var animal = ["Гадюка Орлова", "Донской белопёрый пескарь", "Зебровая древесница", "Карликовый ленивец", "Краснокрыл Ренивона", "Реликтовая гадюка"];
var finishNameCalling = ["У тебя",
   bodyPart[Math.floor(Math.random() * bodyPart.length)],
   "ещё более",
   adjective[Math.floor(Math.random() * adjective.length)] +
   ", чем",
   animalBodyPart[Math.floor(Math.random() * animalBodyPart.length)],
   "у",
   animal[Math.floor(Math.random() * animal.length)] +
   ".",
].join(" ");
console.log(finishNameCalling);


var numberMass = [3, 2, 1];
var stringNumberMass = numberMass.join(" больше, чем ");
console.log(stringNumberMass);
