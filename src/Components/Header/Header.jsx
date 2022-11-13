import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../Assets/logo.png'
function Header() {
  return (
    <div className="header" id='Header'>
        <div className="headerleft">
          <Link to="/" className='header_logo'><h2>ReactMovies</h2></Link>
          <Link to="/Movies/popular">Popular</Link>
          <Link to="/movies/top_rated">Top Rated</Link>
          <Link to="/Movies/upcoming">Upcoming</Link>
        </div>
    </div>
  )
}

export default Header