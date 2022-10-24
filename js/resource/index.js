$(document).ready(function() {
  $(".header-navbar__desktop-container--text").click(function() {
    if ($(window).width() <= 500) {
      if ($("#toggle").is(":checked")) {
        $("#toggle").prop("checked", false);
      }
    }
  });

  $(".navbar__desktop-container--text").click(function() {
    if ($(window).width() <= 500) {
      if ($("#toggle").is(":checked")) {
        $("#toggle").prop("checked", false);
      }
    }
  });

  $(".about-us").waypoint(
    // function(direction) {
    //   if (direction === "down")
    //     $(".section-about-me__description").addClass("u__animation--fadeIn");
    // },
    // {
    //   offset: "40%"
    // }
    function(direction) {
      if ($(window).width() > 500) {
        if (direction === "down") $(".navbar").css("display", "flex");
        else $(".navbar").css("display", "none");
      }
    },
    {
      offset: "20%"
    }
  );
});
