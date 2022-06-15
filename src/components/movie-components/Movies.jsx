import React, { useState, useEffect, useContext } from 'react';
import { Grid, Box } from '@mui/material';
import { FilterContext } from '../context-components/FilterContextProvider';
import Axios from 'axios';
import Movie from './Movie';
import Constants from '../../constants.json';

const Movies = () => {
    const [Movies, setMovies] = useState(null);
    const filterContext = useContext(FilterContext);

    let moviesUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + Constants.key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate";
    if(filterContext.filters.category) {
        let newUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" + Constants.key + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=";
        filterContext.filters.category.forEach((genre) => {
            newUrl += genre + "%2C";
        });
        moviesUrl = newUrl.slice(0, -3);
        moviesUrl += "&with_watch_monetization_types=flatrate";
    }

    useEffect(() => {
        Axios.get(moviesUrl).then((response) => {
            setMovies(response.data.results);
            console.log(response.data.genres);
        });
    }, []);

    return (
      <Box component="main" maxWidth="xs">
        <Grid container spacing={10} justifyContent="center" alignItems="stretch" direction="row">
          {Movies.map((movie) => (<Movie key={movie.id} movie={movie}/>))}
        </Grid>
      </Box>
    )
  }
  
  export default Movies;