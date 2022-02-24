var alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var randomString = "";
while (randomString.length < 8) {
   randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString);
