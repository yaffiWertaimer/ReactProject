import { observable, makeObservable, action } from 'mobx';

 class MainStore {


  count=0;
  isLogin = false;
  isStatus = 401;
  isError=false;
  isAdmin=false;
  constructor() {
    makeObservable(this, {
      isLogin: observable,
      isStatus: observable,
      isError:observable,
      isAdmin:observable,
     // count:observable,
      setIsError:action,
      setIsAdmin:action,
      setIsLogin: action,
      setisStatus: action,
      saveLogin: action,
     // setCount:action
    })
  }

  setIsAdmin = (val) => {
    this.isAdmin = val;
  }
  setIsLogin = (val) => {
    this.isLogin = val;
  }
  setisStatus = (val) => {
    this.isStatus = val;
  }
  setIsError = (val) => {
    this.isError = val;
  }

  saveLogin = async (name, password) => {
    console.log("enter save Login")
    console.log(name,password)
    const response = await fetch("http://localhost:8787/login", {
        method: "POST",
        
        body: JSON.stringify({
          name, password
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.statusText)
    if (response.status === 200) {
      this.isLogin = true;
      this.isAdmin=true;
      { console.log(this.isLogin) }
      this.isStatus = 200;
      { console.log("status=200") }


    }
    else {
      this.isStatus = 401;
      this.isError=true;
      { console.log("status=401") }
    }

  }
 
}

export default new MainStore();