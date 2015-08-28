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
    
animationHover('#card1', 'pulseup', 'pulsedown');
animationHover('#card2', 'pulseup', 'pulsedown');
animationHover('#card3', 'pulseup', 'pulsedown'); 
animationHover('#card4', 'pulseup', 'pulsedown'); 


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