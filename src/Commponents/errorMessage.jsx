import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

 const BasicAlerts=()=> {
  return (
    // <h1>error message</h1>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="error">The password or the name is not valid — check it out!</Alert>
  
    </Stack>
  );
}
export default  BasicAlerts;