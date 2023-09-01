const offset = 0;
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
let pokemonList = []

fetch(url)
    .then((response) =>  response.json())
    .then((jsonBody) => {
        pokemonList = jsonBody.results
        console.log(pokemonList)
    })
    .catch((error) =>    console.error(error))
    .finally(() =>       console.log("Concluído"))