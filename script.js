$(document).ready(setInterval(function() {
    
    var colors = ["#CCCCCC", "#333333", "#990099", "#71C671", "#F4A460", "#FFFF00", "#00FF00", "#104E8B", "#8B4789", "#B0171F"];
    var rand = Math.floor(Math.random() * colors.length);
    $('#logo').css("background-color", colors[rand]);
    
}, 1000));