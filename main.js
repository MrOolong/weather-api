//create function to convert degrees in F to C
function celciusConverter(){
  //[°C] = ([°F] - 32) × 5/9
};


// jQuery(document).ready(function($) {
//   $.ajax({
//   url : "http://api.wunderground.com/api/36a94128ab9864b5/geolookup/conditions/q/IA/Cedar_Rapids.json",
//   dataType : "jsonp",
//   success : function(parsed_json) {
//   var location = parsed_json['location']['city'];
//   var temp_f = parsed_json['current_observation']['temp_f'];
//   alert("Current temperature in " + location + " is: " + temp_f);
//   }
//   });
// });


//   if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     $("#geo_check").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//   });
// }

//toggle button must convert farenheit to celcius & vice versa. It must also change the text from F to C
$(document).ready(function(){
    
$('#switch-color').click(function(){
  $('#body-toggle').toggleClass('night');
  $('.body-toggle').toggleClass('night');
        $('#switch-color').text(function    (i, v){
            return v === 'Day Mode' ? 'Night Mode' : 'Day Mode'
        });
            $('#switch-color').toggleClass('daymode-button');
            //$('.night-text').toggleClass('night-text');
});

});