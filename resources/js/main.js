$(document).ready(function () {

   $('.js--pizzas').waypoint(function (direction) {
      if (direction == "down") {
          $('#nav-bar').addClass('sticky');
      } else {
          $('#nav-bar').removeClass('sticky');
      }
   }, { offset: '75px;' }); 

    

});



