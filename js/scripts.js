$(document).ready(function(){
	
  var carouselList = $("#carousel ul");
  
  setInterval(changesSlide, 4000);
  
  function changesSlide(){
    carouselList.animate({marginLeft:-600}, 500, moveFirstSlide);
  }
  
  function moveFirstSlide(){
    var firstItem = carouselList.find("li:first");
    var lastItem = carouselList.find("li:last");
    lastItem.after(firstItem)
    carouselList.css({marginLeft:0});
  }
});

