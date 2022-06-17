import { Grid, Card, CardMedia, CardContent, Typography, styled } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const HoverTypography  = styled(Typography)`
    :hover{ 
        color: #1976d2;
        cursor: pointer;
    }
`;

const Movie = (props) => {
    const movie = props.movie;
    const imageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    return (
        <Grid item xs={6} md={3.8} lg={2.4} xl={2} sx={{ ml: 1 }}>
            <Card elevation={3} sx={{ minWidth: '180px', minHeight: '100%', borderRadius: 2 }}>
                <CardMedia component='img' sx={{ minWidth: '180px', minHeight: '270px', borderBottom: 1 }} image={imageUrl + movie.poster_path} alt={ movie.title } />
                <CircularProgressWithLabel value={movie.vote_average * 10}/>
                <CardContent>
                    <HoverTypography align="left" variant="body1"><b>{movie.title}</b></HoverTypography>
                    <Typography align="left" variant="body2">{movie.release_date}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Movie;