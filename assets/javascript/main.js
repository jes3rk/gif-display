var topics = ["cat", "monkey", "baby-turtle", "dog", "hamster", "guinea-pig", "fish", "sheep", "bird"];
var randOff;
var apiKey = "YKIP52CjjkbKLTnbeOTl5ul79X3ISqRl"

function rand() {
  randOff = Math.floor(Math.random()*50);
}


function createBtn() {
  $('.buttons').empty();
  for (var i = 0; i < topics.length; i++) {
    $('.buttons').append('<button class="btn btn-success adorBtn" name=' + topics[i] + ' >' + topics[i] + '</button>');
  };
}

function giphy(name) {

  var url = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=" + apiKey + "&limit=10&offset=" + randOff;

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
      // Checks to see if the img src is the still and adjusts accordingly
    $('.card-img-top').on('click', function(event) {
      if ($(this).prop('src') === response.data[event.target.name].images.original_still.url) {
        $(this).attr("src", response.data[event.target.name].images.original.url);
      } else {
        $(this).attr("src", response.data[event.target.name].images.original_still.url);
      };
    });
  });
}

function toGif(name) {

}

$(document).ready(function() {
  createBtn();

  $('.adorBtn').on('click', function(event) {
    console.log(event.target.name);
    rand();
    $('.display').empty();
    giphy(event.currentTarget.name);
  });

  $('.input-group-btn').on('click', function() {
    $('.buttons').append('<button class="btn btn-success adorBtn" name=' + $('input').val() + ' >' + $('input').val() + '</button>');
  });

})
