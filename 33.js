var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvasWidth = canvas.width;
var canvasHeight = canvas.height;
var radiusBall = 10;
var keyActions = {
   13: "enter",
   16: "shift",
   18: "alt",
   32: "stop",
   37: "left",
   38: "up",
   39: "right",
   40: "down",
};
var speeds = {
   97: 1,
   49: 1,
   98: 2,
   50: 2,
   99: 3,
   51: 3,
   100: 4,
   52: 4,
   101: 5,
   53: 5,
   102: 6,
   54: 6,
   103: 7,
   55: 7,
   104: 8,
   56: 8,
   105: 9,
   57: 9,

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
class Ball {
   constructor() {
      this.x = canvasWidth / 2;
      this.y = canvasHeight / 2;
      this.xSpeed = 1;
      this.ySpeed = 0;
      this.speed = 2;

   }
   draw() {
      circle(this.x, this.y, radiusBall, true);
   }
   move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
      /*
      if (this.x < 0) {
         this.x = canvasWidth;
      } else if (this.x > canvasWidth) {
         this.x = 0;
      }
      if (this.y < 0) {
         this.y = canvasHeight;
      } else if (this.y > canvasHeight) {
         this.y = 0;
      } */
   }
   checkCollision() {
      if (this.x < radiusBall || this.x > (canvasWidth - radiusBall)) {
         this.xSpeed = -this.xSpeed;
      }
      if (this.y < radiusBall || this.y > (canvasHeight - radiusBall)) {
         this.ySpeed = -this.ySpeed;
      }
   }
   setDirection(direction) {
      if (direction === "up") {
         this.xSpeed = 0;
         this.ySpeed = -this.speed;
      } else if (direction === "down") {
         this.xSpeed = 0;
         this.ySpeed = this.speed;
      } else if (direction === "left") {
         this.xSpeed = -this.speed;
         this.ySpeed = 0;
      } else if (direction === "right") {
         this.xSpeed = this.speed;
         this.ySpeed = 0;
      } else if (direction === "stop") {
         this.xSpeed = 0;
         this.ySpeed = 0;
      }
   }

};
9
var ball = new Ball();

$("body").keydown(function (event) {
   var direction = keyActions[event.keyCode];
   var speed = speeds[event.keyCode];
   ball.setDirection(direction);
   if (speed !== undefined) {
      ball.speed = speed;
   }
});

setInterval(function () {
   ctx.clearRect(0, 0, canvasWidth, canvasHeight);

   ball.draw();
   ball.move();
   ball.checkCollision()

   ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
}, 20);
