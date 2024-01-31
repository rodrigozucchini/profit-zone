import React from 'react'
import './Hotmart.css'
import ButtonH from './ButtonH'
import HotmartImg from '../assets/hotmart.png'
import Modulo from '../assets/modulo.png'

const Hotmart = () => {
  return (
    <div className='back-title-hotmart'>
        <p className='title-hotmart'>
          Además puedes unirte hoy <br />al equipo con un <span className='tag-hotmart'>PROGRAMA</span> que te llevará de <span className='tag-hotmart'>0 a PRO</span><br />
          ¡100% garantizado! <br />
          cupos limitados en  <span className='tag-hotmart'>HOTMART<img src={HotmartImg} className='hotmart-img'/></span>
        </p>
        <img src={Modulo} className='modulo-base'/>
        <ButtonH />
    </div>
  )
}

export default Hotmart
