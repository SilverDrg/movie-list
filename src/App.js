import { CssBaseline, Box, Grid } from '@mui/material';
import { NavBar, Filter, Movies } from './components';
import FilterContextProvider from './components/context-components/FilterContextProvider';
import './App.css';

function App() {
  return (
    <FilterContextProvider>
      <div className="App">
        <CssBaseline/>
        <Box>
          <NavBar/>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 3 }}>
            <Grid item container xs={12} md={10}>
              <Grid item xs={4} md={3} lg={2.5} xl={2} sx={{ mt: 1 }}>
                <Filter />
              </Grid>
              <Grid item xs={4} md={6} lg={8} xl={8} sx={{ mt: 1 }}>
                <Movies />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </div>
    </FilterContextProvider>
  );
}

export default App;
