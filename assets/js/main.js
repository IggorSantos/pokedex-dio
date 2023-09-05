
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const urlPokemon = "https://pokeapi.co/api/v2/pokemon/"

const maxRecords = 151;
const limit = 10;
let offset = 0;

function convertPokemonToHTML(pokemon){
    return `<a onclick="goToPokemonPage(${pokemon.number})">
                <li class="pokemon ${pokemon.type}">
                                <span class="number">#${pokemon.number}</span>
                                <span class="name">${pokemon.name}</span>

                                <div class="detail">
                                    <ol class="types">
                                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                                    </ol>
                                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                                </div>            
                </li> 
            </a>
    `
}

function goToPokemonPage(url){
    pokeApi.getPokemonPage(`${urlPokemon}${url}/`)
    .then((pokemon) => console.log(pokemon))
    window.location.href = "./pokemon-details.html/?id=url"
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map(convertPokemonToHTML).join('')
        pokemonList.innerHTML += newHTML
    })
}    

loadPokemonItens(offset,limit)    

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

