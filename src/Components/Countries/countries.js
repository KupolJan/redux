import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Country from "./Country/country";
import {styled} from "@mui/material";
import {fetchCountries} from "../../Store/Slices/countrySlice";


const Countries = () => {
    const StyledCountryBox = styled('div')({
        display: "flex",
        flexWrap: "wrap",
        gap: "50px",
        justifyContent: "center",
        padding: "25px 50px"
    })

    const countries = useSelector((state) => state.country.countries)
    const search = useSelector((state) => state.search.inputValue)
    const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(search))

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchCountries())
    },[])

    console.log(countries)

    return (
        <StyledCountryBox>
            {filteredCountries.map((country,index) => <Country key={index} country={country}/>)}
        </StyledCountryBox>
    );
};

export default Countries;