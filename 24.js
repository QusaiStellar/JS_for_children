var leftOffset = 0;
var topOffset = 0;
var speedAnimationHead = 10;
var popal = 0;
var headingText = $(".heading").text();
function stopAnimation(animationName) {
   clearInterval(animationName);
}
var moveHeading = function () {
   $(".heading").offset({ left: leftOffset, top: topOffset });
   if (leftOffset < 200 && topOffset === 0) {
      leftOffset++;
   } else if (leftOffset === 200 && topOffset < 200) {
      topOffset++;
   } else if (topOffset === 200 && leftOffset <= 200 && 0 < leftOffset) {
      leftOffset--;
   } else if (leftOffset === 0 && topOffset <= 200) {
      topOffset--;
   }
};
var animation = setInterval(moveHeading, speedAnimationHead);
$(".heading").click(function () {
   if (popal < 2) {
      stopAnimation(animation);
      speedAnimationHead /= 2;
      popal++;
      animation = setInterval(moveHeading, speedAnimationHead);
      $(".heading").text(headingText + " " + popal);
   } else {
      stopAnimation(animation);
      $(".heading").text("You win!");
   }
});

