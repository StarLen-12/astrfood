$(document).ready(function () {
  function animateOnScroll() {
    $('.scroll-reveal').each(function () {
      const elementTop = $(this).offset().top;
      const elementBottom = elementTop + $(this).outerHeight();
      const viewportTop = $(window).scrollTop();
      const viewportBottom = viewportTop + $(window).height();

      if (elementBottom > viewportTop + 100 && elementTop < viewportBottom - 100) {
        if (!$(this).hasClass('animate__animated')) {
          $(this).addClass('animate_animated animate_fadeInUp');
        }
      }
    });
  }

  animateOnScroll();

  $(window).on('scroll resize', function () {
    animateOnScroll();
  });
});