import ServicesStore from "../../store/ServicesStore"
import { observer } from "mobx-react"
import { useEffect } from 'react';
import ShowService from '../service/showService'
import Service from '../service/Service'
import MainStore from "../../store/MainStore";

const ServiceData = (observer(() => {

    useEffect(() => {

        ServicesStore.initService()
    }, [])

    return (<>
        {console.log("ServicesStore.servicesArr", ServicesStore.servicesArr)}
        {ServicesStore.servicesArr?.map(index => <ShowService props={index} key={index.id} />)}
        {console.log("isAdmin", MainStore.isAdmin)}
        {MainStore.isAdmin && <Service />}
    </>)

}))
export default ServiceData;