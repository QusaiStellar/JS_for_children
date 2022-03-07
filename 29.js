var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = "Red";
ctx.strokeStyle = "Red";
ctx.lineWidth = 5;
ctx.strokeRect(200, 0, 50, 50);
ctx.fillRect(220, 50, 10, 20);
ctx.fillRect(185, 70, 80, 80);
ctx.fillRect(145, 70, 40, 10);
ctx.fillRect(265, 70, 40, 10);
ctx.fillRect(185, 150, 10, 50);
ctx.fillRect(255, 150, 10, 50);


ctx.fillStyle = "Black";
ctx.strokeStyle = "Black";
ctx.strokeRect(50, 0, 20, 20);
ctx.beginPath();
ctx.moveTo(60, 20);
ctx.lineTo(60, 80); //тело
ctx.moveTo(60, 40);
ctx.lineTo(40, 30); //левая рука
ctx.moveTo(60, 40);
ctx.lineTo(80, 30); //права рука
ctx.moveTo(60, 80);
ctx.lineTo(30, 120); //левая нога
ctx.moveTo(60, 80);
ctx.lineTo(90, 120); //правая нога
ctx.stroke();

function circle(x, y, radius, fillCircle, color) {

   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.fillStyle = color;
   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
   ctx.stroke();
   if (fillCircle == true) {
      ctx.fill();
   }
}

function drawSnowman(x, y) {
   circle(x + 60, y + 40, 40); //голова
   circle(x + 60, y + 80 + 60, 60); //тело
   circle(x + 60, y + 40 + 5, 5, 1, "orange"); //нос
   circle(x + 60 - 20, y + 40 - 10, 5, 1, "black"); //глаз левый 
   circle(x + 60 + 20, y + 40 - 10, 5, 1); //глаз правый
   circle(x + 60, y + 80 + 60, 5, 1); //пуговица
   circle(x + 60, y + 80 + 60 + 30, 5, 1); //пуговица
   circle(x + 60, y + 80 + 60 - 30, 5, 1); //пуговица
}

drawSnowman(350, 10);

/*
circle(300, 400, 60); //тело
circle(300, 310, 5, 1, "orange"); //нос
circle(280, 290, 5, 1, "black"); //глаз левый 
circle(320, 290, 5, 1); //глаз правый
circle(300, 400, 5, 1); //пуговица
circle(300, 430, 5, 1); //пуговица
circle(300, 370, 5, 1); //пуговица
*/
