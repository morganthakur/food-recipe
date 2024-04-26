import React from 'react'
import './Header.css'
import logo  from '../../assets/Tastebites.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className="logo">
        <Link to='/'>
        <img src={logo} alt="" />
        </Link>

      </div>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact'>Contact</Link>

<button>
  Login/Register
</button>
      </div>
    </div>
  )
}

export default Header