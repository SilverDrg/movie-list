import { CssBaseline, Box, Grid } from '@mui/material';
import { NavBar, Filter, Movies } from './components';
import { FilterContextProvider, MovieContextProvider } from './components';
import './App.css';

function App() {
  return (
    <FilterContextProvider>
      <MovieContextProvider>
        <div className="App">
          <CssBaseline/>
          <Box>
            <NavBar/>
            <Grid container spacing={1} justifyContent="center" xs={12} sx={{ mt: 3 }}>
              <Grid item container justifyContent="flex-start" xs={12} md={10}>
                <Grid item xs={4} md={2} lg={2.5} sx={{ mt: 1, mr: 1, minWidth: '260px', width: '260px' }}>
                  <Filter />
                </Grid>
                <Grid item xs={3} md={6} lg={8.5} xl={9} sx={{ mt: 1 }}>
                  <Movies />
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </div>
      </MovieContextProvider>
    </FilterContextProvider>
  );
}

export default App;
