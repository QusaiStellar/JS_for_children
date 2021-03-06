function getRandomColor() {
   var letters = '0123456789ABCDEF';
   var color = '#';
   for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
};
function circle(x, y, radius, fillCircle) {
   ctx.beginPath();
   ctx.arc(x, y, radius, 0, Math.PI * 2, false);
   if (fillCircle) {
      ctx.fill();
   } else {
      ctx.stroke();
   }
};
function random(num) {
   return Math.floor(Math.random() * num);
};
class Ball {
   constructor() {
      this.x = random(canvasWidth);
      this.y = random(canvasHeight);
      this.xSpeed = random(-10);
      this.ySpeed = random(10);
   }
   draw() {
      circle(this.x, this.y, radiusBall, true);
      ctx.fillStyle = getRandomColor();
   }
   move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
   }
   checkCollision() {
      if (this.x < radiusBall || this.x > (canvasWidth - radiusBall)) {
         this.xSpeed = -this.xSpeed;
      }
      if (this.y < radiusBall || this.y > (canvasHeight - radiusBall)) {
         this.ySpeed = -this.ySpeed;
      }
   }

};
function startBall(ball) {
   ball.draw();
   ball.move();
   ball.checkCollision();
};

var radiusBall = 5;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var needMoreBalls = [];

for (i = 0; i < 10; i++) {
   needMoreBalls[i] = new Ball();
};
function drawScore() {
   ctx.font = "20px Courier"
   ctx.textBaseLine = 'bottom';
   ctx.fillStyle = "Black";
   ctx.textAlign = "left";
   ctx.fillText("Счет: ", 10, 10);
}

setInterval(function () {
   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
   drawScore();
   for (i = 0; i < needMoreBalls.length; i++) {
      startBall(needMoreBalls[i]);
   }
   ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
}, 20);