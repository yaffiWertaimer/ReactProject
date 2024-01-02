import { observable, makeObservable, action, runInAction } from 'mobx';

class MeetingStore {
    meetings = [
        // {
        //     id: "758",
        //     serviceType: "123",
        //     dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
        //     clientName: "אבי כהן",
        //     clientPhone: "050-1234567",
        //     clientEmail: "m@m.com",
        // }
    ];
    isAdd = false;
    meetingTypes = [];
    constructor() {
        makeObservable(this, {
            meetings: observable,
            isAdd:observable,

            meetingTypes: observable,
            addMeeting: action,
            initMeeting: action,
            setIsAdd:action


        });
    }
    setIsAdd = (val) => {
        this.isAdd = val;
    }
    addMeeting = async (meeting) => {
        const response = await fetch("http://localhost:8787/appointment", {
            method: 'POST',
            body: JSON.stringify(meeting),
            headers: { 'Content-Type': 'application/json' },

        }).then((result) => {
            console.log(meeting);
            if (result.status === 200)
            {
                   this.meetings.push(meeting);
                   t=  meeting.serviceType;
                   if(!this.meetingTypes.contain(t))
                   this.meetingTypes.push(t)
            }     
            let meetingsArray = Object.values(this.meetings);

            this.meetings.sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime));
            
        }).catch((result1) =>
            console.log("failed"));

    }
    initMeeting = async () => {
        console.log("initMeeting")
        const response = await fetch("http://localhost:8787/appointments");
        this.meetings = await response.json();
        //    this.meetings.sort((x, y) => new Date(x.dateTime) - new Date(y.dateTime));
        let meetingsArray = Object.values(this.meetings);
        meetingsArray.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));
        this.meetings = meetingsArray
        console.log("meetings", this.meetings)
    }

}

export default new MeetingStore();