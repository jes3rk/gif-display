var topics = ["cat", "monkey", "turtle", "dog", "hamster", "guinea-pig", "fish", "sheep", "bird"];

var apiKey = "YKIP52CjjkbKLTnbeOTl5ul79X3ISqRl"

function createBtn() {
  for (var i = 0; i < topics.length; i++) {
    $('.buttons').append('<button class="btn btn-success adorBtn" name=' + topics[i] + ' >' + topics[i] + '</button>');
  };
}

function giphy(name) {
  $('.display').empty();
  var url = "http://api.giphy.com/v1/gifs/search?q=cute+" + name + "&api_key=" + apiKey + "&limit=10";

  $.ajax({
    url: url,
  }).done(function(response){
    console.log(response);
    // Generate Cards
    for (var i = 0; i < response.data.length; i++) {
      $('.display').append('<div id=' + i + ' class="card"/>');
        $('#'+i).append('<img name=' + i + ' class="card-img-top" src=' + response.data[i].images.original_still.url + ' >');
        $('#'+i).append('<div class="card-body"><p class="card-text">' + response.data[i].rating + '</p></div>')
    };
    // Register click on image
      // Must be in here because otherwise the DOM doesn't recognize the event
    $('img').on('click', function(event) {
      $(this).attr("src", response.data[event.target.name].images.looping.mp4);
    });
  });
}

function toGif(name) {

}

$(document).ready(function() {
  createBtn();

  $('.adorBtn').on('click', function(event) {
    giphy(event.currentTarget.name);
  });
  
  $('.input-group-btn').on('click', function() {
    $('.buttons').append('<button class="btn btn-success adorBtn" name=' + $('input').val() + ' >' + $('input').val() + '</button>');
  });

})
