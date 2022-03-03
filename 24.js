var leftOffset = 0;
var moveHeading = function () {
   $(".heading").offset({ left: leftOffset });
   leftOffset++;
   if (leftOffset > 200) {
      leftOffset = 0;
   }
};

setInterval(moveHeading, 10);