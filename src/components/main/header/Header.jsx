import React, { useState } from 'react'
import './Header.css'
import profile from '../../../assest/img/profile.svg'
import { Link } from 'react-router-dom'

function Header() {
  const [active, setActive] = useState(0)
  
  return (
    <header>
        <div className="container">
            <div className="head__wrap">

              <div className="head__wrap-left">
                  <h1>Badiiyat</h1>
              </div>

              <div className="head__wrap-right">
                  <ul>
                    <Link to='/'><li className={active == 1 ? 'navigations active': 'navigations'} id='1' onClick={(e)=> setActive(e.target.id)}>Bosh sahifa</li></Link>
                    <Link to='/hvi'><li className={active == 2 ? 'navigations active': 'navigations'} id='2' onClick={(e)=> setActive(e.target.id)}>Nasr</li></Link>
                    <Link to='/books'><li className={active == 3 ? 'navigations active': 'navigations'} id='3' onClick={(e)=> setActive(e.target.id)}>Kitoblar</li></Link>
                    <Link to='/about-books'><li className={active == 4 ? 'navigations active': 'navigations'} id='4' onClick={(e)=> setActive(e.target.id)}>Kitoblar Haqida</li></Link>
                    <li className={active == 5 ? 'navigations active': 'navigations'} id='5' onClick={(e)=> setActive(e.target.id)}>Forum</li>
                  </ul>

                  <div className="profile">
                      <img src={profile} alt="" />
                      {/* <p></p> */}
                  </div>
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header;