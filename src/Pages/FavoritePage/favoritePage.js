import React from 'react';
import {useSelector} from "react-redux";
import FavoriteCountry from "../../Components/Countries/FavoriteCountry/favoriteCountry";
import {styled} from "@mui/material";
import country from "../../Components/Countries/Country/country";

const FavoritePage = () => {
    const StyledCountryBox = styled('div')({
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        justifyContent: "center",
        padding: "25px 50px"
    })

    const favoriteCountries = useSelector(state => state.favoriteCountry.favoriteCountry)
    const search = useSelector(state => state.search.inputValue)
    const filteredFavCountries = favoriteCountries.filter((country) => country.country.name.toLowerCase().includes(search))

    return (
        <StyledCountryBox>
            {filteredFavCountries.map((country, index) => <FavoriteCountry key={index} country={country}/>)}
        </StyledCountryBox>
    );
};

export default FavoritePage;