$(document).ready(function(){
  $(".tgl-Btn").click(function(){
    $(".nav-cnt").slideToggle('5000').css({
    	display:"flex",
    	flexDirection:"column"
    });
  });
});