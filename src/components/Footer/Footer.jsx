import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logo  from '../../assets/Tastebites.png'
const Footer = () => {
  return (
    <div className='footerWrapper'>
      <div className="footerUpper">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/about' >About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/article'>Article</Link>


      </div>
     
      </div>
      <div className="footerLower">
<h3>2024 © Copyright | All Rights Reserved</h3>
</div>
    </div>
  )
}

export default Footer