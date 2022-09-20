$(
  $(document).ready(function () {
    //====================Side Nav========================//
    $("#mobile-menu").click(function () {
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

    //===================Scroll Nav bar============//
    $().waypoint(function (direction) {
      if (direction == "down") {
        console.log("ticking");
        $("nav").addClass("sticky");
      }
    });

    // $("#Motor").waypoint(
    //   function (direction) {
    //     if (direction == "down") {
    //       $("nav").addClass("sticky");
    //     } else {
    //       $("nav").removeClass("sticky");
    //       // $("nav").removeClass("white-sticky");
    //     }
    //     console.log("rolling stone");
    //   },
    //   { offset: "150px;" }
    // );

    $("#Motor").waypoint(function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
        $(".white-link").addClass("no-show");
        $(".blue-link").removeClass("no-show");
      } else {
        $("nav").removeClass("sticky");
        $(".white-link").removeClass("no-show");
        $(".blue-link").addClass("no-show");
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
    //End of smooth scrolling

    // $('.js-wp-1').waypoint(function(direction){
    //     $('.js-wp-1').addClass('animated fadeIn');
    // },{
    //     offset:'50%'
    // })

    // $('.js-wp-0').waypoint(function(direction){
    //     $('.js-wp-0').addClass('animate__slideInUp');
    // },{
    //     offset:'50%'
    // })

    // $('.js-wp-6').waypoint(function(direction){
    //     $('.js-wp-6').addClass('animated fadeIn');
    // },{
    //     offset:'50%'
    // })
  })
);

// $(function () {
//     $("#myDiv").floatingWhatsApp({
//         phone: "+233247265853",
//         showPopup: "True",
//         popupMessage: "Hi, How may we help?",
//         headerTitle: "WhatsApp Chat",
//         position: "right",
//     });
// });

/*Scroll on buttons */
// $('.sc-about').click(()=>{
//     $('html, body').animate({scrollTop:$('.js-section-about').offset().top },1000 );
// });

// $('.sc-services').click(()=>{
//     $('html, body').animate({scrollTop:$('.js-section-services').offset().top },1000 );
// });

//   <div class="quick-contact">

//     <div>
//         <a href="tel:+233243837432">
//             <i class="fa-solid fa-phone"></i>
//             <!-- +233 (0)24 383 7432
//         </a>
//     </div>
//     <div>
//         <a href="mailto:info@ims-ghana.com">
//             <i class="fa-solid fa-at"></i>
//             <!-- info@ims-ghana.com
//         </a>
//     </div>
//   </div>

{
  /* <details>
<summary>Epcot Center</summary>
<p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>
</details> 

    <a id="wapp">
        <img src="./resources/images/whatsapp.webp" alt="whatsapp">
    </a>


*/
}
