jQuery(function ($) {

  // Function which adds the 'animated' class to any '.animatable' in view
  var doAnimations = function () {

    // Calc current offset and get all animatables
    var offset = $(window).scrollTop() + $(window).height(),
      $animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if ($animatables.length == 0) {
      $(window).off('scroll', doAnimations);
    }

    // Check all animatables and animate them if necessary
    $animatables.each(function (i) {
      var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
        $animatable.removeClass('animatable').addClass('animated');
      }
    });

  };

  // Hook doAnimations on scroll, and trigger a scroll
  $(window).on('scroll', doAnimations);
  $(window).trigger('scroll');

  $(".button").click(function () {
    $(".system.ios").toggleClass("clicked");
    $(".system.android").toggleClass("clicked");

  })

  // Form for feedback
  {
    "use strict";
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var subject = $('.validate-input input[name="subject"]');
    var message = $('.validate-input textarea[name="message"]');
    $('.validate-form').on('submit', function () {
      var check = true;

      if ($(name).val().trim() == '') {
        showValidate(name);
        check = false;
      }

      if ($(subject).val().trim() == '') {
        showValidate(subject);
        check = false;
      }


      if ($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
        showValidate(email);
        check = false;
      }

      if ($(message).val().trim() == '') {
        showValidate(message);
        check = false;
      }

      return check;
    });

    $('.validate-form .input1').each(function () {
      $(this).focus(function () {
        hideValidate(this);
      });
    });

    function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).removeClass('alert-validate');
    }

  }

  
  // href with animation

  $("#menu_anchor").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
  });

});



