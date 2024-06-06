const pokemonCount = 151;
var pokedex = {};
window.onload = async function() {
    for (let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i);
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = pokedex[i]['name'].toUpperCase();
        pokemon.classList.add("pokemon-name");
        document.getElementById("pokemon-list").append(pokemon);
        pokemon.addEventListener("click", Scambio);
       
    }
    document.getElementById("displaydescr").innerText = pokedex[1]["desc"].toUpperCase();

    console.log(pokedex);
}

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + num.toString();

    let res = await fetch(url);
    let pokemon = await res.json();
    // console.log(pokemon);

    let pokemonName = pokemon["name"];
    let pokemonImg = pokemon["sprites"]["front_default"];

    res = await fetch(pokemon["species"]["url"]);
    let pokemonDesc = await res.json();

    pokemonDesc = pokemonDesc["flavor_text_entries"][27]["flavor_text"];
    pokedex[num] = {"name" : pokemonName, "img" : pokemonImg, "desc" : pokemonDesc};

}

function Scambio(){
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];




    document.getElementById("displaydescr").innerText = pokedex[this.id]["desc"].toUpperCase();
    }
