import pkg from '@reduxjs/toolkit';
const { configureStore } = pkg;
import pokemonReducer from "./pokemon.js"

const store = configureStore({
    reducer: {
        pokemonReducer
    }
})


console.log(store);

export default store

