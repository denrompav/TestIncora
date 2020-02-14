import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getPosts, savePostData } from '../../redux/profile-reducer'
import { getPostsSelector, getFetching, getError } from '../../redux/profile-selectors'
import Posts from './Posts'
import Preloader from '../common/Preloader/Preloader'
import styles from '../common/Preloader/Preloader.module.css'
class PostsContainer extends Component {


    refreshProfile() {
        let userId = this.props.match.params.id;
        if (!userId) {
            this.props.history.push('/')
        }
        this.props.getPosts(userId)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.refreshProfile()
        }
    }
    render() {
        if (this.props.isFetching) {
            return <div className={`${styles.preloader}`}><Preloader /></div>
        }

        return (
            <div>
                <Posts {...this.props} />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    posts: getPostsSelector(state),
    isFetching: getFetching(state),
    errors: getError(state)
})
export default compose(
    withRouter,
    connect(mapStateToProps, { getPosts, savePostData })

)(PostsContainer)