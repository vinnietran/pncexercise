const poke = {
  pokePerPage: 20,
  currentPage: 1,
  results: null
};

const pagination = document.querySelector(".pages");
const output = document.querySelector(".output");

const init = function() {
  console.log("ready");
  const url = "https://pokeapi.co/api/v2/pokemon";

  fetch(url)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      const next = data.next;
      window.next2 = next;
      poke.results = data.results;
      console.log(data);
      loadPage(1);
    });
};

const getNext = function() {
  console.log(next2);
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
      console.log(data);
      console.log(data.next);
      console.log(poke);
      loadPage(1);
    });
};

const getPrev = function() {
  console.log(prev2);
  fetch(prev2)
    .then(function(res) {
      return res.json();
    })
    .then(function(data) {
      const prev = data.previous;
      window.prev2 = prev;
      poke.results = data.results;
      console.log(data);
      console.log(data.next);
      console.log(poke);
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
    console.log("Here is URL " + url);
    //using that URL for a new fetch to get the image
    fetch(url)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        const pic = data.sprites.front_default;
        window.pic2 = pic;
        console.log(pic);

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

window.addEventListener("load", function() {
  init();
});
