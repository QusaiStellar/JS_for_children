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
      this.x = 100;
      this.y = 100;
      this.xSpeed = -2;
      this.ySpeed = 3;
   }
   draw() {
      circle(this.x, this.y, 3, true);
   }
   move() {
      this.x += this.xSpeed;
      this.y += this.ySpeed;
   }
   checkCollision() {
      if (this.x < 0 || this.x > 200) {
         this.xSpeed = -this.xSpeed;
      }
      if (this.y < 0 || this.y > 200) {
         this.ySpeed = -this.ySpeed;
      }
   }
};
const firstBall = new Ball();
setInterval(function () {
   ctx.clearRect(0, 0, 200, 200);
   ctx.strokeRect(0, 0, 200, 200);
}, 30);