
const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#001</span>
            <span class="name">${pokemon.name}</span>
            <div class="detail">
                <ol class="types">
                    <li class="type">grass</li>
                    <li class="type">poison</li>
                </ol>
                <img src="/assets/images/1.gif" alt="${pokemon.name}">
            </div>
        </li>
    `
}


pokeApi.getPokemons()
    .then((pokemonlist) => {
        for (let i = 0; i < pokemonlist.length; i++) {
            const pokemon = pokemonlist[i];
            const pokemonLi = convertPokemonToLi(pokemon)
            document.getElementById('pokemonList').innerHTML += pokemonLi
        }

    })
    .catch((error) => console.log(error)) 
    
    
    
   
