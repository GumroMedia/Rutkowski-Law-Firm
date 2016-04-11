// coffee cup hover
function animationHover(element, animationup, animationdown){
  element = $(element);
  element.hover(
    function() {
      element.removeClass('animated ' + animationdown);
      element.addClass('animated ' + animationup);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animationup);
        element.addClass('animated ' + animationdown);
      }, 100);
    }
  );
};
animationHover('#coffee', 'pulseup', 'pulsedown');

//iphone shake
function animationHover2(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 500);
    }
  );
};
animationHover2('#phone', 'shake');


$("figure.stack").hover(function(){
  $(this).toggleClass("hover");
});

$("#stack01").click(function(){
  $(this).toggleClass("active");
  $("figure.post-stack").removeClass("active");
  $("#stack02").removeClass("active");
});

$("#stack02").click(function(){
  $(this).toggleClass("active");
  $("figure.post-stack").removeClass("active");
  $("#stack01").removeClass("active");
});

$("figure.post-stack").hover(function(){
  $(this).toggleClass("hover");
});

$("figure.post-stack").click(function(){
  $(this).toggleClass("active");
  $("figure.stack").removeClass("active");
});

// show modals

$(".modal-estate-planning").click(function(){
  $('#modal-estate-planning').modal('show');
})

$(".modal-business-corporate").click(function(){
  $('#modal-business-corporate').modal('show');
})

$(".card-modal-mike").click(function(){
  $('#modal-mike').modal('show');
});

$(".card-modal-anisha").click(function(){
  $('#modal-anisha').modal('show');
});

$(".card-modal-juliana").click(function(){
  $('#modal-juliana').modal('show');
});

$(".card-modal-trisha").click(function(){
  $('#modal-trisha').modal('show');
});

$(".card-modal-kendra").click(function(){
  $('#modal-kendra').modal('show');
});
