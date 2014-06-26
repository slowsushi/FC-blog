$(document).ready( function() {
 $.getJSON("json_data.json", function(data){
       $.each(data.response, function(){
	         $("ul").append("<li> "+this['results']+"</li>
                                <br />");
	   });
 });