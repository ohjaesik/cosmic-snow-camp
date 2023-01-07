import React from 'react'

function User({user}) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  )
}

function UserList() {
  const users = [
    {
      id:1,
      username: 'v',
      email:'1@gmail.com'
    },
    {
      id:2,
      username: 't',
      email:'2@gmail.com'
    },
    {
      id:3,
      username: 'l',
      email:'3@gmail.com'
    }
  ]

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  )
}
export default UserList