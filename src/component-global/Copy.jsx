import React from 'react';
import './Copy.css';
import Visa from '../assets/visa.svg'
import Button2 from './Button2';

const Copy = () => {
  return (
    <div className='copy-div'>
    <h1 className='title-copy'>¿Que es GLOBAL NEXT TRADE?</h1>
    <p className='primer-copy'>
    Global Next Trade es una empresa líder en tecnología financiera que ha revolucionado el Trading. <br/>
    Su plataforma innovadora y herramientas analíticas avanzadas me permiten tomar decisiones informadas y aprovechar oportunidades de mercado en tiempo real
    </p>
    <div>
        <h1 className='title-copy'>¿Qué espero de GLOBAL NEXT TRADE?</h1>
        <p className='primer-copy'>
        GLOBAL NEXT TRADE ya esta en 2028...<br/>
        Luego de crear tu cuenta live obtienes de manera inmediata tu visa black internacional para así hacer tus retiros de manera inmediata y segura. <br/>
        Abre tu cuenta ya y comienza con esta gran experiencia
        </p>
        <p className='cuarto-copy'>
            Para acceder…
            <br />
            <b>No necesitas</b> tener conocimientos ni experiencia previa en finanzas.
            <br />
            <b>No necesitas</b> estar ganando miles de dólares al mes para comenzar tu cuenta.
            <br />
            <b>No necesitas</b> ser un experto en trading.
            <br />
        </p>
        <p className='cuarto-copy'>
            Ademas contamos con...
            <br />
            <b>La única</b> tarjeta para acceder a tus ganancias de trading en Latinoamérica
            <br />
        </p>
        <div className='back-visa'>
          <img src={Visa} className='visa'/>
        </div>
    </div>
    <Button2 />
    </div>
  )
}

export default Copy;