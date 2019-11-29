const poke = {
  pokePerPage: 4,
  currentPage: 1,
  results: null
};

const pagination = document.querySelector(".pages");
const output = document.querySelector(".output");

//function to load the results based on the initial API call
const init = function() {
  const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=4";

  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      const next = data.next;
      window.next2 = next;
      poke.results = data.results;
      loadPage(1);
    });
};

//function that gets the next URL from the API results on click of the next button in the UI
const getNext = function() {
  fetch(next2)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      const next = data.next;
      window.next2 = next;
      const prev = data.previous;
      window.prev2 = prev;
      poke.results = data.results;
      loadPage(1);
    });
};

//function that gets the previous URL from the API results on click of the previous button in the UI
const getPrev = function() {
  fetch(prev2)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      const prev = data.previous;
      window.prev2 = prev;
      poke.results = data.results;
      loadPage(1);
    });
  output.innerHTML = "";
};

const loadPage = function(pg) {

  poke.currentPage = pg;
  $("#pokeTable").text("");
  let startPoke = (poke.currentPage - 1) * poke.pokePerPage;
  let endPoke =
    startPoke + poke.pokePerPage > poke.results.length
      ? poke.results.length
      : startPoke + poke.pokePerPage;

  for (let i = startPoke; i < endPoke; i++) {
    // pulling out URL to individual pokemon
    let url = poke.results[i].url;

    //using that URL for a new fetch to get the image
    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        const pic = data.sprites.front_default;
        window.pic2 = pic;

        // generating the sprite from URl
        var spriteDiv = $("<div>");
        spriteDiv.addClass("sprite");
        var img = $("<img />");
        img.addClass("sprite");
        img.attr("src", pic2);
        spriteDiv.append(img);

        //creating a new row for each poke
        var newRow = $("<tr>").append(
          $("<td>").text(capName),
          $("<td>").append(spriteDiv)
        );

        //adding new row to the table
        $("#pokeTable").append(newRow);
      });

    //getting the name of each poke
    let Name = poke.results[i].name;

    //converting string to caps
    let capName = Name.charAt(0).toUpperCase() + Name.slice(1);
  }
};

// event listener to start the function init when the page loads
window.addEventListener("load", function() {
  init();
});
