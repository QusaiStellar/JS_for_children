var leftOffset = 0;
var topOffset = 0;
var moveHeading = function () {
   $(".heading").offset({ left: leftOffset, top: topOffset });
   if (leftOffset < 200 && topOffset === 0) {
      leftOffset++;
      console.log("left " + leftOffset);

   } else if (leftOffset === 200 && topOffset < 200) {
      topOffset++;
      console.log("top " + topOffset);

   } else if (topOffset === 200 && leftOffset <= 200 && 0 < leftOffset) {
      leftOffset--;
      console.log("left " + leftOffset);
   } else if (leftOffset === 0 && topOffset <= 200) {
      topOffset--;
      console.log("top " + topOffset);
   }
};

setInterval(moveHeading, 10);