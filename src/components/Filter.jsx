import { Card, CardContent, CardActions, Typography, Grid} from '@mui/material';
import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import Genre from './Genre';
import Constants from '../constants.json';
import { FilterContext } from './FilterContextProvider';

const Filter = () => {
    const [Genres, setGenres] = useState(null);
    const filterContext = useContext(FilterContext);

    const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + Constants.key + "&language=en-US";

    useEffect(() => {
        console.log("getting genres");
        Axios.get(genreUrl).then((response) => {
            setGenres(response.data.genres);
            console.log(response.data.genres);
        });
    }, []);

    return (
      <Card elevation={5} sx={{ mr: 2 }}>
        <CardContent>
            <Typography variant="h6" align="left" sx={{ m: 1 }}>Filters</Typography>
            <Typography variant="subtitle1" align="left" sx={{ m: 1, borderTop: 1, borderColor: 'primary.light' }}>Genres</Typography>
            <Typography variant="subtitle2" align="left" sx={{ m: 1, borderTop: 1, borderColor: 'primary.light' }}>Filters - {filterContext.filters.category}</Typography>
        </CardContent>
        <CardActions>
            <Grid container spacing={1} direction="row">
                {Genres !== null ? Genres.map((genre) => (<Genre key={genre.id} genre={genre} />)) : ""}
            </Grid>
        </CardActions>
      </Card>
    );
};
  
export default Filter;