
function convertPokemonToHTML(pokemon){
    return `
            <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        <li class="type">gross</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png" alt="${pokemon.name}">
                </div>            
            </li> 
    `
}

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToHTML).join('')
    //Acima a forma reduzida do codigo abaixo
    /*const newList = pokemons.map((pokemon) => {
        return convertPokemonToHTML(pokemon)
    })
    const newHTML = newList.join('')
    pokemonList.innerHTML += newHTML*/
})

