import { Grid, ToggleButton} from '@mui/material'
import { useState, useContext } from 'react';
import { FilterContext } from '../context-components/FilterContextProvider';


const Genre = (props) => {
    const [selected, setSelected] = useState(false);
    const filterContext = useContext(FilterContext);
    const genre = props.genre;

    const changeFilter = (genreId, isSelected) => {
        console.log(isSelected);
        if(isSelected) {
            filterContext.dispatch({type: 'add-filter', payload: genreId });
        } else {
            filterContext.dispatch({type: 'remove-filter', payload: genreId });
        }
    }

    return(
        <Grid item>
            <ToggleButton 
                color="primary"
                selected={selected}
                onChange={() => {
                    setSelected(!selected);
                    changeFilter(genre.id, !selected);
                }} 
                value={genre.id}
            >
                {genre.name}
            </ToggleButton>
        </Grid>
    );
}

export default Genre;