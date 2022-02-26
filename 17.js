var nameCalling = ["дурачок", "лох", "пидр", "нелюдь", "говнецо", "придурок"];

var randomNameCalling = function (randomNC) {
   return randomNC[Math.floor(Math.random() * randomNC.length)];

}

console.log(randomNameCalling(nameCalling));




