

var pB = document.getElementById("plusButton");
var pB2 = document.getElementById("plusButton2");


//JS for Side Bar Navigation
var mainContent = document.getElementById("main")

var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);

    mainContent.className= 'inactive';
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

    mainContent.className = '';


  });

  //JS for Expanding content
  //When button is checked add class open to expand content
  //Also changes icon to minus when content is expanded
  $('#toggle').change(function(){
    if($(this).is(":checked")) {
        $('#expand').addClass("open");
        pB.className = 'fa fa-minus-circle fa-2x';

    } else {
        $('#expand').removeClass("open");
        pB.className = 'fa fa-plus-circle fa-2x';
    }
});

  $('#toggle2').change(function(){
    if($(this).is(":checked")) {
        $('#expand2').addClass("open");
        pB2.className = 'fa fa-minus-circle fa-2x';

    } else {
        $('#expand2').removeClass("open");
        pB2.className = 'fa fa-plus-circle fa-2x';
    }
  });
};


$(document).ready(main);
