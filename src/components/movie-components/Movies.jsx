import React, { useState, useEffect, useContext } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { MovieContext } from '../context-components/MovieContextProvider';
import Axios from 'axios';
import Movie from './Movie';

const Movies = () => {
    const [Movies, setMovies] = useState([]);
    const [Page, setPage] = useState(2);
    const movieContext = useContext(MovieContext);

    useEffect(() => {
        console.log("movies url")
        console.log(movieContext.movies)
        Axios.get(movieContext.movies).then((response) => {
            setMovies(response.data.results);
        });
    }, [movieContext]);

    const LoadMore = () => {
      let moviesUrl = movieContext.movies;
      let newUrl = "";
      moviesUrl.split("&").map((text) => {
        if(text.includes("page=")) {
          text = text.slice(0, -1) + Page;
          setPage(Page+1);
          console.log("changed page: " + text);
        }
        newUrl += text+"&";
        return text;
      })
      newUrl = newUrl.slice(0, -1);
      console.log(newUrl);
      Axios.get(newUrl).then((response) => {
        setMovies([...Movies, ...response.data.results]);
      });
    }

    return (
      <Box component="main" maxWidth="xs">
        <Grid container spacing={10} justifyContent="center" alignItems="stretch" direction="row">
          {Movies.map((movie) => (<Movie key={movie.id} movie={movie}/>))}
        </Grid>
        { Movies.length < 20 ? "" : <Button variant="contained" fullWidth="true" onClick={LoadMore} sx={{ mt: 2, mb: 1 }}>Load more</Button> }
      </Box>
    )
  }
  
  export default Movies;