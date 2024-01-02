import { useState } from "react"
import { observer } from "mobx-react"
import BusinessDetails from '../businessDetails/BusinessDetails';
import BuisnessShow from '../businessDetails/BuisnessShow';
import ServicesStore from "../../store/ServicesStore";

const BusinessData = (observer(() => {

    const [editForm, setEditForm] = useState(false)

    return (
        <>
            {console.log("ServicesStore.isOpen", ServicesStore.isOpen)}
            {editForm ? <BusinessDetails setEditForm={setEditForm} /> : <BuisnessShow setEditForm={setEditForm} />}

        </>
    )
}))

export default BusinessData
