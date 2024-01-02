import { observer } from 'mobx-react'
import MeetingStore from '../../store/MeetingStore'
import ShowMeeting from '../meeting/meetingShow'
import NewMeeting from '../meeting/newMeeting'
import { useEffect } from 'react';
import MainStore from '../../store/MainStore';
import ServicesStore from '../../store/ServicesStore';

const Meeting = (observer(() => {
  useEffect(() => {

    MeetingStore.initMeeting()
  }, [])
  function getWeekBeforDate(date) {
    const myDate = new Date(date);
    return new Date(
      myDate.getFullYear(),
      myDate.getMonth(),
      myDate.getDate() - 7,
    );
  }

  ServicesStore.setNewService(false);

  return (
    <>
      <br></br>

      {console.log("MeetingStore.meetings", MeetingStore.meetings)}
      {MainStore.isAdmin && Array.isArray(MeetingStore.meetings) && MeetingStore.meetings?.map(index => <ShowMeeting props={index} color={new Date(index.dateTime) - 24 <= new Date() ? "red" : getWeekBeforDate(index.dateTime) <= new Date() ? "orange" : "green"} key={index.id} />)}
      {!MainStore.isAdmin && <NewMeeting />}

    </>
  )
}))


export default Meeting