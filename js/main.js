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

const cookieBox = document.querySelector(".wrapper"),
  acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = () => {
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
  if (document.cookie) {
    //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  } else {
    //if cookie not set then alert an error
    alert(
      "Cookie can't be set! Please unblock this site from the cookie setting of your browser."
    );
  }
};
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1
  ? cookieBox.classList.add("hide")
  : cookieBox.classList.remove("hide");
