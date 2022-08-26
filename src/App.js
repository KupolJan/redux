import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchCountries} from "./Store/Slices/countrySlice";
import Header from "./Components/Header/header";
import Countries from "./Components/Countries/countries";
import {Routes,Route} from "react-router-dom";
import HomePage from "./Pages/HomePage/homePage";
import DonePage from "./Pages/DonePage/donePage";
import WishPage from "./Pages/WishPage/wishPage";
import FavoritePage from "./Pages/FavoritePage/favoritePage";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<HomePage/>}/>
                <Route path={'/visited'} element={<DonePage/>}/>
                <Route path={'/wishes'} element={<WishPage/>}/>
                <Route path={'/favorite'} element={<FavoritePage/>}/>
            </Routes>
        </>
    );
};

export default App;