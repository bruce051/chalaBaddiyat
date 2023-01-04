import React, { useRef } from 'react'
import './Hero.css'
import heroImg from '../../../assest/img/hero.png'
import jadidAdabiyoti from '../../../adabiy-data/Object'


function Hero() {
  const inp = useRef()
  let dataArr = []
  return (
      <div className="hero">
          <div className="container">
              <div className="hero_wrap">
                <img src={heroImg} alt="" />

                <form action="#">
                    <h3>Qidirish</h3>

                    <div>
                      <input ref={inp} placeholder= "Adiblar, kitoblar, audiolar, maqolalar..." type="text" />
                      <button type='submit'><ion-icon id="search" name="search-outline"></ion-icon>  Izlash</button>
                    </div>
                </form>
              </div>
          </div>
      </div>
  )
}

export default Hero