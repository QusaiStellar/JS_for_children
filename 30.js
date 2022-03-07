var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var position = 0;

setInterval(function () {
   ctx.clearRect(0, 0, 200, 200);
   ctx.fillRect(position, position, 20, 20);

   position++;
   if (position > 200) {
      position = 0;
   }
}, 30);