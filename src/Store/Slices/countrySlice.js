import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import {v4} from "uuid";
import country from "../../Components/Countries/Country/country";


export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async function(){
        const res = await fetch('https://restcountries.com/v2/all');
        const data = await res.json()
        for (let i = 0; i < data.length; i++) {
            data[i].id = v4()
            data[i].isFavorite = false
        }
        return data
    }
)

const countriesSlice
    = createSlice({
    name: 'countries',
    initialState:{
        countries: [],
        status: null,
        error: null,
    },
    reducers:{
    },
    extraReducers:{
        [fetchCountries.pending]:(state, action) => {
            state.status = 'loading'
        },
        [fetchCountries.fulfilled]:(state, action) => {
            state.status = 'resolved';
            state.countries = action.payload;
        },
        [fetchCountries.rejected]:(state, action) => {},
    }
})

export const {isFav} = countriesSlice.actions
export default countriesSlice.reducer;