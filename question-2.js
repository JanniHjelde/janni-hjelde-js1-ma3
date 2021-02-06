
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";



async function fetchGames() {
    const response = await fetch(url);
    const resultsLoop = await response.json();
    const games = resultsLoop.results;
    const resultsHtml = document.querySelector(".results");
    
    resultsHtml.innerHTML = "";

for(let i = 0; i <8; i++) {
resultsHtml.innerHTML += `
<h3> ${games[i].name}</h3>
<p class="rating"> ${games[i].rating}</p>
<p class="lengt"> ${games[i].tags.length}</p>
`}

}

fetchGames(); 
