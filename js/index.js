$(document).ready(function () {
  $(".nav-right-toggler").click(function () {
    let navRight = $(".nav-right");
    $(navRight).toggleClass("show");
    $('.nav-right-toggler .customMenu').toggleClass('opened')
  });
  $(".navLink").click(function () {
    for (let i = 0; i < $(".navLink").not(this).length; i++) {
      let a = $(".navLink").not(this)[i];
      let a_Drop = $(a).next();
      let ic = $(a).find(".fixLine")[0];

      $(a).removeClass("openDrop");
      $(a_Drop).css("height", `0px`);
      $(ic).removeClass("down");
    }
    $(this).toggleClass("openDrop");
    let link = $(this);
    let dropDown = $(link).next()[0];
    let icon = $(this).find(".fixLine")[0];
    $(icon).toggleClass("down");    
    let dropDownHeight = dropDown.scrollHeight;
    if ($(this).hasClass("openDrop")) {
      $(dropDown).css("height", `${dropDownHeight}px`);
    } else {
      $(dropDown).css("height", `0px`);
    }
  });
$(window).on('scroll',function(){
  let scrolled = $(window).scrollTop();
  if (scrolled >= 120) {
    $('.header').css({'top':'0','background':'white'})
    $('.header').addClass('shadow-sm')
    $('.headerIcon').css('fill','var(--primary)')
    $('a.navLink').css('color','var(--primary)')
  }
  else{
    $('.header').css({'top':'-80px','background':'unset',})
    $('.header').removeClass('shadow-sm')
    $('.headerIcon').css('fill','white')
    $('a.navLink').css('color','white')
  }
})

  // footer sidebar
  $(".footerSideBarBtn").click(function () {
    $(".Fsidebar").css({
      transform: "translateX(0)",
      opacity: "1",
    });
    setTimeout(() => {
      $(".fsideDiv").css({
        transform: "translateX(0)",
        opacity: "1",
      });
    }, 200);
  });
  $(".footerSideBarCloseBtn").click(function () {
    $(".fsideDiv").css({
      transform: "translateX(-100px)",
      opacity: "0",
    });
    setTimeout(() => {
      $(".Fsidebar").css({
        transform: "translateX(110%)",
        opacity: "0",
      });
    }, 200);
  });
  $(window).on("scroll", function () {
    let scrolled = $(window).scrollTop();
    if (scrolled == 0) {
      $(".Fsidebar").css(
        {
          display: "block",
          transform: "translateX(110%)",
          opacity: "0",
        },
        400
      );
    } else {
      $(".Fsidebar").css(
        {
          display: "block",
          transform: "translateX(110%)",
          opacity: "0",
        },
        400
      );
    }
  });

  $(".main-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 4000,
    center: true,
    slideTransition: "linear",
    animateOut: true,
    responsive: {
      0: {
        items: 1,
      },
      650: {
        items: 3,
      },
    },
  });

  $(window).on("scroll", function () {
    let scrolled = $(window).scrollTop();
    let windowheight = window.outerHeight;
    let detailImgOffset = $(".detailedImgs")[0].offsetTop;
    if (scrolled >= detailImgOffset - windowheight) {
      $(".detailedImgs").css("transform", " translateY(0px)");
    }
    else{
      $(".detailedImgs").css("transform", " translateY(50px)");

    }



    if (scrolled >= 1500) {
      $('.scrollBtn').css({
        display:"block"
      })
    }
    else{
      $('.scrollBtn').css({
        display:"none"
      })
    }



  });

$('.scrollBtn').click(function(){
  $(window).scrollTop(0)
})


  $(".progress-bar").loading();

});
