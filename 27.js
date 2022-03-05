function getRandomNumber(size) {
   return Math.floor(Math.random() * size);
};
var getDistance = function (event, target) {
   var diffX = event.offsetX - target.x;
   var diffY = event.offsetY - target.y;
   return Math.sqrt((diffX * diffX) + (diffY * diffY));

}
function getDistanceHint(distance) {
   if (distance < 10) {
      $('.tresure-map').css('background', 'radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 50%, rgba(254,221,0,0) 70%)');
      return "Обожжешься!";
   } else if (distance < 20) {
      $('.tresure-map').css('background', 'radial-gradient(circle, rgba(111,0,0,1) 0%, rgba(156,15,15,1) 50%, rgba(254,221,0,0) 70%)');
      return "Очень горячо";
   } else if (distance < 40) {
      $('.tresure-map').css('background', 'radial-gradient(circle, rgba(111,0,0,1) 0%, rgba(156,76,15,1) 50%, rgba(254,221,0,0) 70%)');
      return "Горячо";
   } else if (distance < 80) {
      $('.tresure-map').css('background', 'radial-gradient(circle, rgba(111,0,0,1) 0%, rgba(156,128,15,1) 50%, rgba(240,254,0,0) 70%)');
      return "Тепло";
   } else if (distance < 160) {
      $('.tresure-map').css('background', 'radial-gradient(circle, rgba(0,18,111,1) 0%, rgba(15,74,156,1) 30%, rgba(0,5,254,0) 70%)');
      return "Холодно";
   } else if (distance < 320) {
      $('.tresure-map').css('background', 'radial-gradient(circle, rgba(0,18,111,1) 0%, rgba(15,74,156,1) 50%, rgba(10,131,176,0) 70%)');
      return "Очень холодно";
   } else {
      return "Замерзнешь!";

   }
};
var width = 400;
var height = 400;
var clicks = 0;
var target = {
   x: getRandomNumber(width),
   y: getRandomNumber(height),
};
console.log(target);

$(".tresure-map").click(function (event) {
   clicks++;
   var distance = getDistance(event, target);
   var distanceHint = getDistanceHint(distance);
   $(".distance").text(distanceHint);
   if (distance < 8) {
      alert(`Клад найден! Сделано кликов ${clicks}`)
   }
});

