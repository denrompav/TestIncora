import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware  from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import usersReducer from './user-reducer'
import profileReducer from './profile-reducer';
const reducers = combineReducers({
    usersPage:usersReducer,
    profilePage:profileReducer,
    form:formReducer,
    
});

const store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default store;