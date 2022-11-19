import React from 'react'
import './header.css'
import CTA from "./CTA"
import ME from "../../assets/Ranajit__cc.jpeg"
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Ranajit Chandra</h1>
        <h5 className='text-light'>Backend Developer</h5>
        <CTA/>
        <HeaderSocials/>

        <div className='me'>
          <img src={ME} alt='img'/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header