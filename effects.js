$(document).ready(function() {
  $(".checkBox").click(function () {
    $(this).toggleClass("lineThrough");
    $(this).toggleClass("checkedBox");
  });
});
