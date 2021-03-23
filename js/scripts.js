

$(document).ready(function () {
  $("button#cat-button").click(function () {
    $("ul#cat-convo").prepend("<li>Meow!</li>");
    $("ul#dog-convo").prepend("<li>Woof!</li>");
    $("ul#cat-convo").children("li").click(function () {
      $(this).before('<img id="kitten" src="http://placekitten.com/100/100" alt="picture of a kitten">')
      $("img#kitten").click(function () {
        $(this).fadeToggle();
      });
    })
  });
  $("button#dog-button").click(function () {
    $("ul#dog-convo").prepend("<li>Woof!</li>");
    $("ul#cat-convo").prepend("<li>Meow!</li>");
    $("ul#dog-convo").children("li").click(function () {
      $(this).before('<img id="puppy" src="https://place-puppy.com/100x100 " alt="picture of a puppy">')
      $("img#puppy").click(function () {
        $(this).fadeToggle();
      });
    })
  });

});