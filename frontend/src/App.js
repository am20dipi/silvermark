import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// importing BrowserRouter from react-router-dom, creating alias Router.
// react-router-dom is a node package
// when the URL matches the specified path, render that component
import './App.css'
import Login from './Login'
import Signup from './Signup'
import Home from './Home'
import Bookmarks from './Bookmarks'
import BookmarkForm from './BookmarkForm'
import CategoryForm from './CategoryForm'



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> 
        <Route exact path="/bookmarks" component={Bookmarks} />
        <Route exact path="/bookmarks/new" component={BookmarkForm} />
        <Route exact path="/categories/new" component={CategoryForm} />
      </Router>
    </div>
  ) 
  // we pass in a component to be rendered at the exact path
}

export default App
