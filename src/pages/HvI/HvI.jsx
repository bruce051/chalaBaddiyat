import React from 'react'
import './HvI.css'
import hviImg from '../../assest/img/hvi.svg'
import { useContext } from 'react'
import { Context } from '../../components/Context/Context'


function HvI() {
  const {item} = useContext(Context)

  
  
  return (
    <div className="hvi">
      <div className="container">
          <div className="hvi_wrap">
            <div className="hvi_left">
              <img src={hviImg} alt="" />

              <div className="hvi_left-info">
                <div className="left_info-left">
                  <h6>Tavallud sanasi</h6>
                  <h2>5-Avg 1941</h2>
                  <h6>Toshkent, Uzbekistan</h6>
                </div>

                <div className="left_info-center">
                  <p>-</p>
                </div>

                <div className="left_info-right">
                  <h6>Vafot sanasi</h6>
                  <h2>24-MAY 2013</h2>
                  <h6>Toshkent, Uzbekistan</h6>
                </div>
              </div>
            </div>

            <div className="hvi_right">
              {
                <h2 className='hvi-name'>{}</h2>
              }

              <p className='hvi-info'>Oʻtkir Hoshimov 1941 yil Toshkent viloyatining Zangiota (hozirgi Chilonzor) tumanidagi Doʻmbiravot mavzeida tugʻildi. Oʻ. Hoshimov mehnat faoliyatini erta boshladi. Toshkent Davlat universiteti (hozirgi Oʻzbekiston Milliy universiteti)ning jurnalistika kulliyotida oʻqish bilan baravar gazeta tahririyatida ishladi. 1959 yildan 1963 yilgacha “Temiryoʻlchi”, “Qizil Oʻzbekiston”, “Transportniy rabochiy” gazetalarida xat tashuvchi, mussaxhih, tarjimon boʻlib ishladi. Soʻng “Toshkent haqiqati” gazetasida adabiy xodim (1963–1966), “Toshkent oqshomi” gazetasida boʻlim mudiri (1966–1982), Gʻ. Gʻulom nomidagi Adabiyot va sanʼat nashriyotida bosh muharrir oʻrinbosari (1982–1985) boʻldi. 1985–1995 yillarda “Sharq yulduzi” jurnaliga bosh muharrirlik qildi. 1995 yildan 2005 yilgacha Oʻzbekiston Respublikasi Oliy Majlisining Matbuot va axborot qoʻmitasi raisi lavozimida ishladi. 2005 yildan “Teatr“ jurnalida bosh muharrir boʻlib ishladi.</p>

              <div className="hvi_right-center">
                  <span className='ijodi'><ion-icon name="bookmark-sharp"></ion-icon> <p>Ijodi</p></span>

                  <p>Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>
              </div>

              <div className="hvi_right-data">
                <div className="hvi_right-data-top">
                  <h2>Asarlari</h2>
                  <button>Barchasini ko’rish</button>
                </div>

                <ul className='kitoblar_datasi'>
                    <li className='kitoblarUsr'>
                        <img src={hviImg} alt="" />
                        <h2>Dunyoning ishlari</h2>
                        <p><ion-icon name="star-outline"></ion-icon>  4.1 • 3400 ta fikrlar</p>
                    </li>

                    <li className='kitoblarUsr'>
                        <img src={hviImg} alt="" />
                        <h2>Dunyoning ishlari</h2>
                        <p><ion-icon name="star-outline"></ion-icon>  4.1 • 3400 ta fikrlar</p>
                    </li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default HvI