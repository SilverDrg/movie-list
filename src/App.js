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
            <Grid container spacing={1} justifyContent="center" sx={{ mt: 3, ml: 'auto' }}>
              <Grid item container justifyContent="flex-start" xs={12} md={11} lg={10} xl={9}>
                <Grid item xs={'auto'} md={'auto'} lg={'auto'} sx={{ mt: 1, mr: 1, minWidth: '260px', width: '260px' }}>
                  <Filter />
                </Grid>
                <Grid item xs={8} md={8} lg={8.5} xl={9} sx={{ mt: 1 }}>
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
