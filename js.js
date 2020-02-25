$(document).ready(function(){
  $(".formalHed").click(function(){
    $(".formalTxt").slideToggle('5000');
  });
});

$(document).ready(function(){
  $(".ItHed").click(function(){
    $(".ItTxt").slideToggle('5000');
  });
});

$(document).ready(function(){
	$(".cao").fadeTo(2000, 1);
	$(".name").fadeTo(4000, 1);
	$(".desc").fadeTo(5000, 1);
	$(".downScr").fadeTo(6000, 1);
	function blink(){
	$(".downScr").fadeOut(400);
	$(".downScr").fadeIn(700);}
	setInterval(blink, 1100);
	
});

$(document).ready(function() {

$('.html').waypoint(function() {
$('.html').css({
animation: "animate-positive 3s",
backgoundColor: "red",
width: '85%'

});
}, { offset: '75%' })});

$(document).ready(function() {
$('.css').waypoint(function() {
$('.css').css({
animation: "animate-positive 3s",
backgoundColor: "red",
width: '75%'

});
}, { offset: '75%' })});

$(document).ready(function() {
$('.javascript').waypoint(function() {
$('.javascript').css({
animation: "animate-positive 3s",
backgoundColor: "red",
width: '60%'

});
}, { offset: '75%' })});

$(document).ready(function() {
$('.jquery').waypoint(function() {
$('.jquery').css({
animation: "animate-positive 3s",
backgoundColor: "red",
width: '65%'

});
}, { offset: '95%' })});

$(document).ready(function() {
$('.aj').waypoint(function() {
$('.aj').css({
animation: "animate-positive 3s",
backgoundColor: "red",
width: '60%'

});
}, { offset: '95%' })});

$(document).ready(function() {
$('.php').waypoint(function() {
$('.php').css({
animation: "animate-positive 3s",
backgoundColor: "red",
width: '55%'

});
}, { offset: '75%' })});

$(document).ready(function() {
$('.sql').waypoint(function() {
$('.sql').css({
animation: "animate-positive 3s",
backgoundColor: "red",
width: '60%'

});
}, { offset: '75%' })});


$(document).ready(function() {
$('.wp').waypoint(function() {
$('.wp').css({
animation: "animate-positive 3s",
backgoundColor: "red",
width: '60%'

});
}, { offset: '95%' })});
