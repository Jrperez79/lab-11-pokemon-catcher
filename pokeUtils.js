// function that gives randomly selected Pokemon
export function getRandomPokemon(pokemonArray) {
    
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);

    return pokemonArray[randomIndex];
}


