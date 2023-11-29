import pkg from '@reduxjs/toolkit';
const { createSlice, createAsyncThunk } = pkg;
import axios from "axios"

const initialState = {
    listOfPokemon: [],
    status: "idle",
    error: null
}

export const pokemonAdded = createAsyncThunk(
    "pokemon/pokemonAdded",
    async (pokemonName, { rejectWithValue }) => {
        try {
            const response = await axios(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            return { id: response.data.id, pokeName: response.data.name }
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)

const pokemonSlice = createSlice({
    name: "pokemon",
    initialState,
    reducers: {
        //actions
        pokemonRemoved: (state, action) => {
            return state.filter( pokemonObj => pokemonObj.id !== action.payload.id)
        }
    },
    extraReducers: builder => {
        builder.addCase(
            pokemonAdded.pending, state => {
                state.status = "loading"
            }
        )
        .addCase(
            pokemonAdded.fulfilled, (state, action) => {
                state.status = "success"
                state.listOfPokemon.push(action.payload)

            }
        ).addCase(
            pokemonAdded.rejected, state => {
                state.status = "rejected"
            }
        )
    }
})



export const {  pokemonRemoved } = pokemonSlice.actions
export default pokemonSlice.reducer



