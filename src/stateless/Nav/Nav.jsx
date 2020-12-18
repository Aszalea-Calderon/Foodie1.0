import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
//Strictly Navigation, BrowserRouter is set up in index.js, The routes are in app.js

const Nav = () => {
  return (
    <>
    <div className="nav">
       <Search />
      <Link to="/Home">Home</Link>
      <Link to="/RecipeGenHome">Recipes</Link >
      <p>My Recipes</p>
      </div>
    </>
  )
}

export default Nav
