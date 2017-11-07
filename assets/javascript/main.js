var topics = ["cat", "monkey", "turtle", "dog", "hamster", "guinea-pig", "fish", "sheep", "bird"];

var apiKey = "YKIP52CjjkbKLTnbeOTl5ul79X3ISqRl"

function createBtn() {
  for (var i = 0; i < topics.length; i++) {
    $('.buttons').append('<button name=' + topics[i] + ' >' + topics[i] + '</button>');
      $('button').attr({
        type: "button",
        class: "btn btn-success",
      });
  };
}

function giphy(name) {
  var url = "http://api.giphy.com/v1/gifs/search?q=cute+" + name + "&api_key=" + apiKey + "&limit=10";
  $.ajax({
    url: url,
  }).done(function(response){
    console.log(response);
    // Generate Cards
    for (var i = 0; i < response.data.length; i++) {
      $('.display').append('<div id=' + i + ' class="card"></div>');
        $('#'+i).append('<img class="card-img-top">');
        $('#'+i).append('<div class="card-body"><p/></div>')
    };

    // Fill cards with internals
// src: response.data[i].images.original_still.url,

    // Add images
    // $('.display').children().forEach({
    //   console.log('test');
    // });
  });
}

$(document).ready(function() {
  createBtn();

  $('.btn').on('click', function(event) {
    giphy(event.currentTarget.name);
  });

})
