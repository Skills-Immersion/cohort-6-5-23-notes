import { POKEMON_ADDED, POKEMON_REMOVED } from "./actionTypes.js"
// { actions
//     type: "addIceCream",
//     payload: {
//          flavor: "pistachio"
//    }
// }

// { actions
//     type: "removeIceCream",
//     payload: {
//          id: 1
//    }
// }
let pokemonId = 0;

function reducer(state = [], action) {
    switch (action.type) {
        case POKEMON_ADDED:
            return [
                ...state,
                {
                   id: ++ pokemonId,
                   flavor: action.payload.pokeName
                }
            ];
        case POKEMON_REMOVED:
            return state.filter( pokemonObj => pokemonObj.id !== action.payload.id)
        default:
            return state;
    }
}

export default reducer;
