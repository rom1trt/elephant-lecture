var positionElementInPage = $('#menu').offset().top;
$(window).scroll(
 function() {
 if ($(window).scrollTop() &gt;= positionElementInPage) {
 // fixed
 $('#menu').addClass("floatable");
 } else {
 // relative
 $('#menu').removeClass("floatable");
 }
 }
);