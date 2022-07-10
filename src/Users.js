import React from 'react'

const Users = ({ users, onSelected }) => {
  return (
    <div>
        {
            users.map((user) => {
                const { id, avatar} = user
                return (
                    <img key={id} src={avatar} alt="avatar"
                        onMouseOver={() => {onSelected(user)}}
                        onMouseOut={() => onSelected(null)}
                    />
                )
            })
        }
    </div>
  )
}

export default Users