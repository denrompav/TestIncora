import React from 'react'
import styles from './Users.module.css'
import User from './User'

const Users = ({ users }) => {

    const usersList = users.map(user => {
        return <User key = {user.id} {...user} />
    })

    return (
        <div className = {`${styles.container}`}>
            <div className={`${styles.userContainer}`}>
                {usersList}
            </div>
        </div>
    )
}

export default Users