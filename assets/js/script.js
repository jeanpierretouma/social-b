$(document).ready(function() {

  /* ----------| SMOOTH SCROLL |---------- */
  $("a[href*='#']").on("click", function (e) {
    e.preventDefault();

		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top
		}, 800, "linear");
  });



  /* ----------| HEADER SECTION |---------- */
  /* +++++| Nav Bar Container |+++++ */
  /* === Nav === */
  /* Sticky Nav */
  $(".header-section").waypoint(function(direction) {
    if (direction === "down") {
      $(".nav-bar-container").addClass("sticky-nav");
    } else {
      $(".nav-bar-container").removeClass("sticky-nav");
    }}, {offset: "-1px;"}
  );

  /* Mobile Nav */
  const navBar = document.querySelector(".nav-bar-container");
  const navBtn = document.querySelector(".mobile-nav-icon");
  var menuBtn = document.querySelector(".uil-bars")
  const navList = document.querySelector(".main-nav");

  navBtn.addEventListener("click", function() {
    if (menuBtn.classList.contains("uil-bars")) {
      menuBtn.classList.add("uil-times");
      menuBtn.classList.remove("uil-bars");
    } else if (menuBtn.classList.contains("uil-times")) {
      menuBtn.classList.add("uil-bars");
      menuBtn.classList.remove("uil-times");
    }

    navBar.classList.toggle("nav-bar-container-mobile");
    navList.classList.toggle("main-nav-mobile");
  });



  /* ----------| ABOUT US SECTION | VALUES |---------- */
  /* +++++| Social Lists Cards Container |+++++ */
  /* === Glider Container === */
  new Glider(document.querySelector(".glider"), {

    /* Smartphones */
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: true,
    scrollLockDelay: 100,
    draggable: true,
    dots: "#dots",
    arrows: {
      prev: ".glider-prev",
      next: ".glider-next"
    }, responsive: [{

      /* Tablets */
      breakpoint: 700,
      settings: {slidesToShow: 2}
    },{

      /* Desktops */
      breakpoint: 1161,
      settings: {slidesToShow: 3}
    }]
  });

});