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
};

const loadPage = function(pg) {
  poke.currentPage = pg;
  pagination.innerHTML = "";
  let startPoke = (poke.currentPage - 1) * poke.pokePerPage;
  let endPoke =
    startPoke + poke.pokePerPage > poke.results.length
      ? poke.results.length
      : startPoke + poke.pokePerPage;

  output.innerHTML = `<h1>Pokemon!<h1>`;


  for (let i = startPoke; i < endPoke; i++) {
    let Name = poke.results[i].name;
    let capName = Name.charAt(0).toUpperCase() + Name.slice(1);
    let div = document.createElement("div");
    div.innerHTML = `<h3>${capName}<h3>`;
    output.append(div);
  }
};

window.addEventListener("load", function() {
  init();
});
