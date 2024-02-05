import React from 'react'
import "./Broke.css"
import { Link } from 'react-router-dom';

const Broke = () => {
  return (
    <div className='back-broke'>
        <h1 className='broke'>¿Quieres saber que servicios podemos brindarte?</h1>
        <div className="button-div-call-broke">
        <Link className="button-call-broke" to="/global" target="_blank">
        Vamos por mas informacion
        </Link>
        </div>
    </div>
  )
}

export default Broke
