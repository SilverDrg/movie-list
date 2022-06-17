import { Card, CardContent, CardActions, Typography, Grid, Button, Box, Collapse, IconButton, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState, useEffect, useContext } from 'react';
import Axios from 'axios';
import Genre from './Genre';
import Constants from '../../constants.json';
import { FilterContext } from '../context-components/FilterContextProvider';
import { MovieContext } from '../context-components/MovieContextProvider';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(270deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const Filter = () => {
    const [genres, setGenres] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const filterContext = useContext(FilterContext);
    const movieContext = useContext(MovieContext);

    const genreUrl = "https://api.themoviedb.org/3/genre/movie/list?api_key=" + Constants.key + "&language=en-US";

    useEffect(() => {
        Axios.get(genreUrl).then((response) => {
            setGenres(response.data.genres);
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

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Box sx={{ width: '260px' }}>
            <Card elevation={5} sx={{ border: 1, borderColor: '#eee', borderRadius: 2 }}>
                <CardContent>
                    <Grid container>
                        <Typography variant="h6" align="left" display="inline-block">
                            Filters
                        </Typography>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            sx={{ marginLeft: 'auto'}}
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </Grid>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent sx={{ pt: 0, pb: 0, borderTop: 1, borderColor: '#eee' }}>
                        <Typography variant="subtitle1" align="left" sx={{ mt: 1 }}>Genres</Typography>
                    </CardContent>
                    <CardActions sx={{ m: 1, mt: 0 }}>
                        <Grid container spacing={1} direction="row">
                            {genres !== null ? genres.map((genre) => (<Genre key={genre.id} genre={genre} />)) : ""}
                        </Grid>
                    </CardActions>
                </Collapse>
            </Card>
            <Button variant="contained" fullWidth={true} startIcon={ <SearchIcon/> } onClick={SearchMovies} sx={{ mt: 1, borderRadius: 3 }}>Search</Button>
        </Box>
    );
};
  
export default Filter;