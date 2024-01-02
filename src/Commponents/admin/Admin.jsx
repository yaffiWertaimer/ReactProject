
import MainStore from '../../store/MainStore'
import Header from '../Header/Header'
import LogIn from '../logIn/LogIn'
import { observer } from 'mobx-react';

const Admin = (observer(() => {

  return (
    <>
      {console.log("is login", MainStore.isLogin)}
      {!MainStore.isLogin ? <LogIn></LogIn> : <Header></Header>}

    </>
  )

}
))

export default Admin
