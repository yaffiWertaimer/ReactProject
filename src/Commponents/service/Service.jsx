import * as React from 'react';
import { useState,useParams } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MainStore from '../../store/MainStore';
import { observer } from "mobx-react"
import ServicesStore from '../../store/ServicesStore';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ServiceData from './ServiceData';

const Service = (observer((props) => {
  console.log("enter Service");
  const setS=props.setS
  const [formService, setformService] = useState({
    id: " ",
    name: "  ",
    description: " ",
    price: 0,
    duration: 0

  })
  const handleChange = (event) => {
    const { name, value } = event.target;
    setformService({ ...formService, [name]: value })
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    console.log("handle-SubFunc-Service");
    ServicesStore.postService(formService);
    setOpen(false)
    setS(false);

  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (<>
  <br></br>{MainStore.isAdmin?
    <Button onClick={handleOpen}>+</Button>:<ServiceData/>}
    <Modal
      keepMounted
      open={open}
      onClose={handleClose}
    >
      <Box sx={style}>
        <form onSubmit={handleSubmit} >
          <TextField type="text" label="name" name="name" onChange={handleChange} /><br />
          <TextField type="text" label="description" name="description" onChange={handleChange} /><br />
          <TextField type="text" label="price" name="price" onChange={handleChange} /><br />
          <TextField type="text" label="duration" name="duration" onChange={handleChange} /><br />
          <Button type="submit">Save</Button>
        </form>
      </Box>
    </Modal>
    
  </>)
 
}))

export default Service