var queryURL = "https://pokeapi.co/api/v2/pokemon";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log("It worked");
  //console.log(response);
});

var queryURL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log("It worked");
  console.log(response);

  for (var i = 0; i < response.length; i++){
    console.log(response.count); 
  }
});


