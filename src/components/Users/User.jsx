import React from 'react'
import styles from './Users.module.css'
import { NavLink } from 'react-router-dom'

const User = (props) => {
    return (
        <div className={styles.user}>
            <div className = {`${styles.userInfo}`}>
                <div className = {`${styles.userPhoto}`}>
                    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3bv8JszbDoNEwTiDI7jBTqIbXLrR0aGYfyjubBavKAd5FYsBq" alt = {'avatar'}/>
                    <div>
                        <span className = {`${styles.userName}`}>{props.name}</span>
                    </div>
                </div>
                <div className = {`${styles.userAbout}`}>
                    <h3>About Me</h3>
                    <div>
                        <span>Email:<br/>{props.email}</span>
                    </div>
                    
                </div>
            </div>
            <NavLink to={`/posts/user/${props.id}`} className = {`${styles.myButton}`}>
                Posts
            </NavLink>
        </div>
    )
}


export default User