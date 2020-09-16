$(document).ready(function(){
$("#mycarousel").carousel({interval:2000});
$("#carouselButton").click(function(){
if($("#carouselButton").children("span").hasClass("fa-pause")){
    $("#mycarousel").carousel('pause');
    $("#carouselButton").children("span").removeClass("fa-pause");
$("#carouselButton").children("span").addClass("fa-play");
}
else{ $("#mycarousel").carousel('cycle');

    $("#carouselButton").children("span").removeClass("fa-play");
    $("#carouselButton").children("span").addClass("fa-pause");
}
})
});
$(document).ready(function(){
  $("#2").click(function(){
    $("#loginModal").modal("toggle");
  });
   $(".c").click(function(){
    $("#loginModal").modal("hide");
  });

});
$(document).ready(function(){
  $("#3").click(function(){
    $("#resModal").modal("toggle");
  });
  $(".c").click(function(){
    $("#resModal").modal("hide");
  });


});

