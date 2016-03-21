/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Activates first Timeline-Image

// Defines All Timelie Buttons as Clikable
$('.timeline-image').click(function() {
    $('.timeline li').removeClass('expand');
    $(this).parent().addClass('expand');
});

$('.timeline-panel').click(function() {
    $('.timeline li').removeClass('expand');
    $(this).parent().addClass('expand');
});

// Waypoint
var timelineFirstPoint = $('.timeline li:first-child').waypoint(function(direction) {
  $(this.element).addClass('expand');
  this.destroy();
}, {
  offset: '70%'
})

var itemShadows = $('.item-shadow').waypoint(function(direction) {
  $(this.element).addClass('move');
  this.destroy();
}, {
  offset: '70%'
})
// End Timeline

/* Work */
$(function(){
  workBelt();
  workLoad();
});

function workBelt() {

  $(".trigger").remove();
  $(".return").remove();

  $('.thumb-container label').click(function() {
    $('.work-belt').addClass("slided");
    $('.work-container').show();
  });

  $('.work-return').click(function() {
    $('.work-belt').removeClass("slided");
    setTimeout(function() {
      $('.work-container').hide();
    }, 600);
  });

}


function  workLoad() {

  $.ajaxSetup({ cache: true });

  $('.thumb-container label').click(function() {
    var $this = $(this),
        newTitle = $this.find('.portfolio-caption h4').text(),
        newfolder = $this.find('.portfolio-item').data('folder'),
        spinner = '<div class="loader">Loading...</div>',
        newHTML = '/work/'+ newfolder + "/index.html";

    $('.project-load').html(spinner).load(newHTML);
    $('.project-title').text(newTitle);
  });

}
/* End Work */

/* Navbar Line */
$(function(){
  switchLine();
});

function switchLine(){
  $('body').on('activate.bs.scrollspy', function(){
    checkLine();
  });
}

function checkLine(){
  if($('#nl-a').hasClass('active')){
    $('#nav-line').css({
      'right': 330,
      'width': 75
    });
  }else if($('#nl-t').hasClass('active')){
    $('#nav-line').css({
      'right': 225,
      'width': 90
    });
  }else if($('#nl-p').hasClass('active')){
    $('#nav-line').css({
      'right': 100,
      'width': 110
    });
  }else if($('#nl-c').hasClass('active')){
    $('#nav-line').css({
      'right': -5,
      'width': 90
    });
  }else{
    $('#nav-line').css({
      'right': '',
      'width': 90
    });
  }
}
/* End Navbar Line*/
