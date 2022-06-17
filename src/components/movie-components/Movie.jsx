import { Grid, Card, CardMedia, CardContent, Typography, styled } from '@mui/material';
import CircularProgressWithLabel from './CircularProgressWithLabel';

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const HoverTypography  = styled(Typography)`
    :hover{ 
        color: #1976d2;
        cursor: pointer;
    }
`;

const Movie = (props) => {
    const movie = props.movie;
    const released = new Date(props.movie.release_date);
    const imageUrl = "https://www.themoviedb.org/t/p/w220_and_h330_face";

    return (
        <Grid item xs={5.5} md={3.2} lg={2.4} xl={2} sx={{ ml: 1 }}>
            <Card elevation={3} sx={{ minHeight: '100%', borderRadius: 2 }}>
                <CardMedia component='img' sx={{ borderBottom: 1 }} image={imageUrl + movie.poster_path} alt={ movie.title } />
                <CircularProgressWithLabel value={movie.vote_average * 10}/>
                <CardContent sx={{ mt: 1.5 }}>
                    <HoverTypography align="left" variant="body1"><b>{movie.title}</b></HoverTypography>
                    <Typography align="left" variant="body2" color="rgba(0,0,0,0.6)">{`${months[released.getMonth()]} ${released.getDay()}, ${released.getFullYear()}`}</Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default Movie;