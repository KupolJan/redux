import React, {useEffect, useState} from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, styled, Typography} from "@mui/material";

import FlagIcon from "@mui/icons-material/Flag";
import UpdateIcon from "@mui/icons-material/Update";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {addFavCountry, deleteFavCountry} from "../../../Store/Slices/favoriteCountrySlice";
import {useDispatch} from "react-redux";

const Country = ({country}) => {

    const [favorite, setFavorite] = useState(false)

    const dispatch = useDispatch()

    const handleClickFavIcon = () => {
        setFavorite(!favorite)

        const fav = {
            country: country,
        }

        if (favorite === false){
            dispatch(addFavCountry(fav))
        }else {
            dispatch(deleteFavCountry(fav.country.id))
        }

    }

    return (
        <Card sx={{ maxWidth: 345, position:"relative"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={country.flag}
                    alt={country.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {country.name}
                    </Typography>
                    <Typography sx={{paddingBottom: "50px"}} variant="body2" color="text.secondary">
                        {`The capital of ${country.name} is ${country.capital}, 
                        population of this country reach ${country.population}.`}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{position:"absolute", bottom:0}}>
                <Button onClick={() => handleClickFavIcon()} size="small"><FavoriteIcon/></Button>
                <Button size="small"><UpdateIcon/></Button>
                <Button size="small"><FlagIcon/></Button>
            </CardActions>
        </Card>
    );
};

export default Country;