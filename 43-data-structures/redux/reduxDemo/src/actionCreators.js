import { POKEMON_ADDED, POKEMON_REMOVED } from "./actionTypes.js"

export function pokemonAdded(pokeName) {

    return {
        type: POKEMON_ADDED,
        payload: {
            pokeName
        }
    }
}

export function pokemonRemoved(id) {
    return {
        type: POKEMON_REMOVED,
        payload: {
            id
        }
    }
}