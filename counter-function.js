import findById from './findByValue.js';

export function counterTimesViewed(views, id) {
    let pokemonItem = findById(views, id);

    if (!pokemonItem) {
        addItem(views, id);
        pokemonItem = findById(views, id);
    }
    pokemonItem.timesViewed++;
}

export function counterTimesClicked(views, id) {
    let clickedPokemon = findById(views, id);

    if (!clickedPokemon) {
        addItem(views, id);
        clickedPokemon = findById(views, id);
    }

    clickedPokemon.timesClicked++;

}

export function addItem(views, id) {
    const pokemonItem = {
        id: id,
        timesViewed: 0,
        timesClicked: 0,
    };
    views.push(pokemonItem);
}
