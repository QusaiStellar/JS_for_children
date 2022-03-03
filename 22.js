
$("#main-heading").text("It's my friends");

var friends = ["Настя", "Настя 2", "Настя 3", "Настя 4",]
for (i = 0; i < friends.length; i++) {
   $("body").append("<p>" + friends[i] + "</p>");
}

$("p").append(" лучший!");
for (i = 0; i < 5; i++) {
   if (i === 0) {
      $("#main-heading").fadeOut(1000).fadeIn(1000);
   } else if (i === 1) {
      $("#main-heading").fadeOut(2000).fadeIn(2000);
   } else if (i === 2) {
      $("#main-heading").fadeOut(3000).fadeIn(3000);
   } else if (i === 3) {
      $("#main-heading").fadeOut(4000).fadeIn(4000);
   } else if (i === 4) {
      $("#main-heading").fadeOut(5000).fadeIn(5000);
   }
}
$("p").fadeTo(1000, 0.5);

