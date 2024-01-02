import { useEffect } from 'react';

import './App.css'
import MainStore from './store/MainStore';
import Details from './store/Details';
import ServicesStore from './store/ServicesStore';
import MeetingStore from './store/MeetingStore';
// import Admin from './Commponents/admin/Admin'
// import BusinessDetails from './Commponents/businessDetails/BusinessDetails'
// import Service from './Commponents/service/Service'

function App() {

  //????????לא מצליח????????????????
  ///כשבעל עסק מכניס את פרטיו , הפרטים ישארו אף כשירפרשו 
  useEffect(()=>{
     ServicesStore.initService();
    MeetingStore.initMeeting();
},[])

//האם צריך לקרוא כאן למישהו
//?????????

  return (
    <>
{/* <Admin></Admin> */}
{/* <BusinessDetails></BusinessDetails> */}
{/* <div>apppppppp</div> */}
{/* <Service></Service> */}

    </>
  )
}

export default App
