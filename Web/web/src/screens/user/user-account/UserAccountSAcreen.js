import React from 'react'
import Login from '../../../components/ui/account/login/Login'
import Register from '../../../components/ui/account/register/Register'
import '../user-account/UserAccountSAcreen.css'
function UserAccountSAcreen() {
  return (
    <div className='useraccount'>

    <Login/>

    <br></br>
    <Register/>
    </div>
  )
}

export default UserAccountSAcreen