import {configureStore} from "@reduxjs/toolkit";
import searchSlice from "./Slices/searchSlice";
import countriesSlice from "./Slices/countrySlice";
import favoriteCountrySlice from "./Slices/favoriteCountrySlice";

export default configureStore({
    reducer:{
        search: searchSlice,
        country: countriesSlice,
        favoriteCountry: favoriteCountrySlice,
    }
})