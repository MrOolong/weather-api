jQuery(document).ready(function($) {
  $.ajax({
  url : "http://api.wunderground.com/api/36a94128ab9864b5/geolookup/conditions/q/IA/Cedar_Rapids.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_f = parsed_json['current_observation']['temp_f'];
  alert("Current temperature in " + location + " is: " + temp_f);
  }
  });
});


//   if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     $("#geo_check").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
//   });
// }