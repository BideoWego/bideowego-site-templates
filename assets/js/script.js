// --------------------------------------------
// Script JS
// --------------------------------------------

// Blog Archive
if ($('#blog-archive').length) {

  // Slide up archives to start
  $('.posts, .month').slideUp();

  // Toggle icons to start
  $('.fa-folder-open')
    .removeClass('fa-folder-open')
    .addClass('fa-folder');
  $('.fa-minus')
    .removeClass('fa-minus')
    .addClass('fa-plus');

  // Toggle archive click event
  $('.archive-toggle').click(function(e) {

    e.preventDefault();

    // Find the toggle anchor
    // Font Awesome icon
    // and element to slide
    var $toggle = $(this);
    var $icon = $(this).find('.fa');
    var $slider = $(this).parent().parent();

    // If the slider is a year
    // we're sliding the month
    // else we're sliding the month's posts
    if ($slider.hasClass('year')) {
      // Find the month
      $slider = $slider.find('.month');


      // If the icon is an closed folder
      // open it
      // esle close it
      if ($icon.hasClass('fa-folder')) {
        $icon.removeClass('fa-folder');
        $icon.addClass('fa-folder-open');
      } else if ($icon.hasClass('fa-folder-open')) {
        $icon.removeClass('fa-folder-open');
        $icon.addClass('fa-folder');
      }

    } else if ($slider.hasClass('month')) {
      
      // Find the posts
      $slider = $slider.find('.posts');
      
      // If the icon is a plus
      // set to minus
      // else set to plus
      if ($icon.hasClass('fa-plus')) {
        $icon.removeClass('fa-plus');
        $icon.addClass('fa-minus');
      } else if ($icon.hasClass('fa-minus')) {
        $icon.removeClass('fa-minus');
        $icon.addClass('fa-plus');
      }
    }

    // Toggle the slider
    $slider.slideToggle();

    return false;
  });

}

