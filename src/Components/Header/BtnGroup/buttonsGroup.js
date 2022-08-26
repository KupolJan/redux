import React, {useEffect, useState} from 'react';

import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import UpdateIcon from "@mui/icons-material/Update";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {Button, ButtonGroup, styled, TextField} from "@mui/material";
import {Link, NavLink} from "react-router-dom";

const ButtonsGroup = () => {

    const StyledButtonGroup = styled(ButtonGroup)({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
    })

    const StyledButton = styled(Button)({
        color: "white",
        "&:hover": {
            color: "#e1dddd"
        }
    })


    return (
        <div>
            <StyledButtonGroup sx={{display: {xs: "none", sm: "block"}}}>
                <NavLink style={{textDecoration:"none"}} to="/"><StyledButton endIcon={<HomeIcon/>}>Home</StyledButton></NavLink>
                <NavLink style={{textDecoration:"none"}} to="/visited"><StyledButton endIcon={<FlagIcon/>}>Visited countries</StyledButton></NavLink>
                <NavLink style={{textDecoration:"none"}} to="/wishes"><StyledButton endIcon={<UpdateIcon/>}>want to visit</StyledButton></NavLink>
                <NavLink style={{textDecoration:"none"}} to="/favorite"><StyledButton endIcon={<FavoriteIcon/>}>Favorite Countries</StyledButton></NavLink>
            </StyledButtonGroup>
        </div>
    );
};

export default ButtonsGroup;