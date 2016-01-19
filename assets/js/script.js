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
    var $icon = $(this).find('.fa');
    var $slider = $(this).parent().parent();

    // Prep vars
    var container,
        currentIconClass,
        nextIconClass;

    // If the slider is a year
    // we're sliding the month
    // else we're sliding the month's posts
    if ($slider.hasClass('year')) {
      // Find the month
      container = '.month';

      // If the icon is an closed folder
      // open it
      // esle close it
      openClass = 'fa-folder-open';
      closedClass = 'fa-folder';

    } else if ($slider.hasClass('month')) {
      
      // Find the posts
      container = '.posts';
      
      // If the icon is a plus
      // set to minus
      // else set to plus
      openClass = 'fa-minus';
      closedClass = 'fa-plus';
    }

    // Find containing element
    $slider = $slider.find(container);

    // Get the correct current and next icon classes
    currentIconClass = ($icon.hasClass(openClass)) ? closedClass : openClass;
    nextIconClass = ($icon.hasClass(openClass)) ? openClass : closedClass;

    // Swap icons
    $icon.removeClass(currentIconClass);
    $icon.addClass(nextIconClass);

    // Toggle the slider
    $slider.slideToggle();

    return false;
  });

}

