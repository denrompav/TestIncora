import React, { Component } from 'react'
import Users from './Users'
import {getUsers} from '../../redux/user-reducer'
import { connect } from 'react-redux'
import { getUsersSelector, isFetching } from '../../redux/user-selectors';
import styles from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';
 class UserContainer extends Component {
     
     componentDidMount(){
         this.props.getUsers();
     }

     
    render() {
        if(this.props.fetching){
            return <div className = {`${styles.preloader}`}><Preloader/></div>
        }
        return (
            <div>
                <Users {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    users:getUsersSelector(state),
    fetching:isFetching(state)
})

export default connect(mapStateToProps,{getUsers})(UserContainer)