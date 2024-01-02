import { observer } from 'mobx-react'
import Card from '@mui/material/Card';

const ShowMeeting = observer(({ props, color }) => {
    return (<>
        <Card>

            <div style={color = { color }}>
                <p>id:{props.id}</p>
                <p>serviceType:{props.serviceType}</p>
                <p>dateTime:{props.dateTime}</p>
                <p>clientName:{props.clientName}</p>
                <p>clientPhone:{props.clientPhone}</p>
                <p>clientEmail:{props.clientEmail}</p>
            </div>
        </Card>
        <br />
    </>)

})


export default ShowMeeting