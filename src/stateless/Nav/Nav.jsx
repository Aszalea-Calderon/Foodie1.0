import React from 'react'
import {Link} from 'react-router-dom'
import Search from './Search'
//Strictly Navigation, BrowserRouter is set up in index.js, The routes are in app.js

const Nav = () => {
  return (
    <>
    <div className="nav">
      
      <Link to="/Home"className="link">Home</Link>
      <Link to="/RecipeGenHome" className="link">Recipes</Link >
      <Link to="/MyRecipes" className="link">My Recipes</Link>
      <Search />
      </div>
      
    </>
  )
}

export default Nav
