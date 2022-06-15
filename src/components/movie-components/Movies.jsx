import React, { useState, useEffect, useContext } from 'react';
import { Grid, Box } from '@mui/material';
import { MovieContext } from '../context-components/MovieContextProvider';
import Axios from 'axios';
import Movie from './Movie';
import Constants from '../../constants.json';

const Movies = () => {
    const [Movies, setMovies] = useState([]);
    const movieContext = useContext(MovieContext);

    useEffect(() => {
        console.log("movies url")
        console.log(movieContext.movies)
        Axios.get(movieContext.movies).then((response) => {
            setMovies(response.data.results);
        });
    }, [movieContext]);

    return (
      <Box component="main" maxWidth="xs">
        <Grid container spacing={10} justifyContent="center" alignItems="stretch" direction="row">
          {Movies.map((movie) => (<Movie key={movie.id} movie={movie}/>))}
        </Grid>
      </Box>
    )
  }
  
  export default Movies;