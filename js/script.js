$(".burger-btn").on("click", function () {
  $(".burger-btn").toggleClass("close");
  $(".nav-wrapper").toggleClass("close");
  $("body").toggleClass("noscroll");
});

if ($(window).width() < 768) {
  $(".nav-item>a").on("click", function () {
    $(".nav-wrapper").removeClass("close");
    $(".nav-wrapper").fadeOut(500);
    $(".burger-btn").removeClass("close");
    $("body").removeClass("noscroll");
  });
}
