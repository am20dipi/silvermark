import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import '../App.css'

import Navbar from './Navbar'
import Login from './Login'
import Signup from './Signup'
import Logout from './Logout'
import Bookmarks from '../containers/Bookmarks'
import AboutUs from '../containers/AboutUs'
import Categories from '../containers/Categories'
import Home from '../containers/Home'

import { connect } from 'react-redux'
import history from '../history'

import { getBookmarks, createBookmark, deleteBookmark, favoriteBookmark } from '../actions/index'
import { getCategories, createCategory, deleteCategory } from '../actions/index'
import { signupUser, loginUser, logoutUser } from '../actions/index'






class App extends React.Component {
  
 
  render() {
    return (
      <div className="App">
        <Router history={history}>
            <Navbar />
            <Switch>
              <Route exact path='/' render={() => <Home />}/>
              <Route exact path='/about' render={() => <AboutUs/>} />
              <Route exact path="/login" render={routeProps => <Login loginUser={this.props.loginUser} {...routeProps} />}/>
              <Route exact path="/signup" render={routeProps => <Signup signupUser={this.props.signupUser} {...routeProps} />}/>
              <Route exact path="/bookmarks" render={routeProps => <Bookmarks bookmarks={this.props.bookmarks} getBookmarks={this.props.getBookmarks} createBookmark={this.props.createBookmark} deleteBookmark={this.props.deleteBookmark}  favoriteBookmark={this.props.favoriteBookmark} categories={this.props.categories} createCategory={this.props.createCategory} {...routeProps} />}/>
              <Route exact path="/logout" render={routeProps => <Logout logoutUser={this.props.logoutUser} {...routeProps}/>}/>
              <Route exact path="/categories" render={routeProps => <Categories categories={this.props.categories} deleteCategory={this.props.deleteCategory} {...routeProps} /> }/>
            </Switch>
        </Router>
      </div>
    ) 
  }
}


const mapStateToProps = (state) => {
  return {
    bookmarks: state.bookmarks.bookmarks,
    categories: state.categories.categories,
    users: state.users.currentUser,
    requesting: state.requesting
  }
}

// mSTP selects the part of the data from the store to be connected to App Component
// mSTP reutrns a plain object containing the data from the store
// called every time Redux store state changes
// first arg = the entire store state
// key:value pairs => each field becomes a prop for app component

const mapDispatchToProps = (dispatch) => {
  return {
    createBookmark: (bookmark) => dispatch(createBookmark(bookmark)),
    deleteBookmark: (id) => dispatch(deleteBookmark(id)),
    getBookmarks: () => dispatch(getBookmarks()),
    favoriteBookmark: (id) => dispatch(favoriteBookmark(id)),
    createCategory: (category) => dispatch(createCategory(category)),
    deleteCategory: (id) => dispatch(deleteCategory(id)),
    getCategories: () => dispatch(getCategories()),
    signupUser: (user) => dispatch(signupUser(user)),
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser())
  }
}

// mDTP dispatches actions to the store
// first arg: dispatch => a function of the store; the only way to trigger a state change
// we return each action function with dispatch inside
// we pass to dispatch the action and its args
// we bind on each component mount
// mDTP returns a plain object
// each field becomes a separate prop for app component

export default connect(mapStateToProps, mapDispatchToProps)(App)
// connect() accesses the store for us