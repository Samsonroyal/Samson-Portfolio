$(document).mousemove(function(e){
  $(".sun").css({
    left:e.pageX - 300, 
    top:e.pageY - 300
  });
});