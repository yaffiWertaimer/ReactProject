import { observer } from 'mobx-react'
import Button from '@mui/material/Button';
import ShowDetails from '../businessDetails/BuisnessShow'
import {useNavigate} from 'react-router-dom'

const User = observer(() => {

const navigate=useNavigate();
  return (
    <>
      <ShowDetails/>
<Button
        variant="contained"
        disableElevation
        color="primary" 
        onClick={() => navigate('Header/Header')}
        style={{ marginRight: '8px' }} 
      >
        Enter
      </Button>

      <Button
        variant="contained"
        disableElevation
        style={{ backgroundColor: 'orange', color: '#fff' }}
        onClick={() => navigate('/admin')}
      >
        Login in as admin
      </Button>

    </>
  )
})

export default User