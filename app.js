// import functions and grab DOM elements
import { pokemon } from './pokemonRawData.js';
import { getRandomPokemon } from './pokeUtils.js';
import { counterTimesViewed, counterTimesClicked } from './counter-function.js';
import { findById } from './findByValue.js';
// initialize state

// const radioButton = document.querySelectorAll('input');
const nextButton = document.getElementById('next');
const pokemonCaughtCounter = document.getElementById('poke-caught-counter');

let triesCounter = 0;
let remainingPokemon = pokemon.slice();
let pokemonCaughtArray = [];
let totalPokemonEncounteredArray = [];


let randomPokemon1 = getRandomPokemon(remainingPokemon);
let randomPokemon2 = getRandomPokemon(remainingPokemon);
let randomPokemon3 = getRandomPokemon(remainingPokemon);

while (randomPokemon1 === randomPokemon2 || randomPokemon1 === randomPokemon3 || randomPokemon2 === randomPokemon3) {
    randomPokemon2 = getRandomPokemon(remainingPokemon);
    randomPokemon3 = getRandomPokemon(remainingPokemon);
    

// Grabs the Array of Labels
    const labels = document.querySelectorAll('label');

// label 1
    const firstLabel = labels[0];
    const firstName = firstLabel.children[0];
    const firstInput = firstLabel.children[1];
    const firstImg = firstLabel.children[2];


    firstInput.value = randomPokemon1.id;
    firstName.textContent = randomPokemon1.pokemon;
    firstInput.addEventListener('click', eventHandler);
    firstImg.src = randomPokemon1.url_image;

// label 2
    const secondLabel = labels[1];
    const secondName = secondLabel.children[0];
    const secondInput = secondLabel.children[1];
    const secondImg = secondLabel.children[2];


    secondInput.value = randomPokemon2.id;
    secondName.textContent = randomPokemon2.pokemon;
    secondInput.addEventListener('click', eventHandler);
    secondImg.src = randomPokemon2.url_image;

// label 3
    const thirdLabel = labels[2];
    const thirdName = thirdLabel.children[0];
    const thirdInput = thirdLabel.children[1];
    const thirdImg = thirdLabel.children[2];

    thirdInput.value = randomPokemon3.id;
    thirdName.textContent = randomPokemon3.pokemon;
    thirdInput.addEventListener('click', eventHandler);
    thirdImg.src = randomPokemon3.url_image;



function eventHandler(e) {
    const whatWasClicked = e.target.value;
    if (whatWasClicked === remainingPokemon.id) {
        
    }
} 
    
nextButton.addEventListener('click', () => {
    const clickedPokemon = document.querySelector('input:checked');
    const valueClicked = clickedPokemon.value;
    const pokemon = findById(remainingPokemon, valueClicked.id);
    pokemonCaughtArray.push(pokemon);
    setPage();
});

// nextButton.classList.add('hidden');

setPage();
