function clickHandler(event) {
   console.log("Клик! " + event.pageX + " " + event.pageY);
};

$("h1").click(clickHandler);