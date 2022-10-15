import React from 'react'
import UserStreams from '../../components/ui/user/user-streams/UserStreams'
import UserWoods from '../../components/ui/user/user-woods/UserWoods'

function UserProfileScreen() {
  return (
    <div>
      <UserWoods/>
      <UserStreams/>
    </div>
  )
}

export default UserProfileScreen