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
      $('.map').css('background', 'radial-gradient(circle, rgba(255,0,0,1) 0%, rgba(255,0,0,1) 40%, rgba(254,221,0,0) 55%)');
      return "Обожжешься!";
   } else if (distance < 20) {
      $('.map').css('background', 'radial-gradient(circle, rgba(111,0,0,1) 0%, rgba(156,15,15,1) 40%, rgba(254,221,0,0) 55%)');
      return "Очень горячо";
   } else if (distance < 40) {
      $('.map').css('background', 'radial-gradient(circle, rgba(111,0,0,1) 0%, rgba(156,76,15,1) 40%, rgba(254,221,0,0) 55%)');
      return "Горячо";
   } else if (distance < 80) {
      $('.map').css('background', 'radial-gradient(circle, rgba(111,0,0,1) 0%, rgba(156,128,15,1) 40%, rgba(240,254,0,0) 55%)');
      return "Тепло";
   } else if (distance < 160) {
      $('.map').css('background', 'radial-gradient(circle, rgba(0,18,111,1) 0%, rgba(15,74,156,1) 40%, rgba(0,5,254,0) 55%)');
      return "Холодно";
   } else if (distance < 320) {
      $('.map').css('background', 'radial-gradient(circle, rgba(0,18,111,1) 0%, rgba(15,74,156,1) 40%, rgba(10,131,176,0) 55%)');
      return "Очень холодно";
   } else {
      return "Замерзнешь!";

   }
};
var width = 800;
var height = 500;
var clicks = 0;
var remainedClicks = 5;
var clicksText = $(".clicks").text();
$(".clicks").text(clicksText + " " + remainedClicks);
var target;
function updateTarget() {
   target = {
      x: getRandomNumber(width),
      y: getRandomNumber(height),
   };
}
updateTarget();
console.log(target);
$(".tresure-map").click(function (event) {
   clicks++;
   remainedClicks--;
   $(".clicks").text(clicksText + " " + remainedClicks);
   var distance = getDistance(event, target);
   var distanceHint = getDistanceHint(distance);
   $(".distance").text(distanceHint);
   if (distance < 8) {
      updateTarget();
      console.log(target);
      alert(`Клад найден! Сделано кликов ${clicks}`);

   }
   if (remainedClicks == 0) {
      updateTarget();
      console.log(target);
      remainedClicks = 5;
      alert("Ну всё, проиграл");
   }
});


