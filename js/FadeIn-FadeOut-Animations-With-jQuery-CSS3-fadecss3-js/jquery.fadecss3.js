// jquery.fadecss3.js (c)2016 econosys system  http://econosys-system.com/
// Version 0.10
// The MIT License (MIT)


$.fn.fadeInCss3 = function(duration, easing) {
  var event_alias = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
  if (! duration){duration=400;}
  if (! easing){easing='linear';}
  var _this = this;
  setTimeout(function() {
    return $(_this).show().css({
        'animation'                 : 'fadein_css3_kf 400ms linear 0s 1 normal' ,
        'animation-duration'        : duration + 'ms' ,
        'animation-timing-function' : easing ,
        'animation-fill-mode'       : 'forwards' ,
        'visibility'                : 'visible'
    }).on(event_alias, function(){
      $(this).off(event_alias);
      $(this).css({
        'visibility' : 'visible' ,
        'animation'  : 'none'
      });
    });
  }, 0);
};

$.fn.fadeOutCss3 = function(duration, easing) {
  var event_alias = "animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd";
  if (! duration){duration=400;}
  if (! easing){easing='linear';}
  $(this).each(function(){
    if( $(this).filter(':not(:hidden)').length ){
      $(this).show().css({
          'animation'                 : 'fadeout_css3_kf 400ms linear 0s 1 normal' ,
          'animation-duration'        : duration + 'ms' ,
          'animation-timing-function' : easing ,
          'animation-fill-mode'       : 'forwards' ,
          'visibility'                : 'visible'
      }).on(event_alias, function(){
        $(this).off(event_alias);
        $(this).css({
          'visibility' : 'hidden' ,
          'animation'  : 'none' ,
          'display'    : 'none'
        });
      });
    }
  });
  return $(this);
};
