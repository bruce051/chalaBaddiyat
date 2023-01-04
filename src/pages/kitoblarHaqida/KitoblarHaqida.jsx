import React from 'react'
import './KitoblarHaqida.css'
import immg from '../../assest/img/image 18.svg'

function KitoblarHaqida() {
  return (
    <div className='kitoblarHaqida'>
        <div className="container">
            <div className="kitoblar_warp">
                <div className="kitoblar_warp-left">
                    <img src={immg} alt="" />
                </div>

                <div className="kitoblar_warp-right">
                    <h2>Qo’rqma</h2>

                    <span className='aftr'> <p>Javlon Jovliyev</p> | <ion-icon name="star-outline"></ion-icon> 4.1 </span>

                    <span className='pageCount'>Sahifalar soni: <p>376</p></span>

                    <span className='madeIn'>Chop etilgan: <p>2021</p></span>

                    <span className='genre'>Janri: <p>Tarixiy</p></span>

                    <span className='nashr'>Nashriyot: <p>Nihol nashr</p></span>

                    <span className='toliqMal'>To’liq ma’lumot <ion-icon name="arrow-down-outline"></ion-icon> <hr /></span>

                    <p className='kitonInfo'>Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва собиқ Совет Иттифоқи           томонидан 
                        шафқатсизларча қатл этилган миллат йигит-қизларининг  <br />  хотирасига бағишланади. <br />
                        <br />
                        Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси шу қадар  тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,  кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади, йиғлатади ва аччиқ-аччиқ кулдиради.  Ўтган аср бошида Германияда ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар мақсади билан бир тарозига тортилади.</p>

                    <p className='haveFormat'>Mavjud formatlar</p>

                    <div className="fourPage">
                        <div className="kitoblar_warp-right-bottom-left">
                            <div className="bottom_left-item1">
                                <ion-icon name="book"></ion-icon>
                                <h3>Qog'oz kitob</h3>
                                <p>27 000 so’m</p>
                            </div>

                            <div className="bottom_left-item2">
                                <ion-icon name="headset"></ion-icon>
                                <h3>Audio Kitob</h3>
                                <p>6:23 soat</p>
                            </div>

                            <div className="bottom_left-item3">
                                <ion-icon name="tv-outline"></ion-icon>
                                <h3>Elektron</h3>
                                <p>pdf, epub</p>
                            </div>
                        </div>

                        <div className="kitoblar_warp-right-bottom-right">
                            <button>Javonga qo’shish </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default KitoblarHaqida