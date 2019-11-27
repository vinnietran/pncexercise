// getPoke();

// function getPoke() {
//   var queryURL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     for (var i = 0; i < response.results.length; i++) {
//       var name = response.results[i].name;
//       var namediv = $("<div>");
//       var caps = name.toUpperCase();

//       var p = $("<p>").text(caps);

//       $(namediv).append(p);

//       $("#test").prepend(namediv);
//     }
//     console.log(response); 
//   });
// }

const poke = {
  pokePerPage: 10,
  currentPage: 1,
  results:null
};

const pagination = document.querySelector('.pages');
const output = document.querySelector('.output');

const init = function(){
  console.log("ready");
  const url = 'https://randomuser.me/api/?results=66'; 

  fetch(url).then(function(res){
    return res.json()
  }).then(function(data){
    poke.results = data.results;
    console.log(poke);
    loadPage(1); 
  })
}

const loadPage = function(pg){
  poke.currentPage = pg;
  let startPoke = (poke.currentPage-1) * poke.pokePerPage; 
  let totalPages = Math.ceil(poke.results.length / poke.pokePerPage); 
  console.log(totalPages); 
  console.log(startPoke); 
  
  output.innerHTML = `<h1>Page ${poke.currentPage}<h1`; 

  for(let i = 0; i < poke.pokePerPage; i++){
    console.log(poke.results[i]);
    let div = document.createElement('div');
    div.innerHTML=`${poke.results[i].name.first}<br>`
    output.appendChild(div);
  }
}

window.addEventListener('load',function(){
  init(); 
})