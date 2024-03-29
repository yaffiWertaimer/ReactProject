import * as React from 'react';
import {  useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import './LogIn.css'
import MainStore from '../../store/MainStore';
import Header from '../Header/Header';
import BasicAlerts from '../errorMessage'
import { observer } from 'mobx-react'



  
const Login = (observer(()=> {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false);
      const handleLogin = ()=> {
        MainStore.saveLogin(name,password);
      }
      const handleClickShowPassword = () => setShowPassword((show) => !show);
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();}
      

  return (<>

  {<>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <InputLabel id="testOpen">wellcome please enter name and password: </InputLabel>
    <TextField id="outlined-basic" label="Name" variant="outlined"  value={name} onChange={(e) => setName(e.target.value)} />
    <br/>
    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined" >
          <InputLabel htmlFor="outlined-adornment-password"  >Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          value={password} onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
              {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
          <br/>
          <Button variant="contained" disableElevation  onClick={handleLogin} >
            Login
            </Button>
        </FormControl>
        <br/>
        
     </Box>
{ MainStore.isError&&<BasicAlerts/>} 
      </>
}
    </> )
}))
    
export default Login

    