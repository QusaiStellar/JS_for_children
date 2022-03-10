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
}
class Ball {
   constructor() {
      this.x = random(canvasWidth / 2);
      this.y = random(canvasHeight / 2);
      this.xSpeed = random(-5);
      this.ySpeed = random(5);
   }
   draw() {
      circle(this.x, this.y, 5, true);
   }
   move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
   }
   checkCollision() {
      if (this.x < 0 || this.x > canvasWidth) {
         this.xSpeed = -this.xSpeed;
      }
      if (this.y < 0 || this.y > canvasHeight) {
         this.ySpeed = -this.ySpeed;
      }
   }
};
function startBall(ball) {
   ball.draw();
   ball.move();
   ball.checkCollision();
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var needMoreBalls = [];

const firstBall = new Ball();
const secondBall = new Ball();
const thirdBall = new Ball();
const fourthBall = new Ball();
const fifthBall = new Ball();
const sixthBall = new Ball();

for (i = 0; i < 6; i++) {
   needMoreBalls[i] = new Ball();
}
console.log(needMoreBalls);

setInterval(function () {
   ctx.clearRect(0, 0, canvasWidth, canvasHeight);
   for (i = 0; i < needMoreBalls.length; i++) {
      needMoreBalls[2].draw().move();
   }


   ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
}, 20);