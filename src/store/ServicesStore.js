import { observable, makeObservable, action } from 'mobx';

class servicesStore {

    newService = false;
    isNewMeeting = false;
    isOpen=true;
    service = {
        // id: "11",
        name: "פגישת ייעוץ פרונטלית",
        description: "פגישת ייעוץ פרטנית בקליניקה",
        price: 500,
        duration: 60,
    };
    servicesArr = [ ];
    constructor() {
        makeObservable(this, {
            service: observable,
            isOpen:observable,
            newService: observable,
            isNewMeeting: observable,
            setIsOpen:action,
            setIsNewMeeting: action,
            setNewService: action,
            postService: action,
            initService: action,
            servicesArr: observable
        })
    }
    setIsOpen = (val) => {
        this.isOpen = val;
      }
    setNewService = (val) => {
        this.newService = val;
    }
    setIsNewMeeting = (val) => {
        this.isNewMeeting = val;
    }
    postService = async (formService) => {
        console.log("formService", formService);

        const response = await fetch("http://localhost:8787/service", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formService),

        }).then((res) => {
            console.log(res);
            if (res.status == 200)
                this.servicesArr.push(formService)
            console.log("servicesArr", this.servicesArr);

        }).catch((error) => {
            console.log(error);
        })
    }

    initService = async () => {
        const response = await fetch("http://localhost:8787/services");
        const dataj = await response.json();
        this.servicesArr = dataj;
        console.log("res", response)
    }
}

export default new servicesStore();