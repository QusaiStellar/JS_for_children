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
var points = [[50, 50], [50, 100], [100, 100], [100, 50], [50, 50]];
var mysteryPoints = [[50, 50], [50, 100], [100, 100], [100, 50], [70, 90], [100, 90], [50, 50]];
function drawPoints(pointsArray) {
   ctx.beginPath();
   ctx.moveTo(pointsArray[0][0], pointsArray[0][1]);
   for (i = 1; i < pointsArray.length; i++) {
      ctx.lineTo(pointsArray[i][0], pointsArray[i][1]);
   };
   ctx.stroke();
}
drawPoints(mysteryPoints);
$("#canvas").mousemove(function (event) {
   var canvasHtml = $("#canvas");
   var pos = canvasHtml.position();

   circle(event.pageX - pos.left, event.pageY - pos.top - 20, 3);

   console.log(event.pageX, event.pageY);
   console.log(pos.left, pos.top);
   console.log(pos);
});
/*
$(document).ready(function () {
   $("#canvas").mousemove(function (event) {
      var pos = $(this).offset();
      var canvasLeft = pos.left;
      var canvasTop = pos.top;
      var mouseX = event.pageX - canvasLeft;
      var mouseY = event.pageY - canvasTop;
      circle(event.pageX, event.pageY, 3);

      console.log(mouseX, mouseY);
   })
});
*/
//alert(points[1][1]);