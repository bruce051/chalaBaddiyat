import React, { useState } from 'react'
import './Kitoblar.css'
import Hero from '../../components/main/hero/Hero'
import bookObj from '../../adabiy-data/BooksObj'



function Kitoblar() {

  const kitobCat = ['all']
  const kitoblarArr =[]

  bookObj.forEach(e =>{
    if (!kitoblarArr.includes(e)) {
      kitoblarArr.push(e)
    }
  })

  bookObj.forEach(e =>{
    if (!kitobCat.includes(e.type)) {
      kitobCat.push(e.type)
    }
  })


  const [bookAc, setBookAc] = useState(kitoblarArr[0])
  return (
    <div className='kitoblar'>
        <Hero/>
        <div className="container">
            <h3 className='assos'>Asosiy kategoriyalar</h3>

            <ul className='footer_category'>
                {
                  kitobCat?.map((e,i)=>(
                    <li  key={i} className={bookAc == e? 'categoryActive': ''} onClick={()=> setBookAc(e)}>{e}</li>
                  ))
                }
            </ul>

            <ul className='humans'>
                {
                  kitoblarArr.filter((evn)=> bookAc == evn.type).map((item,i)=>(
                  
                      <li key={i} className='kitoblarCard'>
                        <img src={item.img} alt="" />
                        <p className='ism'>{item.nameBook}</p>
                        <p className='muallif'>{item.name}</p>
                        <p className='comments'><ion-icon name="star-outline"></ion-icon> {item.comments}</p>
                      </li>
                    
                  ))
                }
            </ul>


        </div>
    </div>
  )
}

export default Kitoblar