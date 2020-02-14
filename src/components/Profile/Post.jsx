import React, { useState } from 'react'
import styles from './Posts.module.css'
import Popup from './Comment/Popup'
const Post = (props) => {
        const [editMode, setEditMode] = useState(false);
        const toggleEditMode = (edit) => {
            setEditMode(edit)
        }
        const popup = (editMode ?
            <div className={`${styles.popup} ${styles.modal} ${styles.fade}`}>
                <div className={styles.buttonContainer}>
                    <button onClick={() => toggleEditMode(false)} className={styles.closeBtn}>X</button>
                </div>
                <Popup postId = {props.id}
                       postTitle = {props.title}
                       postBody = {props.body}
                       userId = {props.userId}
                 />
            </div>
            : null)

    return (
    <div className={styles.container}>
        {popup}
        <div className={`${styles.post} ${styles.supremeContainer}`}>
            <h4> Title: {props.title}</h4>
            <p>Content: {props.body}</p>
            <span>UserId: {props.userId}</span>
            <div className={styles.buttonContainer}>
                    <button onClick= {()=>toggleEditMode(true)} className={styles.myButton}>Details</button>
            </div>
        </div>
    </div>
    )
}

export default Post