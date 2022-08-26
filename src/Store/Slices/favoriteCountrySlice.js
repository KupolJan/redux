import {createSlice} from "@reduxjs/toolkit";
import country from "../../Components/Countries/Country/country";

export const favoriteCountrySlice = createSlice({
    name:"favoriteCountry",
    initialState:{
        favoriteCountry:[],
    },
    reducers:{
        addFavCountry:(state, action) =>{
            state.favoriteCountry.push(action.payload)
        },
        deleteFavCountry:(state,action) => {
            state.favoriteCountry = state.favoriteCountry.filter(country => country.country.id !== action.payload)
        },
    }
})

export const {addFavCountry,deleteFavCountry, deleteLastFavCountry} = favoriteCountrySlice.actions
export default favoriteCountrySlice.reducer