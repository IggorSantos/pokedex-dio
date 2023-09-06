const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"
const pathParams = new URLSearchParams(window.location.search);
const pokemonId = pathParams.get('id');
const pokemonName = document.getElementById('pokemonName')
const pokemonImg = document.getElementById('pokemonImg')
const abilityList = document.getElementById('abilityList')

function getPokemonDetails(){
    pokeApi.getPokemonPage(`${urlPokemon}${pokemonId}/`)
    .then((response) => {
        pokemonName.innerHTML = response.name
        pokemonImg.src = response.sprites.front_default        
        const newList = response.abilities.map((ability) => (`<li">${ability.ability.name}</li>`))
        abilityList.innerHTML += newList
    })    
}

getPokemonDetails()

console.log(pokemonId)
