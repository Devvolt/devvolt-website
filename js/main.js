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
  $(".menu-drn").click(function () {
    $(".navbar .menu").toggleClass("open");
    $(".menu-drn").toggleClass("open");
  });
  // animazione
  var typed = new Typed(".typing", {
    strings: ["SCANSAFATICHE", "NULLAFACENTI","SENZA VITA SOCIALE", "SENZA IMMAGINAZIONE","DA NON IMITARE", "DA NON COPIARE"],
    typeSpeed: 90,
    backSpeed: 100,
    startDelay: 800,
    backDelay: 900,
    smartBackspace: true,
    loop: true,
  });
  var typed2 = new Typed(".typing-2", {
    strings: ["Devvolt"],
    typeSpeed: 100,
    backSpeed: 100,
    startDelay: 800,
    backDelay: 900,
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
