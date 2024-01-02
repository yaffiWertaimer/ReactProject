import { observable, makeObservable, action } from 'mobx';

class Details {
 
    

  details = {
    name: "Coding Academy",
    address: "Rothschild 60 Tel Aviv",
    phone: "03-1234567",
    owner: "Yariv Katz",
    Img: "https://coding-academy.org/images/ca_logo.png",
    description: "The best coding academy in the world",
    // name: "  ",
    // address: " ",
    // phone: " ",
    // owner: " ",
    // logo: " ",
    // description: " "
  }
  isEdit = false;
  
  constructor() {
    makeObservable(this, {
      isEdit: observable,
     
      
      setIsEdit: action,
      details: observable,
      postDetails: action,
      setDetails: action,
      //getDetails: action
    })
  };
  setIsEdit = (val) => {
    this.isEdit = val;
  }
 
  postDetails = async (formData) => {
    fetch("http://localhost:8787/businessData", {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
    }).catch((error) => {
      console.log(error);
    })
    this.details = formData

  };
    setDetails = async () => {
      const response = fetch("http://localhost:8787/businessData");
      const data = (await response).json();
      this.details = data;
    }
 
  
}
export default new Details();