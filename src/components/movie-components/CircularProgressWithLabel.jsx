import { Box, Typography, CircularProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff00',
    },
    secondary: {
      main: '#616161',
    },
  },
});

const shadowTheme = createTheme({
  palette: {
    primary: {
      main: '#606d00',
    },
    secondary: {
      main: '#616161',
    },
    success: {
      main: '#004000',
    },
    error: {
      main: '#510000'
    }
  },
});

const CircularProgressWithLabel = (props) => {
  const [ProgressColor, setProgressColor] = useState('primary');

  useEffect(() => {
    if (props.value <= 0) {
      setProgressColor('secondary')
    } else if(props.value < 40) {
      setProgressColor('error')
    } else if (props.value >= 40 && props.value < 70) {
      setProgressColor('primary')
    } else {
      setProgressColor('success')
    }
  }, [ProgressColor, props.value]);  

    return (
        <Box sx={{ position: 'absolute', width: '44px', height: '44px', mt: -3, ml: 1, backgroundColor: '#081c22', borderRadius: '50%'}}>
          <ThemeProvider theme={shadowTheme}>
            <CircularProgress variant="determinate" thickness={2.5} color={ProgressColor} value={100} sx={{ position: 'absolute', top: 2, ml: -2.5 }}/>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <CircularProgress variant="determinate" thickness={2.5} color={ProgressColor} {...props} sx={{ position: 'absolute', top: 2, ml: -2.5 }}/>
          </ThemeProvider>
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Typography variant="button" component="div" color="white">
              <b>
                { props.value === 0 ? 'NA' : `${props.value}`}
              </b>
              <Typography variant="caption" sx={{ fontSize: '9px' }}>{ props.value === 0 ? '' : <sup>%</sup> } </Typography>
            </Typography>
          </Box>
        </Box>
    );
}

export default CircularProgressWithLabel;