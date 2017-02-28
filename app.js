$(document).ready(function()) {
  $.get("http://www.omdbapi.com/?t=rambo", function(data) {
$(".result").append(‘<h1>’ + title + '</h1>');
});

})

console.log(data)
