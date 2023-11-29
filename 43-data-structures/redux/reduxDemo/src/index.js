import store from "./store.js";
import { pokemonAdded, pokemonRemoved } from "./pokemon.js";




function logState() {
    console.log("current State", store.getState());
}

store.subscribe(logState)

async function catchEmAll() {
    console.log("adding gengar");
    await store.dispatch(pokemonAdded("gengar"))
    await store.dispatch(pokemonAdded("bidoof"))
    await store.dispatch(pokemonAdded("delcatty"))
}

catchEmAll()


