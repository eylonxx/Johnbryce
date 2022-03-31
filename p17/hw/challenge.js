$(function () {
  $('ul').css('display', 'none');
});

$('h3').each(function () {
  console.log(this);
  $(this).hover(
    function () {
      $(this).next().css('display', 'block');
    },
    function () {
      $(this).next().css('display', 'none');
    }
  );
});
