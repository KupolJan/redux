import React from 'react';
import {AppBar, Toolbar} from "@mui/material";
import ButtonsGroup from "./BtnGroup/buttonsGroup";
import Search from "./Search/search";

const Header = () => {

    return (
        <AppBar style={{position: "sticky"}}>
            <Toolbar sx={{display: "flex", justifyContent: "space-around"}}>
                <ButtonsGroup/>
                <Search/>
            </Toolbar>
        </AppBar>
    );
};

export default Header;