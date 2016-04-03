//Various Onload Scripts
window.onload = function scriptsInit(){
  setcopyright();
  carouselInit();
  popInit();
  dropInit();
};

//Set Footer Year
function setcopyright() {
  var d = new Date().getFullYear();
  document.getElementById("copyright").innerHTML = "<p><span class='small'>The AWRA AL Section website was created by <a href='mailto:gmarodis@alruralwater.com'>George Marodis</a>, Source Water Specialist with the <a target='_blank' href='http://www.alruralwater.com'>Alabama Rural Water Association.</a></span><br /><span class='small'>Site maintained and hosted by <a href='http://www.dasix.com'>Dasix, Inc.</a></span><br /><br />Copyright &copy; 1987 - " + d + " AWRA AL Section, All Rights Reserved.</p>";
}

//Activate Carousel
function carouselInit() {
  $(".carousel").carousel({
    interval: 4000 //changes the speed
  })
}

//Activate Symposium Agenda Popovers
function popInit () {
  $("#symposium :link").popover();
}

//Navigation Dropdown Fade-In / Fade-Out on Hover
function dropInit() {
  $("ul.nav li.dropdown").hover(function(){
    $('.dropdown-menu', this).fadeIn();
  }, function(){
    $('.dropdown-menu', this).fadeOut('fast');
  });
}
