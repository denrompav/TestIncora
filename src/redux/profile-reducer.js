import { profileAPI } from "../api/api";
const SET_USERS_POSTS = 'SET_USERS_POSTS';
const IS_FETCHING = 'IS_FETCHING'
const SET_CURRENT_COMMENT = 'SET_CURRENT_COMMENT'
const DELETE_POST = 'DELETE_POST'
const SAVE_NEW_POST = 'SAVE_NEW_POST'
const SOME_ERROR = 'SOME_ERROR'
const IS_FETCHING_COMMENT = 'IS_FETCHING_COMMENT'
const initialState = {
    postsData: [],
    isFetching: false,
    currentComments: [],
    errors: [],
    isFetchingComment: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_POSTS: {
            return {
                ...state,
                postsData: [...action.posts]
            }
        }
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case SET_CURRENT_COMMENT: {
            return {
                ...state,
                currentComments: [...action.comments]
            }
        }
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter((post) => post.id !== action.postId)
            }
        }
        case SAVE_NEW_POST: {
            return {
                ...state,
                postsData: [{ ...action.payload.newPost, ...action.payload }, ...state.postsData]
            }
        }
        case SOME_ERROR: {
            return {
                ...state,
                errors: [{...action.err}]
            }
        }
        case IS_FETCHING_COMMENT: {
            return {
                ...state,
                isFetchingComment: action.isFetching
            }
        }
        default:
            return state
    }
}

//actionCreator
export const setPosts = (posts) => ({ type: SET_USERS_POSTS, posts });
export const setIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });
export const setIsFetchingComment = (isFetching) => ({ type: IS_FETCHING_COMMENT, isFetching })
export const setCurrentComments = (comments) => ({ type: SET_CURRENT_COMMENT, comments })
export const deletePostInState = (postId) => ({ type: DELETE_POST, postId })
export const savePostDataInState = (newPost, userId) => ({ type: SAVE_NEW_POST, payload: { newPost, userId } })
export const someError = (err) => ({ type: SOME_ERROR, err })

//thunk
export const getPosts = (userId) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const response = await profileAPI.getPosts(userId).catch(err => dispatch(someError(err)))
        if (response.status === 200) {
            dispatch(setPosts(response.data))
            dispatch(setIsFetching(false))

        }
    }
}

export const getCurrentComment = (postId) => {
    return async (dispatch) => {
        dispatch(setIsFetchingComment(true))
        const response = await profileAPI.getCurrentComment(postId).catch(err => dispatch(someError(err)))
        if (response.status === 200) {
            dispatch(setCurrentComments(response.data))
            dispatch(setIsFetchingComment(false))

        }
    }
}

export const savePostData = (post, userId) => {
    return async (dispatch) => {
        const response = await profileAPI.savePost(post).catch(err => dispatch(someError(err)))
        if (response.status === 201) {
            dispatch(savePostDataInState(response.data, userId))
        }
    }
}

export const deletePost = (postId) => {
    return async (dispatch) => {
        const response = await profileAPI.deletePost(postId).catch(err => dispatch(someError(err)))
        dispatch(deletePostInState(postId))
        if (response.status === 200) {
            dispatch(deletePostInState(postId))
        }
    }
}

export const updatePost = (updatedPost, postId) => {
    return async (dispatch) => {
        delete updatedPost.editMode
        const response = await profileAPI.updatePost(updatedPost, postId).catch(err => dispatch(someError(err)))
        if (response.status === 200) {
            dispatch(getPosts(postId))
        }
    }
}


export default profileReducer