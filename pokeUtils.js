import { pokemonArray } from './pokemonRawData.js';

export function getRandomPokemon(array) {
    
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);

    return array[randomIndex];
}

