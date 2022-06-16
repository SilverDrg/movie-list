import React, { useState, useEffect, useContext, useCallback } from 'react';
import { Grid, Box, Button } from '@mui/material';
import { MovieContext } from '../context-components/MovieContextProvider';
import Axios from 'axios';
import Movie from './Movie';

const Movies = () => {
    const [Movies, setMovies] = useState([]);
    const [Page, setPage] = useState(2);
    const [InfiniteLoad, setInfiniteLoad] = useState(false);
    const movieContext = useContext(MovieContext);

    const LoadMore = useCallback(() => {
      let moviesUrl = movieContext.movies;
      let newUrl = "";
      moviesUrl.split("&").map((text) => {
        if(text.includes("page=")) {
          text = text.slice(0, -1) + Page;
          setPage(Page+1);
        }
        newUrl += text+"&";
        return text;
      })
      newUrl = newUrl.slice(0, -1);

      console.log(newUrl);
      Axios.get(newUrl).then((response) => {
        setMovies([...Movies, ...response.data.results]);
        setInfiniteLoad(true);
      });
    }, [Page, Movies, movieContext.movies]);

    useEffect(() => {
      Axios.get(movieContext.movies).then((response) => {
          setMovies(response.data.results);
      });
    }, [movieContext]);

    useEffect(() => {
      const ScrollLoad = (event) => {
        const bottom = event.target.scrollingElement.clientHeight + event.target.scrollingElement.scrollTop >= event.target.scrollingElement.scrollHeight - 5;
        console.log(InfiniteLoad);
        if(bottom && InfiniteLoad){
            LoadMore();
        }
      };

      window.addEventListener('scroll', ScrollLoad);

      return () => {
        window.removeEventListener('scroll', ScrollLoad);
      };
    }, [InfiniteLoad, LoadMore]);

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