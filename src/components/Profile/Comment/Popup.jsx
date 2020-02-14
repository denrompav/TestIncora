import React, { Component } from 'react'
import styles from './Popup.module.css'
import { getCurrentComment, deletePost, updatePost } from '../../../redux/profile-reducer'
import { connect } from 'react-redux'
import AddPostDataForm from '../AddPostFormData'
import Preloader from '../../common/Preloader/Preloader'
import prstl from '../../common/Preloader/Preloader.module.css'
class Popup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            title: this.props.postTitle,
            body: this.props.postBody,
        }
    }
    toggleEditMode = (mode) => {
        this.setState({ editMode: mode })
    }
    refreshPopup() {
        this.props.getCurrentComment(this.props.postId)
    }

    componentDidMount() {
        this.refreshPopup()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.postId !== this.props.postId || prevProps.postTitle !== this.props.postTitle) {
            this.refreshPopup();
        }
    }

    onSubmit = (formData) => {
        formData.id = this.props.postId
        formData.userId = this.props.userId
        delete formData.editMode
        this.props.updatePost(formData, this.props.postId).finally(() => this.toggleEditMode(false));
    }

    render() {
        if (this.props.isFetchingComment) {
            return <div className={prstl.preloader}><Preloader /></div>
        }
        const myPost = (this.state.editMode ? <AddPostDataForm initialValues={this.state}
            toggleEditMode={this.toggleEditMode}
            isUploading = {this.props.isUploading}
            postBody={this.state.postTitle}
            onSubmit={this.onSubmit}
        />
            : <div>
                <h3>Your Post</h3>
                <h4>{this.props.postTitle}</h4>
                <p>{this.props.postBody}</p>
                <div className={styles.btnContainer}>
                    <button className={styles.myButton} onClick={() => this.toggleEditMode(true)}>edit</button>
                    <button className={styles.myButton} onClick={() => this.props.deletePost(this.props.postId)}>delete</button>
                </div>
                {this.props.isUploading?<div>Loading...Please wait</div>:null}
            </div>)

        const commentsList = this.props.currentComments.map((comment, index) => {
            return <div key={index} className={styles.comment}>
                <p>{comment.body}</p>
            </div>
        })
        return (
            <div>
                <div className={styles.popupPost}>
                    {myPost}
                </div>
                <h3>Comments:</h3>
                {commentsList}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentComments: state.profilePage.currentComments,
    isFetchingComment: state.profilePage.isFetchingComment,
    isUploading:state.profilePage.isUploading
})

export default connect(mapStateToProps, { getCurrentComment, deletePost, updatePost })(Popup)