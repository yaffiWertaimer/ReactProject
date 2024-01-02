import FormState from '../businessDetails/BusinessDetails'
import ShowDetails from '../businessDetails/BuisnessShow'
import Details from '../../store/Details'
import { observer } from 'mobx-react'
import Service from '../service/Service'
import Meeting from '../meeting/Meeting'
import { useEffect, useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Header = observer(() => {
    const [value, setValue] = useState(0);
    const [s, setS] = useState(false);
    const [m, setM] = useState(false);

    useEffect(() => { console.log("header") }, [])
    function handleClickService() {
        console.log("handleClickService");
        setS(true)
        setM(false)
    }
    function handleClickMeeting() {
        setM(true)
        setS(false)
    }
    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (<div>
      
        {Details.isEdit ? <FormState /> : <ShowDetails />}

        <br />
        <Tabs value={value} onChange={handleChange}>
            <Tab label="Service" onClick={handleClickService} />
            <Tab label="Meeting" onClick={handleClickMeeting} />
        </Tabs>

        {value === 0 && s && <Service />}
        {value === 1 && m && <Meeting />}
       
    </div>)
}
)

export default Header;