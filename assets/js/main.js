
/*function convertTypesToLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}*/
function convertPokemonToHTML(pokemon){
    return `
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

