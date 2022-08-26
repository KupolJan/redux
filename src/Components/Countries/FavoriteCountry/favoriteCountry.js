import React from 'react';
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import UpdateIcon from "@mui/icons-material/Update";
import FlagIcon from "@mui/icons-material/Flag";
import {useDispatch, useSelector} from "react-redux";
import {addFavCountry, deleteFavCountry} from "../../../Store/Slices/favoriteCountrySlice";

const FavoriteCountry = ({country}) => {

    const dispatch = useDispatch()

    const delFavCountry = (id) => {
        dispatch(deleteFavCountry(id))
    }

    return (
        <Card sx={{ maxWidth: 345, position:"relative"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={country.country.flag}
                    alt={country.country.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {country.country.name}
                    </Typography>
                    <Typography sx={{paddingBottom: "50px"}} variant="body2" color="text.secondary">
                        {`The capital of ${country.country.name} is ${country.country.capital}, 
                        population of this country reach ${country.country.population}.`}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions sx={{position:"absolute", bottom:0}}>
                <Button onClick={() => delFavCountry(country.country.id)} size="small"><FavoriteIcon/></Button>
                <Button size="small"><UpdateIcon/></Button>
                <Button size="small"><FlagIcon/></Button>
            </CardActions>
        </Card>
    );
};

export default FavoriteCountry;