import { Box, Typography, CircularProgress } from '@mui/material';

const CircularProgressWithLabel = (props) => {
    return (
      <Box sx={{ position: 'absolute', width: '40px', height: '40px', mt: -3, ml: 1, backgroundColor: '#081c22', borderRadius: '50%'}}>
        <CircularProgress variant="determinate" {...props} />
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
          <Typography variant="caption" component="div" color="primary.light">
            { props.value === 0 ? 'NA' : `${props.value}%`}
          </Typography>
        </Box>
      </Box>
    );
}

export default CircularProgressWithLabel;