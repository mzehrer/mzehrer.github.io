jQuery(document).ready(function($){

  $('#googleplus').mouseover(function(){
    $('#mousing').text("Google+");
  });

  $('#googleplus').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#pinboard').mouseover(function(){
    $('#mousing').text("Pinboard");
  });

  $('#pinboard').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#twitter').mouseover(function(){
    $('#mousing').text("Twitter");
  });

  $('#twitter').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  $('#rss').mouseover(function(){
    $('#mousing').text("RSS");
  });

  $('#rss').mouseout(function(){
    $('#mousing').html("&nbsp;");
  });

  var currentPath = $.url().attr('path');

  if (currentPath != "/") {
    $('#avatar').attr('src', "/images/mzehrer-bw.png");
  }

});

