import React from 'react'
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"

const Header = () => {
  return (
    <nav className='header'>Header
    
    <img src="/images/logo.jpg" alt="" />

    <div>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/tvshows">TV Shows</Link>
    </div>

    <ImSearch/>
    
    </nav>
    
    
  )
}

export default Header