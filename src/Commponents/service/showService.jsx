
 import { observer } from 'mobx-react';

import { Box, Typography } from '@mui/material';
import ServicesStore from '../../store/ServicesStore'
 const ShowService = observer(({props}) => {
  const customBorderStyle = {
    border: '2px solid #e0e0e0', // Set the color and width of the border
  };

    return (<>
     <Box boxShadow={3} p={3} maxWidth={400} mx="auto" mt={3} style={customBorderStyle}>
     <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Bampi, sans-serif' }}>
        Name: {props.name}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Bampi, sans-serif' }}>

        Description: {props.description}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Bampi, sans-serif' }}>

        Price: {props.price}
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ fontFamily: 'Bampi, sans-serif' }}>

        Duration: {props.duration}
      </Typography>
    </Box>
   
</>)

 })
export default ShowService;