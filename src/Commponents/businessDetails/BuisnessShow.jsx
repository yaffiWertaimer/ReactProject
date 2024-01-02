import Details from '../../store/Details'
import { observer } from 'mobx-react';
import { Button } from '@mui/material';
import MainStore from '../../store/MainStore';
import { Box, Typography } from '@mui/material';

const ShowDetails = observer(({ setEditForm }) => {

   
    const handleClick = async (e) => {

        Details.setIsEdit(true)
        setEditForm(!editForm)
       

    }

    return (<>
        <Box boxShadow={3}
            p={3}
            maxWidth={400}
            mx="auto"
            mt={3}
      
        >
            <Typography variant="body1" gutterBottom>
                שם העסק: {Details.details.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
                כתובת: {Details.details.address}
            </Typography>
            <Typography variant="body1" gutterBottom>
                בעל העסק: {Details.details.owner}
            </Typography>
            <Typography variant="body1" gutterBottom>
                טלפון: {Details.details.phone}
            </Typography>
            <Typography variant="body1" gutterBottom>
                תאור: {Details.details.description}
            </Typography>
            <img src={Details.details.logo} alt="logo" />
        </Box>
        {MainStore.isLogin && (
            <Button
                variant="contained"
                disableElevation
                color="primary"
                onClick={() => {
                    handleClick(); 
                }}
                style={{ marginRight: '8px' }}
            >
                עריכה
            </Button>
        )}

    </>)
})

export default ShowDetails;