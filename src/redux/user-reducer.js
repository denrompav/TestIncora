import { usersAPI } from "../api/api";

const SET_USER = 'SET_USER' 
const IS_FETCHING = 'IS_FETCHING';

const initialState = {
    users:[],
    isFetching:false,

}


const usersReducer = (state = initialState , action)=>{
    switch (action.type) {
        case SET_USER: {
            return{
                ...state,
                users:[...action.users]
            }
        }
        case IS_FETCHING: {
            return{
                ...state,
                isFetching:action.isFetching
            }
        }   
        default:
            return state
    }
}


//actionCreator

export const setUsers = (users) =>({type:SET_USER,users});
export const setIsFetching = (isFetching) => ({ type: IS_FETCHING, isFetching });


export const getUsers = () => {
    return async(dispatch)=>{
        dispatch(setIsFetching(true))
        const response = await usersAPI.getUsers()
        if(response.status === 200){
            dispatch(setIsFetching(false))
            dispatch(setUsers(response.data))
        }
    }
}


export default usersReducer