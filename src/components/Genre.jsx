import { Grid, ToggleButton} from '@mui/material'
import { useState } from 'react';


const Genre = (props) => {
    const [selected, setSelected] = useState(false);
    const genre = props.genre;

    return(
        <Grid item>
            <ToggleButton 
                color="primary"
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                }} 
                value={genre.id}
            >
                {genre.name}
            </ToggleButton>
        </Grid>
    );
}

export default Genre;