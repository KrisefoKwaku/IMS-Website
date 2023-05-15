$(document).ready(function () {
  //====================Side Nav========================//
  $("#mobile-menu").click(function () {
    console.log("clicked");
    let sideModal = document.getElementById("sidenav");
    if (sideModal.classList.contains("no-show")) {
      $("#sidenav").removeClass("no-show");
    } else {
      $("#sidenav").addClass(" no-show");
    }
  });

  $("#closebtn").click(function () {
    let sideModal = document.getElementById("sidenav");
    console.log(`clicked ${sideModal.classList}`);
    if (!sideModal.classList.contains("no-show")) {
      $("#sidenav").addClass(" no-show");
    }
  });

  $(".blur").click(function () {
    let sideModal = document.getElementById("sidenav");
    console.log(`clicked ${sideModal.classList}`);
    if (!sideModal.classList.contains("no-show")) {
      $("#sidenav").addClass(" no-show");
    }
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});

//======Scroll behavior==========//

$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("sticky");
  } else {
    $("nav").removeClass("sticky");
  }
});

// When the user scrolls the page, execute scrollBar
window.onscroll = function () {
  scrollBar();
};

function scrollBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
