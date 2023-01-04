import './Footer.css'
import React, { useContext, useState } from 'react'
import jadidAdabiyoti from '../../../adabiy-data/Object'
import { Context } from '../../Context/Context'
import { Link } from 'react-router-dom'



function Footer() {
    const {setItem} = useContext(Context)
    const arr = []
    const slBookObj = jadidAdabiyoti.slice(0,11)
    jadidAdabiyoti.forEach((e)=>{
        if(!arr.includes(e.type)){
            arr.push(e.type)
        }
    })
    const [active, setActive] = useState(arr[0])

  return (
    <footer>
        <div className="container">
            <h3 className='assos'>Asosiy kategoriyalar</h3>

            <ul className='footer_category'>
                {
                    arr?.map((e,i)=>(
                        <li  key={i} className={active == e? 'categoryActive': ''} onClick={()=> setActive(e)} name='ss'>{e}</li>
                    ))
                }
            </ul>

            <ul className='humans'>
                {
                    slBookObj.filter((evn)=> active == evn.type).map((e,i)=>(
                       <Link to='/hvi'>
                        <li onClick={()=> setItem(e)} key={i} className='card'> 
                            <img src={e.images} alt="" />
                            <p className='ism'>{e.name}</p>
                                
                            <p className='born'>{e.year}</p>
                        </li>
                       </Link>

                    ))
                }
            </ul>


        </div>
    </footer>
  )
}

export default Footer