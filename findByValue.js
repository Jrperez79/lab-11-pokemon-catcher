export default function findById(pokes, id) {
    for (let i = 0; i < pokes.length; i++) {
        const poke = pokes[i];
        if (poke.id === id) {
            return poke;
        }
    }
    return null;
}
