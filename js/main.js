$(document).ready(function () {
  $(window).scroll(function () {
    // nav
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // pulsante di scorrimento
    if (this.scrollY > 500) {
      $(".scroll-up-drn").addClass("show");
    } else {
      $(".scroll-up-drn").removeClass("show");
    }
  });
  // scorrimento
  $(".scroll-up-drn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // rimozione scorrimento
    $("html").css("scrollBehavior", "auto");
  });
  $(".navbar .menu li a").click(function () {
    // scroll
    $("html").css("scrollBehavior", "smooth");
  });
  // alterna menu/script barra di navigazione
  $(".menu-drn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-drn i").toggleClass("active");
  });
  // animazione
  var typed = new Typed(".typing", {
    strings: ["SCANSAFATICHE"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
  var typed2 = new Typed(".typing-2", {
    strings: ["Devvolt"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
  var typed3 = new Typed(".typing-3", {
    strings: ["Gugliee"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
  // owl carousel
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
