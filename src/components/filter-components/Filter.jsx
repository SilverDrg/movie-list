import { Card, CardContent, CardActions, Typography, Grid, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import Genre from './Genre';
import Constants from '../../constants.json';
import { FilterContext } from '../context-components/FilterContextProvider';
import { MovieContext } from '../context-components/MovieContextProvider';

const Filter = () => {
    const [Genres, setGenres] = useState(null);
    const filterContext = useContext(FilterContext);
    const movieContext = useContext(MovieContext);

    const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + Constants.key + "&language=en-US";

    useEffect(() => {
        Axios.get(genreUrl).then((response) => {
            setGenres(response.data.genres);
            console.log(response.data.genres);
        });
    }, [genreUrl]);

    const SearchMovies = () => {
        let moviesUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + Constants.key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
        if(filterContext.filters.category) {
            let newUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + Constants.key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=";
            filterContext.filters.category.forEach((genre) => {
                newUrl += genre + "%2C";
            });
            moviesUrl = newUrl.slice(0, -3);
            moviesUrl += "&with_watch_monetization_types=flatrate";
        }

        movieContext.dispatch({type: 'search', payload: moviesUrl });
    }

    return (
      <Card elevation={5} sx={{ mr: 2, ml: 1 }}>
        <CardContent>
            <Typography variant="h6" align="left" sx={{ m: 1 }}>Filters</Typography>
            <Typography variant="subtitle1" align="left" sx={{ m: 1, borderTop: 1, borderColor: 'primary.light' }}>Genres</Typography>
            <Typography variant="subtitle2" align="left" sx={{ m: 1, borderTop: 1, borderColor: 'primary.light' }}>Filters - {filterContext.filters.category}</Typography>
        </CardContent>
        <CardActions sx={{ m: 1, borderBottom: 1, borderColor: 'primary.light' }}>
            <Grid container spacing={1} direction="row">
                {Genres !== null ? Genres.map((genre) => (<Genre key={genre.id} genre={genre} />)) : ""}
            </Grid>
        </CardActions>
        <CardActions>
            <Button variant="contained" fullWidth="true" startIcon={ <SearchIcon/> } onClick={SearchMovies}>Search</Button>
        </CardActions>
      </Card>
    );
};
  
export default Filter;