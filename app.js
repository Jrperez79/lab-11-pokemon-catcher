// import functions and grab DOM elements
import { pokemonArray } from './pokemonRawData.js';
import { getRandomPokemon } from './pokeUtils.js';
// initialize state

const radioButton = document.querySelectorAll('label');
const nextButton = document.getElementById('next');

let tries = 0;
let remainingPokemon = pokemonArray.slice();
let pokemonCaught = [];
let totalPokemonEncountered = [];
// let userSelection = null;

// set event listeners to update state and DOM
const randomPokemon1 = getRandomPokemon(remainingPokemon);
let randomPokemon2 = getRandomPokemon(remainingPokemon);
let randomPokemon3 = getRandomPokemon(remainingPokemon);

while (randomPokemon1.id === randomPokemon2.id === randomPokemon3.id) {
    randomPokemon2 = getRandomPokemon(remainingPokemon);
    randomPokemon3 = getRandomPokemon(remainingPokemon);
}

// Grabs the Array of Labels
const labels = document.querySelectorAll('label');

// label 1
const firstLabel = labels[0];
const firstInput = firstLabel.children[1];
const firstImg = firstLabel.children[2];

firstInput.value = randomPokemon1.id;
firstImg.src = randomPokemon1.url_image;
firstInput.addEventListener('click', eventHandler);

// label 2
const secondLabel = labels[1];
const secondInput = secondLabel.children[1];
const secondImg = secondLabel.children[2];

secondInput.value = randomPokemon2.id;
secondImg.src = randomPokemon2.url_image;
secondInput.addEventListener('click', eventHandler);

// label 3
const thirdLabel = labels[2];
const thirdInput = thirdLabel.children[1];
const thirdImg = thirdLabel.children[2];

thirdInput.value = randomPokemon3.id;
thirdImg.src = randomPokemon3.url_image;
thirdInput.addEventListener('click', eventHandler);

// disables input
firstInput.disabled = false;
secondInput.disabled = false;
thirdInput.disabled = false;

nextButton.classList.add('hidden');




function eventHandler(e) {
    tries++;

    const whatUserClicked = e.target.value;
    if (randomPokemon1.id === whatUserClicked) {
        let indexOfPokemon;
    }
}

