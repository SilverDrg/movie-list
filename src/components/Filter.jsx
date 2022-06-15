import { Card, CardContent, CardActions, Typography, Grid, ToggleButtonGroup } from '@mui/material';
import React, { useState } from 'react';
import Genre from './Genre';

const genresList = [
    {
        id: 1, 
        name: "Action"
    },
    {
        id: 2, 
        name: "Adventure"
    },
    {
        id: 3, 
        name: "Animation"
    }
]

const Filter = () => {
    const [Genres, setGenres] = useState(genresList);

    return (
      <Card elevation={5}>
        <CardContent>
            <Typography variant="h6" align="left" sx={{ m: 1 }}>Filters</Typography>
            <Typography variant="subtitle1" align="left" sx={{ m: 1, borderTop: 1, borderColor: 'primary.light' }}>Genres</Typography>
        </CardContent>
        <CardActions>
            <Grid container spacing={1} direction="row">
                {Genres.map((genre) => (<Genre key={genre.id} genre={genre} />))}
            </Grid>
        </CardActions>
      </Card>
    );
};
  
export default Filter;