import { Grid, ToggleButton, styled} from '@mui/material'
import { useState, useContext } from 'react';
import { FilterContext } from '../context-components/FilterContextProvider';

const MuiToggleButton = styled(ToggleButton)(({ selectedColor }) => ({
    "&.Mui-selected, &.Mui-selected:hover": {
      color: "white",
      backgroundColor: selectedColor
    }
  }));


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
            <MuiToggleButton 
                color="primary"
                selected={selected}
                selectedColor="#1976d2"
                onChange={() => {
                    setSelected(!selected);
                    changeFilter(genre.id, !selected);
                }} 
                value={genre.id}
                size='small'
                sx={{ borderRadius: 3 }}
            >
                {genre.name}
            </MuiToggleButton>
        </Grid>
    );
}

export default Genre;