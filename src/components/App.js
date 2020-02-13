import React from 'react';
import './App.css'
import Header from './Header/Header';
import UsersContainer from './Users/UserContainer'
import { Route } from 'react-router-dom'
import PostsContainer from './Profile/PostsContainer';
const App = (props) => {
			return (
				<div className='app-wrapper'>
					<Header />
					<div className="app-wrapper-content">

						<Route exact path='/'
							render={() => <UsersContainer />} />

						<Route path='/posts/user/:id?'
							render={() => <PostsContainer />} />

					</div>
				</div>
			)
		}
	


export default App;
