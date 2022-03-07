var Car = function (x, y) {
   this.x = x;
   this.y = y;
   this.draw();
};
Car.prototype.draw = function () {
   var carHtml = '<img src="../img/car.png">';
   this.carElement = $(carHtml);
   this.carElement.css({
      position: "absolute",
      left: this.x,
      top: this.y,
   });
   $(".track").append(this.carElement);
};
Car.prototype.moveRight = function (speed) {
   this.x += Math.floor(Math.random() * speed);
   this.carElement.css({
      left: this.x,
      top: this.y,
   });
};
Car.prototype.moveLeft = function (speed) {
   this.x -= Math.floor(Math.random() * speed);
   this.carElement.css({
      left: this.x,
      top: this.y,
   });
};
Car.prototype.moveTop = function (speed) {
   this.y -= Math.floor(Math.random() * speed);
   this.carElement.css({
      left: this.x,
      top: this.y,
   });
};
Car.prototype.moveBottom = function (speed) {
   this.y += Math.floor(Math.random() * speed);
   this.carElement.css({
      left: this.x,
      top: this.y,
   });
};
/*==========================================*/
var Point = function (x, y) {
   this.x = x;
   this.y = y;
   this.draw();
};
Point.prototype.draw = function () {
   var pointHtml = '<img src="../img/point.png">';
   this.pointElement = $(pointHtml);
   this.pointElement.css({
      position: "absolute",
      left: this.x,
      top: this.y,
   });
   $(".track").append(this.pointElement);
};

var trackHeight = $(".container").height();
var trackWidth = $(".container").width();
var finish = new Point(trackWidth - 50, 0);
var start = new Point(20, 0);
var moveHeading = function () {
   if ((tesla.x + tesla.carElement.width()) < finish.x && (nissan.x + nissan.carElement.width()) < finish.x) {
      tesla.moveRight(20);
      nissan.moveRight(20);
   } else if ((tesla.x + tesla.carElement.width()) > finish.x) {
      clearInterval(animation);
      alert('Победа Теслы!');
   } else if ((nissan.x + nissan.carElement.width()) > finish.x) {
      clearInterval(animation);
      alert('Победа Нисана!');
   }
};
var animation = setInterval(moveHeading, 50);

var tesla = new Car(20, 120);
var nissan = new Car(20, 300);
