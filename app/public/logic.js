// var queryURL = "https://pokeapi.co/api/v2/pokemon";

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log("It worked");
//   //console.log(response);
// });

getPoke(); 

function getPoke(){
var queryURL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {

  for (var i = 0; i < response.results.length; i++){
    var name = response.results[i].name;
    var namediv = $("<div>");
    var caps = name.toUpperCase(); 
    

    var p = $("<p>").text(caps); 

    $(namediv).append(p); 

    console.log(name); 
    console.log(caps);

    $("#test").prepend(namediv);
  }

 

});

}


