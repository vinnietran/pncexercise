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

  for (var i = 0; i < response.results.length; i++){
    var name = response.results[i].name;
    var namediv = ("<div>");

    console.log("here are the names" + " " + name); 
    

    $(".card-text").prepend(name);
  }

 

});


