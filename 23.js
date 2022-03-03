var counter = 1;

var printMessage = function () {
   console.log("123" + counter);
   counter++;
};

setInterval(printMessage, 1000);

clearInterval(setInterval);