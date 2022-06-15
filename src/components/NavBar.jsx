import React from 'react';
import { AppBar, Typography } from '@mui/material';

const NavBar = () => {
    return (
        <AppBar position="sticky" sx={{ background: "#0073e6" }}>
            <Typography variant="h3" sx={{ marginRight: 'auto', marginLeft: '5%' }}>MovieList</Typography>
        </AppBar>
    );
};
  
export default NavBar;