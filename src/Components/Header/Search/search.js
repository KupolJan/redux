import React from 'react';
import {InputBase, styled} from "@mui/material";
import {useDispatch} from "react-redux";
import {setInputValue} from "../../../Store/Slices/searchSlice";

const Search = () => {

    const dispatch = useDispatch();

    const Input = styled(InputBase)({
        outline: "none",
        padding: "5px 10px",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        backgroundColor: "white",
        width: "300px",
    })

    return (
        <Input placeholder="Search here..." onChange={(e) => dispatch(setInputValue(e.target.value))} />
    );
};

export default Search;