import { Box, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const Movie = (props) => {
    const movie = props.movie;
    const imageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    console.log(movie);

    return (
        <Grid item xs={12} md={6} lg={3} xl={2}>
            <Card elevation={3} sx={{ minWidth: '180px', minHeight: '100%' }}>
                <CardMedia component='img' sx={{ minWidth: '180px', minHeight: '270px', borderBottom: 1 }} image={imageUrl + movie.poster_path} alt={ movie.title } />
                <CircularProgressWithLabel value={movie.vote_average * 10}/>
                <CardContent >
                    <Typography align="left" variant="body1"><b>{movie.title}</b></Typography>
                    <Typography align="left" variant="body2">{movie.release_date}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Movie;