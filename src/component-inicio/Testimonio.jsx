import React from 'react'
import Testimonio1 from '../assets/Testimonio1.jpeg'
import Testimonio2 from '../assets/Testimonio2.jpeg'
import Testimonio3 from '../assets/Testimonio3.jpeg'
import Testimonio4 from '../assets/Testimonio4.jpeg'
import Testimonio5 from '../assets/Testimonio5.jpeg'
import Testimonio6 from '../assets/Testimonio6.jpeg'
import './Testimonio.css'

const Testimonio = () => {
  return (
    <>
    <div className="backgroundc-testimonio">
        <h1 className='testimonio-title'>TESTIMONIO</h1>
        <div className='backc-testimonio'>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio1} />
                <p className='pc-testimonio'>“Un resultado deseado”</p>
            </div>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio2} />
                <p className='pc-testimonio'>“Resultados de traders”</p>
            </div>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio3} />
                <p className='pc-testimonio'>“Siguio los pasos <br/>y obtuvo resultado”</p>
            </div>
        </div>
        <div className='backc-testimonio'>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio4} />
                <p className='pc-testimonio'>“Gracias a los consejos <br/>obtuve resultados”</p>
            </div>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio5} />
                <p className='pc-testimonio'>“Un grupo excelente”</p>
            </div>
            <div className='cardc-testimonio'>
                <img className="imagec-testimonio" src={Testimonio6} />
                <p className='pc-testimonio'>“Experiencia positiva”</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonio