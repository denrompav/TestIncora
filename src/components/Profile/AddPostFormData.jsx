import React from 'react'
import { reduxForm } from 'redux-form'
import e from '../common/FormControls/FormsControls.module.css'
import { createField, Input, Textarea } from '../common/FormControls/FormControls'
import styles from '../Profile/Posts.module.css'

const AddPostDataForm = (props) =>{
    return(
        <form  onSubmit = {props.handleSubmit} className ={e.form}>
            <div >
            </div>
            <div className ={e}>{createField('title name', 'title', [], Input, null, null)}</div>
            <div>Post Content:</div>
            {createField('content', 'body', [], Textarea, null, null)}
            {props.error && <div >{props.error}</div>}
            <button className = {styles.myButton} >Save</button>
            <button className = {styles.myButton} onClick = {()=>props.toggleEditMode(false)}>cancel</button>
        </form>
    )
}

 export default reduxForm({
     form:'add-post'
})(AddPostDataForm) 