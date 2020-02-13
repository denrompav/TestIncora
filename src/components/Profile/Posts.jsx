import React, { useState } from 'react'
import Post from './Post'
import styles from './Posts.module.css'
import AddPostDataForm from './AddPostFormData'

const Posts = ({ posts,savePostData}) => {
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = (edit) => {
        setEditMode(edit)
    }

    const postsList = posts.map(post => {
        return <Post key={post.id} {...post} />
    })

    const onSubmit = (formData) =>{
        const userId = posts[2].userId;
        savePostData(formData,userId).then(()=>toggleEditMode(false))
    }

    const addPostForm = (userId) => {
        return (
            editMode ? <AddPostDataForm onSubmit = {onSubmit} userId={userId} toggleEditMode={toggleEditMode} /> : null
        )
    }
  
    return (
        <div>
            <div className={`${styles.containerForButton}`}>
                {editMode?null
                :<button className={`${styles.myButton}`} onClick={() => toggleEditMode(true)}>Add new post</button>}
                {addPostForm(posts.userId)}
            </div>
            <div>
               
            </div>
            {postsList}
        </div>
    )
}





export default Posts