$(document).ready(function () {
  // Smooth scroll to sections
  $('a.nav-link').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 60
      }, 800);
    }
  });

  // Navbar shrink on scroll
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      $('.navbar').addClass('shrink');
    } else {
      $('.navbar').removeClass('shrink');
    }
  });

  // Fade in sections
  $('.section').css('opacity', 0);
  $(window).on('scroll', function () {
    $('.section').each(function () {
      const top = $(this).offset().top - 300;
      if ($(window).scrollTop() > top) {
        $(this).animate({ opacity: 1 }, 800);
      }
    });
  });
});