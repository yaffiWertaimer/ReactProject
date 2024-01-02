import { observer } from "mobx-react"
import MeetingStore from "../../store/MeetingStore";
import { useEffect, useState } from 'react'
import MyDatePicker from "./MyDatePicker";
import ServicesStore from "../../store/ServicesStore";
import * as React from 'react';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import MenuItem from '@mui/material/MenuItem';

const NewMeeting = (observer(() => {
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
    const [openError, setOpenError] =useState(false);
    const [openSuccsess, setOpenSuccsess] =useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));
    const [formMeeting, setformMeeting] = useState({
        serviceType: " ",
        dateTime: dayjs('2022-04-17T15:30'),
        clientName: " ",
        clientPhone: " ",
        clientEmail: " "

    })
    const handleChange = (event) => {
        const { name, value } = event.target;
        setformMeeting({ ...formMeeting, [name]: value })
    }
    const handleSubmit = (event) => {     
        event.preventDefault();
        MeetingStore.addMeeting(formMeeting)
        if (MeetingStore.isAdd) {
            setOpen(false)
            setOpenSuccsess(true)
            setOpenError(false);
            e.target.reset();
            console.log("isAdd",MeetingStore.isAdd)
        }
        else{
            setOpenError(true);
            setOpenSuccsess(false);
            console.log("isAdd",MeetingStore.isAdd)
        }

        setOpen(false)
    }
    return (<>
    {console.log("arr meetings:",ServicesStore.servicesArr )}
    <Snackbar open={openError} autoHideDuration={6000} onClose={()=>setOpenError(false)}>
            <Alert onClose={()=>setOpenError(false)} severity="error" sx={{ width: '100%' }}>
             change the date!
            </Alert>
          </Snackbar>
          <Snackbar open={openSuccsess} autoHideDuration={6000} onClose={()=>setOpenSuccsess(false)}>
            <Alert onClose={()=>setOpenSuccsess(false)} severity="success" sx={{ width: '100%' }}>
           Added!
            </Alert>
          </Snackbar>
        <Button onClick={handleOpen}>To make an appointment</Button>
        <Modal
            keepMounted
            open={open}
            onClose={handleClose}
        >
            <Box sx={style}>
                <form onSubmit={handleSubmit} >
                <Select
                                labelId="demo-simple-select-label"
                                label="serviceType"
                                id="serviceType"
                                fullWidth
                                onChange={handleChange}
                            >
                                {ServicesStore.servicesArr.map((service, index) => (
                                    <MenuItem key={index} value={service?.name} id="serviceName">
                                        {service?.name}
                                    </MenuItem>
                                ))}
                            </Select>
       
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateTimePicker', 'DateTimePicker']}>

                            <DateTimePicker
                                label="dateTime"
                                value={value}
                                name="dateTime"
                                onChange={(newValue)=>setformMeeting({ ...formMeeting, ['dateTime']: newValue })}
                            />
                        </DemoContainer>
                    </LocalizationProvider>
                    <TextField type="text" label="clientName" name="clientName" onChange={handleChange} /><br />
                    <TextField type="text" label="clientPhone" name="clientPhone" onChange={handleChange} /><br />
                    <TextField type="text" label="clientEmail" name="clientEmail" onChange={handleChange} /><br />
                    <Button type="submit">Save</Button>
                </form>
            </Box>
        </Modal>
        <br />
        
    </>)

}))
export default NewMeeting;